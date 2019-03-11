using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace area_server.Controllers
{
    public class PagesController : ControllerBase
    {
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

        [Route("profil")]
        [HttpGet]
        public ActionResult<string> profil()
        {
            if (Utils.user_logged(Request) != true)
                Response.Redirect("/");
            else
                return Utils.Retrive_file("profil.html", "text/html", "pages");
            return "";
        }

        /*[Route("client")]
        [Route("client.apk")]
        [HttpGet]
        public HttpResponseMessage GetApk(string clientVersion)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\" + "");
            filePath += "" + "client.apk";

            FileVersionInfo currentVersion = FileVersionInfo.GetVersionInfo(filePath);
            var stream = new FileStream(filePath, FileMode.Open);
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            return result;
        }*/
    }
}