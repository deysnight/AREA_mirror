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