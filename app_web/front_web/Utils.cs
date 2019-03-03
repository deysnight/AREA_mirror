using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace area_server
{
    public class Utils
    {
        public static ContentResult Retrive_file(string file, string type, string folder)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\" + folder);
            filePath += "\\" + file;
            string line = File.ReadAllText(filePath);
            return new ContentResult
            {
                ContentType = type,
                StatusCode = (int)HttpStatusCode.OK,
                Content = line
            };
        }

        public static string Retrive_plain_file(string file, string folder)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\" + folder);
            filePath += "\\" + file;
            string line = File.ReadAllText(filePath);
            return (line);
        }

        public static bool user_logged(HttpRequest request)
        {
            if (request.Cookies["logged_in"] == "true")
                return true;
            return false;
        }
    }
}
