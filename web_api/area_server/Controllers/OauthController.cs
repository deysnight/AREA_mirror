using System;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace area_server.Controllers
{
    [Route("/internal/oauth2")]
    public class OauthController : Controller
    {
        [HttpGet("token/{id}")]
        public ActionResult<string> token_user(int id)
        {
            object json = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("user_access_token WHERE user_id = " + id + "", "*");
            return (JsonConvert.SerializeObject(json));
        }

        [HttpGet("twitch")]
        public ActionResult<string> token_twitch() //http://localhost:8080/internal/oauth2/twitch/?token=access_token
        {
            string url = Request.GetDisplayUrl();
            Console.WriteLine(url);
            string[] url_splited = url.Split(new char[] { '=', '&' });
            Console.WriteLine(url_splited);
            string token = url_splited[1];
            string user_id = Request.Cookies["user_id"];
            DBConnect.my_update("user_access_token", "twitch = '" + token + "'", "user_id = " + user_id);
            return ("{\"success\": true}");
        }

        [HttpGet("onedrive")]
        public ActionResult<string> token_onedrive()
        {
            string url = Request.GetDisplayUrl();
            Console.WriteLine(url);
            string[] url_splited = url.Split(new char[] { '=', '&' });
            Console.WriteLine(url_splited);
            string token = url_splited[1];
            string user_id = Request.Cookies["user_id"];
            DBConnect.my_update("user_access_token", "onedrive = '" + token + "'", "user_id = " + user_id);
            return ("{\"success\": true}");
        }

        [HttpGet("google")]
        public ActionResult<string> token_google()
        {
            string url = Request.GetDisplayUrl();
            Console.WriteLine(url);
            string[] url_splited = url.Split(new char[] { '=', '&' });
            Console.WriteLine(url_splited);
            string token = url_splited[1];
            string user_id = Request.Cookies["user_id"];
            DBConnect.my_update("user_access_token", "google = '" + token + "'", "user_id = " + user_id);
            return ("{\"success\": true}");
        }

        [HttpGet("facebook")]
        public ActionResult<string> token_facebook()
        {
            string url = Request.GetDisplayUrl();
            Console.WriteLine(url);
            string[] url_splited = url.Split(new char[] { '=', '&' });
            Console.WriteLine(url_splited);
            string token = url_splited[1];
            string user_id = Request.Cookies["user_id"];
            DBConnect.my_update("user_access_token", "facebook = '" + token + "'", "user_id = " + user_id);
            return ("{\"success\": true}");
        }
    }
}