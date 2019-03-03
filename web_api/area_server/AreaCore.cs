using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;

namespace area_server
{
    //list avec toute les area (+ user_id et area_id) classé par user_id
    // dans new db table avoir colones id | uid | value
    // soit 1ere requete pour fill value quand creation ou au premier passage (value == null)
    // penser a delete la value quand delete l'area

    //pour les token
    //tout token d'un user stocker dans un object json
    // variable avec current json_token et variable avec current user_id
    // a chaque nouvelle area test sur area.user_id == current_user_id
    //si oui osef juste process avec current_json_token
    //si non get le bon json_token correspondant a l'user_id


    public class AreaCore
    {
        private static string uri_youtube_sub = "https://www.googleapis.com/youtube/v3/channels?access_token={0}&part=statistics&mine=true";
        private static string uri_youtube_like = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id={0}&access_token={1}";
        private static string uri_youtube_vod = "https://www.googleapis.com/youtube/v3/channels?id={0}&access_token={1}&part=statistics";


        private static string uri_twitch_userid = "https://id.twitch.tv/oauth2/validate";
        private static string uri_twitch_count_follow = "https://api.twitch.tv/kraken/users/{0}/follows/channels?oauth_token={1}";
        private static string uri_twitch_count_follower = "https://api.twitch.tv/kraken/channels/{0}/follows/?oauth_token={1}";
        private static string uri_twitch_streamer_id = "https://api.twitch.tv/helix/users?login={0}";
        private static string uri_twitch_streamer_live = "https://api.twitch.tv/helix/streams?user_id={0}";

        private static string uri_gdrive = "https://www.googleapis.com/drive/v3/files/?pageSize=1000&access_token={0}";
        private static string uri_gdrive_next = "https://www.googleapis.com/drive/v3/files/?pageSize=1000&access_token={0}&pageToken={1}";

        private static string uri_onedrive = "https://graph.microsoft.com/v1.0/me/drive/sharedWithMe";

        private static string uri_gsheet = "https://www.googleapis.com/drive/v3/files?q=mimeType%3D%27application%2Fvnd.google-apps.spreadsheet%27";

        private JArray area_list;
        private JObject user_access_token;
        private int current_user_id = -1;
        delegate string areaAction(JObject param, string uid, JObject extra);
        List<areaAction> area_action = new List<areaAction>();

        public AreaCore(int timer)
        {
            Interval = timer;
            area_list = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("area", "*", "user_id");
            current_user_id = -1;

            area_action.Add(new areaAction(youtube_subscriber));
            area_action.Add(new areaAction(youtube_like));
            area_action.Add(new areaAction(youtube_video));

            area_action.Add(new areaAction(facebook_like));
            area_action.Add(new areaAction(facebook_new_page));
            area_action.Add(new areaAction(facebook_new_post));

            area_action.Add(new areaAction(twitch_new_follow));
            area_action.Add(new areaAction(twitch_new_follower));
            area_action.Add(new areaAction(twitch_streamer_live));

            area_action.Add(new areaAction(drive_new_file));
            area_action.Add(new areaAction(one_drive_new_file));

            area_action.Add(new areaAction(gsheet_new_sheet));
        }

        public int Interval { get; }

        public void test_method()
        {
            Console.WriteLine("methoed exec");
            Console.WriteLine(Utils.generate_token("3:2")); // creation uid
            Console.WriteLine(get_area_value("MakA"));
            set_area_value("MakA", "78");
            Console.WriteLine(get_area_value("MakA"));
            set_area_value("Makp", "78");
        }

        public void run()
        {
            for (int i = 0; i < area_list.Count; i++) // pour chaque area
            {
                JToken current_area = area_list[i];
                if ((int)current_area["user_id"] != current_user_id) // si user suivant != current user
                {
                    // alors get next user token
                    current_user_id = (int)current_area["user_id"];
                    dynamic result = DBConnect.my_select("user_access_token WHERE user_id = " + current_user_id + "", "*");
                    user_access_token = result[0];
                }
                string user_uid = Utils.generate_token(current_user_id + ":" + current_area["id"]);

                JObject extra = JObject.Parse("{}");
                extra.Add("p_video_id", current_area["p_video_id"]);
                extra.Add("p_page_id", current_area["p_page_id"]);
                extra.Add("p_fbpage_id", current_area["p_fbpage_id"]);
                extra.Add("p_ytb_name", current_area["p_ytb_name"]);
                extra.Add("p_streamer", current_area["p_streamer"]);


                string status = area_action[11](user_access_token, user_uid, extra);
                Console.WriteLine("twitch " + status);

                // fucntion action avec token en param et string en return

                // compare string de return avec la value stocker

                // lance ou non la fonction de reaction


            }
        }

