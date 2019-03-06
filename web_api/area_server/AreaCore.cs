using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace area_server
{
    public class AreaCore
    {
        private static string[] str_mail = new string[] {"<h1>EZ AREA</h1><p>Les nombre d'Abonné a votre chaine youtube https://www.youtube.com/channel/{0} a changer ! Il est desormais de {1}<p>",
            "<h1>EZ AREA</h1><p>Les nombre de like sur la video https://www.youtube.com/watch?v={0} a changer ! Il est desormais de {1}<p>",
            "<h1>EZ AREA</h1><p>Les nombre de video sur la chaine youtube https://www.youtube.com/channel/{0} a changer ! Il est desormais de {1}<p>",
            "<h1>EZ AREA</h1><p>Les nombre de J'Aime votre page Facebook {0} a changer ! Il est desormais de {1}<p>",
            "<h1>EZ AREA</h1><p>Vous venez de {0} page facebook ! vous possedez desormais {1} page facebook<p>",
            "<h1>EZ AREA</h1><p>Le nombre de post sur votre mur facebook a changer ! Il est desormais de {0}{1}<p>",
            "<h1>EZ AREA</h1><p>Le nombre de streamer que vous suivez sur twitch a changer ! Il est desormais de {0}{1}<p>",
            "<h1>EZ AREA</h1><p>Le nombre de follower qui vous suit sur twitch a changer ! Il est desormais de {0}{1}<p>",
            "<h1>EZ AREA</h1><p>Le streamer {0}{1} est maintenant en live !<p>",
            "<h1>EZ AREA</h1><p>Le contenu de votre google drive a été modifier, il contient desormais {0}{1} fichiers<p>",
            "<h1>EZ AREA</h1><p>Le contenu de votre onedrive a été modifier, il contient desormais {0}{1} fichiers<p>",
            "<h1>EZ AREA</h1><p>Le nombre de google sheet present sur votre drive, il contient desormais {0}{1} google sheet<p>"};

        private static string[] str_sheet = new string[] {"nombre d'abonné",
            "nombre de like",
            "nomber de video",
            "nombre de like",
            "nombre de page",
            "nombre de post",
            "nombre de streamer",
            "nombre de follower",
            "streamer en live",
            "fichier gdrive",
            "fichier onedrive",
            "nombre de gsheeet"};

        private static string[] cell_sheet = new string[] { "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12", "B13"};

        private static string uri_youtube_sub = "https://www.googleapis.com/youtube/v3/channels?access_token={0}&part=statistics&mine=true";
        private static string uri_youtube_like = "https://www.googleapis.com/youtube/v3/videos?part=statistics&id={0}&access_token={1}";
        private static string uri_youtube_vod = "https://www.googleapis.com/youtube/v3/channels?id={0}&access_token={1}&part=statistics";

        private static string uri_facebook_get_page = "https://graph.facebook.com/me/accounts?access_token={0}";
        private static string uri_facebook_get_page_like = "https://graph.facebook.com/{0}?fields=fan_count&access_token={1}";
        private static string uri_facebook_post_count = "https://graph.facebook.com/me/feed?access_token={0}";

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
        delegate string areaReaction(JObject param, string extra, JObject current_area);
        List<areaAction> area_action = new List<areaAction>();
        List<areaReaction> area_reaction = new List<areaReaction>();

        public AreaCore(int timer)
        {
            Interval = timer;
            area_list = (JArray)DBConnect.my_select("area", "*", "user_id");
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




            area_reaction.Add(new areaReaction(reac_mail));
            area_reaction.Add(new areaReaction(reac_gsheet));
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


                // fucntion action avec token en param et string en return
                string status = area_action[int.Parse(current_area["action_id"].ToString()) - 1](user_access_token, user_uid, extra); // here

                // lance ou non la fonction de reaction
                if (status == null)
                {
                    DBConnect.my_update("area", "error = " + "1", "id = " + current_area["id"]);
                }
                else if (status != "NaN")
                {
                    status = area_reaction[int.Parse(current_area["reaction_id"].ToString()) - 1](user_access_token, status, (JObject)current_area);
                    if (status == null) { DBConnect.my_update("area", "error = " + "1", "id = " + current_area["id"]); }
                }

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
                    return (new_value + "]!#![" + myResponse.items[0].id);
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
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_youtube_like, extra["p_video_id"], token_user));
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
                    return (new_value + "]!#![" + myResponse.items[0].id);
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
                    return (new_value + "]!#![" + myResponse.items[0].id);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string facebook_like(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["facebook"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_facebook_get_page, token_user));
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string page_name = myResponse.data[0].name;
                string page_id = myResponse.data[0].id;

                request = (HttpWebRequest)WebRequest.Create(string.Format(uri_facebook_get_page_like, page_id, token_user));
                response = (HttpWebResponse)request.GetResponse();
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string new_value = myResponse.fan_count;
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }
                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value + "]!#![" + page_name);
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string facebook_new_page(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["facebook"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_facebook_get_page, token_user));
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string new_value = (myResponse.data.Count).ToString();
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }
                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    if (int.Parse(new_value) > int.Parse(old_value))
                    {
                        return (new_value + "]!#![" + "creer une nouvelle");
                    }
                    else
                    {
                        return (new_value + "]!#![" + "supprimer une de vos");
                    }
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string facebook_new_post(JObject token, string user_uid, JObject extra)
        {
            string token_user = token["facebook"].ToString();
            try
            {
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(string.Format(uri_facebook_post_count, token_user));
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string new_value = (myResponse.data.Count).ToString();
                string old_value = get_area_value(user_uid);
                if (old_value == null)
                {
                    set_area_value(user_uid, new_value);
                    old_value = new_value;
                }
                if (old_value != new_value)
                {
                    set_area_value(user_uid, new_value);
                    return (new_value + "]!#![" + "");
                }
            }
            catch (Exception) { return (null); }
            return ("NaN");
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
                    return (new_value + "]!#![" + "");
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
                    return (new_value + "]!#![" + "");
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
                        return (new_value + "]!#![" + extra["p_streamer"]);
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
                    return (new_value + "]!#![" + "");
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
                    return (new_value + "]!#![" + "");
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


        private static string reac_mail(JObject token, string param, JObject current_area)
        {
            string query = "https://api.mailjet.com/v3.1/send";
            try
            {
                var tmp = param.Split("]!#![");

                JArray json = (JArray)DBConnect.my_select("users WHERE id = '" + current_area["user_id"] + "'", "*");
    
                if (current_area["action_id"].ToString() == "8") { tmp[0] = ""; }
                string mail = string.Format(str_mail[int.Parse(current_area["action_id"].ToString()) - 1], tmp[1], tmp[0]);
                string queryString = "{\"Messages\":[{\"From\": {\"Email\": \"coucourswin@gmail.com\",\"Name\": \"Mailjet Pilot\"},\"To\": [{\"Email\": \"" + (json[0])["email"] + "\",\"Name\": \"passenger 1\"}],\"Subject\": \"Your email flight plan!\",\"TextPart\": \"Dear passenger 1, welcome to Mailjet! May the delivery force be with you!\",\"HTMLPart\": \"<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!\"}]}";

                dynamic jsonn = JsonConvert.DeserializeObject(queryString);
                jsonn.Messages[0].Subject = "AREA trigger";
                jsonn.Messages[0].TextPart = mail;
                jsonn.Messages[0].HTMLPart = mail;
                Console.WriteLine(jsonn);

                var hc = new HttpClient();
                hc.DefaultRequestHeaders.Add("Authorization", "Basic N2Y3NzljNGU1NjFhNWJjODdmNmQxY2IwYjgzOWEyYzk6ZDVjNThhZTU5NDJmMjkwNzkzZjkwZDQxNmYwNWM2ODI=");
                var content = new StringContent(jsonn.ToString(), Encoding.UTF8, "application/json");
                var result_req = hc.PostAsync(query, content).Result;
            }
            catch (Exception) { return (null); }
            return ("NaN");
        }

        private static string reac_gsheet(JObject token, string param, JObject current_area)
        {
            string token_user = token["google"].ToString();
            string query_list = "https://www.googleapis.com/drive/v3/files?q=mimeType%3D%27application%2Fvnd.google-apps.spreadsheet%27";
            string query_create = "https://sheets.googleapis.com/v4/spreadsheets";
            string query_modif = "https://sheets.googleapis.com/v4/spreadsheets/{0}/values/B2?valueInputOption=USER_ENTERED";
            //try
            //{
                var tmp = param.Split("]!#![");

                //JArray json = (JArray)DBConnect.my_select("users WHERE id = '" + current_area["user_id"] + "'", "*");
                
                HttpWebRequest request = (HttpWebRequest)WebRequest.Create(query_list);
                request.Headers.Add("Authorization", "Bearer " + token_user);
                request.Headers.Add("Accept", "application/json");
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                dynamic myResponse;
                using (StreamReader sr = new StreamReader(response.GetResponseStream()))
                {
                    myResponse = (JObject)JsonConvert.DeserializeObject(sr.ReadToEnd());
                }
                string current = null;
                foreach (var file in myResponse.files)
                {
                    if (file.name == "[AREA] sheet_reaction")
                    {
                        current = file.id;
                        break;
                    }
                }

                if (current == null)
                {
                    dynamic json = JsonConvert.DeserializeObject("{\"properties\":{\"title\":\"[AREA] sheet_reaction\"}}");

                    var hc = new HttpClient();
                    hc.DefaultRequestHeaders.Add("Authorization", "Bearer " + token_user);
                    hc.DefaultRequestHeaders.Add("Accept", "application/json");
                    //hc.DefaultRequestHeaders.Add("Content-Type", "application/json");
                    var content = new StringContent(json.ToString(), Encoding.UTF8, "application/json");
                    var result_req = hc.PostAsync(query_create, content).Result;
                    dynamic rep_json = JsonConvert.DeserializeObject(result_req.ToString());
                current = rep_json.spreadsheetId;
                Console.WriteLine(rep_json);
                }
                query_modif = string.Format(query_modif, current);


                dynamic jsonn = JsonConvert.DeserializeObject("{\"range\":\"B2\",\"values\":[[\"Nom de la chaine\", \"uihuhuhihihi\"]]}");
            /*                var hcc = new HttpClient();
                            hcc.DefaultRequestHeaders.Add("Authorization", "Bearer " + token_user);
                            hcc.DefaultRequestHeaders.Add("Accept", "application/json");
                            //hcc.DefaultRequestHeaders.Add("Content-Type", "application/json");
                            var contentt = new StringContent(jsonn.ToString(), Encoding.UTF8, "application/json");
                            var result = hcc.PutAsync(query_create, contentt).Result;
                        var lol = result.Content;
                            Console.WriteLine(lol.ToString());*/

            HttpWebRequest b_request = (HttpWebRequest)WebRequest.Create(query_modif);
            b_request.KeepAlive = false;
            b_request.Method = "PUT";

            byte[] postBytes = Encoding.ASCII.GetBytes(jsonn.ToString());
            b_request.ContentType = "application/application/json";
            b_request.ContentLength = postBytes.Length;

            Stream requestStream = b_request.GetRequestStream();
            requestStream.Write(postBytes, 0, postBytes.Length);
            requestStream.Close();

            HttpWebResponse b_response = (HttpWebResponse)request.GetResponse();
            StreamReader b_sr = new StreamReader(response.GetResponseStream());

            Console.WriteLine(b_sr.ReadToEnd());








            //}
            //catch (Exception) { return (null); }
            return ("NaN");
        }
    }
}