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
        public static void MyMethod_1()
        {
            AreaCore core = new AreaCore(1);
            core.run();
            Console.WriteLine("process 1 min timer");
        }

        public static void MyMethod_5()
        {
            AreaCore core = new AreaCore(5);
            core.run();
            Console.WriteLine("process 5 min timer");
        }

        public static void MyMethod_10()
        {
            AreaCore core = new AreaCore(10);
            core.run();
            Console.WriteLine("process 10 min timer");
        }

        public static void Main(string[] args)
        {
            var timer_1 = new System.Threading.Timer(
                e => MyMethod_1(),
                null,
                TimeSpan.Zero,
                TimeSpan.FromMinutes(1));

            var timer_5 = new System.Threading.Timer(
                e => MyMethod_5(),
                null,
                TimeSpan.Zero,
                TimeSpan.FromMinutes(5));

            var timer_10 = new System.Threading.Timer(
                e => MyMethod_10(),
                null,
                TimeSpan.Zero,
                TimeSpan.FromMinutes(10));

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
				//.UseUrls("http://0.0.0.0:8080/");
    }
}