        public static string get_area_value(string uid)
        {
            JArray json = (JArray)DBConnect.my_select("area_value WHERE uid = '" + uid + "'", "*");
            if (json.Count == 0) return (null);
            else
            {
                var tmp = json[0];
                return tmp["value"].ToString();
            }
        }

        public static void set_area_value(string uid, string value)
        {
            JArray json = (JArray)DBConnect.my_select("area_value WHERE uid = '" + uid + "'", "*");
            if (json.Count == 0)
            {
                DBConnect.my_insert("area_value", "uid, value", "'" + uid + "', '" + value + "'");
            }
            else
            {
                DBConnect.my_update("area_value", "value = '" + value + "'", "uid = '" + uid + "'");
            }
        }

        private static string youtube_subscriber(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["google"].ToString();
            Console.WriteLine(extra);
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_youtube_sub, token_user));
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string new_value = myResponse.items[0].statistics.subscriberCount;
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value);
                }
            }
            catch (Exception) { return(null); }
            return ("NaN");
        }

        private static string youtube_like(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["google"].ToString();
            Console.WriteLine(extra);
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_youtube_sub, extra["p_video_id"], token_user));
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string new_value = myResponse.items[0].statistics.likeCount;
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string youtube_video(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["google"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_youtube_vod, extra["p_ytb_name"], token_user));
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string new_value = myResponse.items[0].statistics.videoCount;
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string facebook_like(JObject token, string user_uid, JObject extra)
        {
            return "";
        }

        private static string facebook_new_page(JObject token, string user_uid, JObject extra)
        {
            return "";
        }

        private static string facebook_new_post(JObject token, string user_uid, JObject extra)
        {
            return "";
        }

        private static string twitch_new_follow(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["twitch"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri_twitch_userid);
                request.Headers.Add("Authorization", "OAuth " + token_user);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string user_login = myResponse.login;

                request = (HttpWebRequest)WebRequest.Create(string.Format(uri_twitch_count_follow, user_login, token_user));
                response = (HttpWebResponse)request.GetResponse();
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }

                string new_value = myResponse._total;
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string twitch_new_follower(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["twitch"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri_twitch_userid);
                request.Headers.Add("Authorization", "OAuth " + token_user);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string user_login = myResponse.login;

                request = (HttpWebRequest)WebRequest.Create(string.Format(uri_twitch_count_follower, user_login, token_user));
                response = (HttpWebResponse)request.GetResponse();
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }

                string new_value = myResponse._total;
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }
        
        private static string twitch_streamer_live(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["twitch"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_twitch_streamer_id, extra["p_streamer"]));
                request.Headers.Add("Authorization", "Bearer " + token_user);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string user_login = myResponse.data[0].id;

                request = (HttpWebRequest)WebRequest.Create(string.Format(uri_twitch_streamer_live, user_login, token_user));
                request.Headers.Add("Authorization", "Bearer " + token_user);
                response = (HttpWebResponse)request.GetResponse();
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }

                int tmp = myResponse.data.Count;
                string new_value = tmp.ToString();
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    if (new_value == "0" && old_value == "1")
                        set_area_value(user_uid, new_value);
                    else
                    {
                        set_area_value(user_uid, new_value);
                        return (new_value);
                    }
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string drive_new_file(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["google"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_gdrive, token_user));
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }

                int file_count = myResponse.files.Count;
                bool end_of_search = myResponse.incompleteSearch;
                string next_page_token = myResponse.nextPageToken;

                while (end_of_search == false)
                {
                    request = (HttpWebRequest)WebRequest.Create(string.Format(uri_gdrive_next, token_user, next_page_token));
                    response = (HttpWebResponse)request.GetResponse();
                    using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                    {
                        myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                    }

                if (myResponse.nextPageToken == null)
                {
                    end_of_search = true;
                }
                else
                    end_of_search = myResponse.incompleteSearch;


                file_count += myResponse.files.Count;
                    next_page_token = myResponse.nextPageToken;
                }

                string new_value = file_count.ToString();
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string one_drive_new_file(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["onedrive"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri_onedrive);
                request.Headers.Add("Authorization", "Bearer " + token_user);
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }

                string new_value = "" + myResponse.value.Count;
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string gsheet_new_sheet(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["google"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(uri_gsheet);
                request.Headers.Add("Authorization", "Bearer " + token_user);
                request.Headers.Add("Accept", "application/json");
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }

                string new_value = "" + myResponse.files.Count;
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }

                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }
    }
}