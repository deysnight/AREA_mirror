using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace area_server.Controllers
{
    [Route("/internal/oauth2")]
    public class OauthController : Controller
    {
        [HttpGet("twitch")]
        public ActionResult<string> token_twitch()
        {
            string url = Request.GetDisplayUrl();
            string[] url_splited = url.Split(new char[] { '=', '&' });
            string token = url_splited[1];

            return (token);
        }

        [HttpGet("onedrive")]
        public ActionResult<string> token_OFFICE_LES_PUTES()
        {
            string url = Request.GetDisplayUrl();
            string[] url_splited = url.Split(new char[] { '=', '&' });
            string token = url_splited[1];

            return (token);
        }
    }
}