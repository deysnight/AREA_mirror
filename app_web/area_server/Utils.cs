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
        public static void send_mail_confirmation(string login, string mail)
        {
            string query = "https://api.mailjet.com/v3.1/send";
            string link = "http://localhost:8080/auth/activate/";

            var uri = new Uri(query);
            string queryString = "{\"Messages\":[{\"From\": {\"Email\": \"coucourswin@gmail.com\",\"Name\": \"Mailjet Pilot\"},\"To\": [{\"Email\": \"" + mail + "\",\"Name\": \"passenger 1\"}],\"Subject\": \"Your email flight plan!\",\"TextPart\": \"Dear passenger 1, welcome to Mailjet! May the delivery force be with you!\",\"HTMLPart\": \"<h3>Dear passenger 1, welcome to Mailjet!</h3><br />May the delivery force be with you!\"}]}";
            dynamic json = JsonConvert.DeserializeObject(queryString);
            string tmp = Retrive_plain_file("confirmation_mail.html", "pages");
            string[] msg = tmp.Split("!!");

            dynamic result = (Newtonsoft.Json.Linq.JArray)DBConnect.my_select("users WHERE login = '" + login + "' AND email = '" + mail + "' AND isOAuth = 0", "id");
            if (result.Count != 1) { return; }
            string user_id = result[0].id;
            string token = generate_token(user_id + ":" + login + ":" + mail);

            json.Messages[0].Subject = "AREA account confirmation";
            json.Messages[0].TextPart = string.Format(msg[1], link + token);
            json.Messages[0].HTMLPart = string.Format(msg[0], link + token);

            var hc = new HttpClient();
            hc.DefaultRequestHeaders.Add("Authorization", "Basic N2Y3NzljNGU1NjFhNWJjODdmNmQxY2IwYjgzOWEyYzk6ZDVjNThhZTU5NDJmMjkwNzkzZjkwZDQxNmYwNWM2ODI=");
            var content = new StringContent(json.ToString(), Encoding.UTF8, "application/json");
            var result_req = hc.PostAsync(query, content).Result;
            Console.WriteLine(result_req);
        }

        public static string generate_token(string data)
        {
            byte[] time = Encoding.ASCII.GetBytes(data);
            string token = Convert.ToBase64String(time);
            return (token);
        }

        public static string read_token(string token)
        {
            byte[] data = Convert.FromBase64String(token);
            string when = Encoding.Default.GetString(data);
            return (when);
        }

        public static ContentResult Retrive_file(string file, string type, string folder)
        {
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), folder);
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
            string filePath = Path.Combine(Directory.GetCurrentDirectory(), folder);
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

        public static string Encrypt(string inputString)
        {
            SHA256 sha256 = SHA256.Create();
            byte[] bytes = Encoding.UTF8.GetBytes(inputString);
            byte[] hash = sha256.ComputeHash(bytes);
            return GetStringFromHash(hash);
        }

        private static string GetStringFromHash(byte[] hash)
        {
            StringBuilder result = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                result.Append(hash[i].ToString("X2"));
            }
            return result.ToString();
        }




    }
}
