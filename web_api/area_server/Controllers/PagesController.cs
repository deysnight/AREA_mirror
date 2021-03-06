﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace area_server.Controllers
{
    public class PagesController : ControllerBase
    {
        [Route("test")]
        [HttpGet]
        public ActionResult<string> test()
        {
            AreaCore core = new AreaCore(1);
            core.run();
            return "Trigger all for testing";
        }

        [Route("about.json")]
        [HttpGet]
        public ActionResult<string> About()
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\pages");
            filePath += "\\about.json";
            dynamic about = JsonConvert.DeserializeObject(System.IO.File.ReadAllText(filePath));

            var remoteIpAddress = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress.ToString();
            about.client.host = remoteIpAddress;

            TimeSpan t = DateTime.UtcNow - new DateTime(1970, 1, 1);
            int secondsSinceEpoch = (int)t.TotalSeconds;
            about.server.current_time = secondsSinceEpoch;
            return JsonConvert.SerializeObject(about);
        }

        [Route("auth/activate/{data}")]
        [HttpGet]
        public ActionResult<string> mail_activate(string data)
        {
            string decode = Utils.read_token(data);
            string[] info = decode.Split(":");
            dynamic json = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("users WHERE id = " + int.Parse(info[0]) + " AND login = '" + info[1] + "' AND email = '" + info[2] + "' AND isOAuth = 0", "*");
            if (json.Count == 0) { Response.Redirect("http://localhost:8081/login?statut=error user no exist"); return ""; }
            if (json.Count > 1) { Response.Redirect("http://localhost:8081/login?statut=error multiple user"); return ""; }
            if (json[0].isValidated == 0)
            {
                DBConnect.my_update("users", "isValidated = 1", "id = " + info[0]);
                DBConnect.my_insert("user_access_token", "user_id", info[0]);

                Response.Redirect("http://localhost:8081/login?statut=user_validated");
                return ("");
            }
            else
            {
                Response.Redirect("http://localhost:8081/login?statut=user_validated");
                return ("");
            }
            //should never reach here
            Response.Redirect("/login?statut=user_validated");
            return ("");
        }

        /*[Route("login")]
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

        [Route("profil")]
        [HttpGet]
        public ActionResult<string> profil()
        {
            if (Utils.user_logged(Request) != true)
                Response.Redirect("/");
            else
                return Utils.Retrive_file("profil.html", "text/html", "pages");
            return "";
        }*/
    }
}