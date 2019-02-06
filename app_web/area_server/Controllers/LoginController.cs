using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace area_server.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult<string> login_oauth(string data)
        {
            //https://accounts.google.com/o/oauth2/v2/auth/
            return "";
        }

        [Route("internal/login/{data}")]
        [HttpGet]
        public ActionResult<string> Login(string data)
        {
            string decodedString = Encoding.UTF8.GetString(Convert.FromBase64String(Uri.UnescapeDataString(data)));
            string[] tmp = decodedString.Split(':');
            var result = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("users WHERE login = '" + tmp[0] + "' AND pwd = '" + Utils.Encrypt(tmp[1]) + "'", "*");
            if (result.Count == 1)
            {
                CookieOptions option = new CookieOptions();
                //option.Expires = DateTime.Now.AddHours(6);
                option.Expires = DateTime.Now.AddMinutes(1);
                Response.Cookies.Append("dot_user", tmp[0], option);
                Response.Cookies.Append("logged_in", "true", option);
                return "{\"success\": true, \"reason\": null}";
            }
            else if (result.Count > 1)
            {
                return "{\"success\": false, \"reason\": \"multiple users with this account\"}";
            }
            return "{\"success\": false, \"reason\": \"login or user incorrect\"}";
        }

        [Route("internal/signup/{data}")]
        [HttpGet]
        public ActionResult<string> signup(string data)
        {
            string decodedString = Encoding.UTF8.GetString(Convert.FromBase64String(Uri.UnescapeDataString(data)));
            string[] tmp = decodedString.Split(':');

            var result_login = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("users WHERE login = '" + tmp[0] + "'", "*");
            var result_email = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("users WHERE email = '" + tmp[1] + "'", "*");

            if (result_login.Count != 0)
            {
                return "{\"success\": false, \"reason\": \"login already exist\"}";
            }
            else if (result_email.Count != 0)
            {
                return "{\"success\": false, \"reason\": \"email already exist\"}";
            }
            if (result_login.Count == 0 && result_email.Count == 0)
            {
                DBConnect.my_insert("users", "login, email, pwd", "'" + tmp[0] + "', '" + tmp[1] + "', '" + Utils.Encrypt(tmp[2]) + "'");

                CookieOptions option = new CookieOptions();
                //option.Expires = DateTime.Now.AddHours(6);
                option.Expires = DateTime.Now.AddMinutes(1);
                Response.Cookies.Append("dot_user", tmp[0], option);
                Response.Cookies.Append("logged_in", "true", option);
                return "{\"success\": true, \"reason\": null}";
            }
            return "{\"success\": false, \"reason\": \"error something wrong happens\"}";
        }
    }
}