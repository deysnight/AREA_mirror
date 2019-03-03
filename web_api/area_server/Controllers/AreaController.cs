using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace area_server.Controllers
{
    [Route("/internal/area")]
    public class AreaController : Controller
    {
        [HttpGet]
        public ActionResult<string> area_get_all()
        {
            int lol = DBConnect.my_insert_return("area", "user_id, action_id, reaction_id", "3, 4, 6");
            return ("lolgetall " + lol);
        }

        [HttpGet("{user_id}")]
        public ActionResult<string> area_get_user(int user_id)
        {
            dynamic json_rep = JsonConvert.DeserializeObject("{\"success\": true, \"reason\": null, \"data\": null}");
            dynamic result = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("area WHERE user_id = " + user_id + "", "*");
            if (result.Count == 0)
            {
                json_rep.reason = "user does not exist or has no area";
                json_rep.success = false;
            }
            json_rep.data = result;
            return (JsonConvert.SerializeObject(json_rep));
        }

        [HttpGet("{user_id}/{area_id}")]
        public ActionResult<string> area_get_area(int user_id, int area_id)
        {
            dynamic json_rep = JsonConvert.DeserializeObject("{\"success\": true, \"reason\": null, \"data\": null}");
            dynamic result = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("area WHERE user_id = " + user_id + " AND id = " + area_id + "", "*");
            if (result.Count == 0)
            {
                json_rep.reason = "user or area does not exist";
                json_rep.success = false;
                json_rep.data = null;
            }
            else if (result.Count > 1)
            {
                json_rep.reason = "error multiple area";
                json_rep.success = false;
                json_rep.data = null;
            }
            else
            {
                json_rep.data = result[0];
            }
            return (JsonConvert.SerializeObject(json_rep));
        }

        [HttpPost]
        public ActionResult<string> area_post()
        {
            dynamic json_rep = JsonConvert.SerializeObject("{\"success\": false, \"reason\": null}");
            dynamic json;
            using (var reader = new StreamReader(Request.Body))
            {
                var body = reader.ReadToEnd();
                var dict = HttpUtility.ParseQueryString(body);
                json = JsonConvert.DeserializeObject(JsonConvert.SerializeObject(dict.AllKeys.ToDictionary(k => k, k => dict[k])));
            }
            /*{
                id_action: null,
                id_reaction: null,
                user_id: null,
                timer_area: null
                data: {
                    page_id_for_reaction:null,
                    ...
                }
            }*/
            string str_value = string.Format("{0}, '{1}', '{2}', {3}, '{4}', '{5}', '{6}', '{7}', '{8}'", json.user_id, json.id_action, json.id_reaction, json.timer_area, json.data.video_id, json.data.page_id_for_reaction, json.data.facebook_page_id, json.data.youtuber_name, json.data.streamer_live);
            int area_id = DBConnect.my_insert_return("area", "user_id, action_id, reaction_id, timer_area, p_video_id, p_page_id, p_fbpage_id, p_ytb_name, p_streamer", str_value);
            if (area_id == -1)
            {
                json_rep.reason = "database_error";
                return (JsonConvert.SerializeObject(json_rep));
            }
            json_rep.success = "true";
            json_rep.reason = area_id;
            return new ContentResult
            {
                ContentType = "application/json",
                StatusCode = (int)HttpStatusCode.Created,
                Content = JsonConvert.SerializeObject(json_rep)
            };
        }

        [HttpPut("{user_id}/{area_id}")]
        public ActionResult<string> area_put_area(int user_id, int area_id)
        {
            dynamic json_rep = JsonConvert.SerializeObject("{\"success\": true, \"reason\": null}");
            dynamic json;
            using (var reader = new StreamReader(Request.Body))
            {
                var body = reader.ReadToEnd();
                var dict = HttpUtility.ParseQueryString(body);
                json = JsonConvert.DeserializeObject(JsonConvert.SerializeObject(dict.AllKeys.ToDictionary(k => k, k => dict[k])));
            }

            string str_value = string.Format("timer_area = {0}, p_video_id = '{1}', p_page_id = '{2}', p_fbpage_id = '{2}', p_ytb_name = '{3}', p_streamer = '{4}'", json.timer_area, json.data.video_id, json.data.page_id_for_reaction, json.data.facebook_page_id, json.data.youtuber_name, json.data.streamer_live);
            DBConnect.my_update("area", str_value, "user_id = " + user_id + " AND id = " + area_id);
            return (json_rep);
        }

        [HttpDelete("{user_id}/{area_id}")]
        public ActionResult<string> area_delete(int user_id, int area_id)
        {
            dynamic json_rep = JsonConvert.SerializeObject("{\"success\": true, \"reason\": null}");
            DBConnect.my_delete("area", "user_id = " + user_id + " AND id = " + area_id);
            return (json_rep);
        }
    }
}