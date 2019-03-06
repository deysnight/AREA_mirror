using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace area_server
{
    public class Program
    {
        public static void MyMethod()
        {
            //AreaCore lol = new AreaCore(5);
            //lol.test_method();
        }

        public static void Main(string[] args)
        {
            var timer = new System.Threading.Timer(
                e => MyMethod(),
                null,
                TimeSpan.Zero,
                TimeSpan.FromMinutes(1));
                //TimeSpan.FromSeconds(5));

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
				//.UseUrls("http://0.0.0.0:8080/");
    }
}
