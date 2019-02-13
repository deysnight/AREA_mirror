using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace area_server.Controllers
{
    public class PagesController : ControllerBase
    {
        [Route("test")]
        [HttpGet]
        public ActionResult<string> test()
        {
            Utils.send_mail_confirmation("moimoi", "louison.harizi@epitech.eu");
            return "test page";
        }

        [Route("auth/activate/{data}")]
        [HttpGet]
        public ActionResult<string> mail_activate(string data)
        {
            string decode = Utils.read_token(data);
            string[] info = decode.Split(":");
            dynamic json = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("users WHERE id = " + int.Parse(info[0]) + " AND login = '" + info[1] + "' AND email = '" + info[2] + "' AND isOAuth = 0", "*");
            if (json.Count == 0) { Response.Redirect("/login?statut=error user no exist"); return ""; }
            if (json.Count >= 0) { Response.Redirect("/login?statut=error multiple user"); return ""; }
            if (json[0].isValidated == 0)
            {
                DBConnect.my_update("users", "isValidated = 1", "id = " + info[0]);
                Response.Redirect("/login?statut=user_validated");
                return ("");
            }
            else
            {
                Response.Redirect("/login?statut=user_already_validated");
                return ("");
            }
            //should never reach here
            Response.Redirect("/login?statut=user_validated");
            return ("");
        }

        [Route("")]
        [HttpGet]
        public ActionResult<string> Home()
        {
            if (Utils.user_logged(Request) != true)
                Response.Redirect("/login");
            else
                return Utils.Retrive_file("dashboard.html", "text/html", "pages");
            return "";
        }

        [Route("login")]
        [HttpGet]
        public ActionResult<string> Login()
        {
            if (Utils.user_logged(Request) == true)
                Response.Redirect("/");
            else
                return Utils.Retrive_file("login.html", "text/html", "pages");
            return "";
        }

        [Route("signup")]
        [HttpGet]
        public ActionResult<string> signup()
        {
            if (Utils.user_logged(Request) == true)
                Response.Redirect("/");
            else
                return Utils.Retrive_file("signup.html", "text/html", "pages");
            return "";
        }
    }
}