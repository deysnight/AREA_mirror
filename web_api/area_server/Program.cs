using System;
using System.Timers;
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
        private static System.Timers.Timer aTimer1;
        private static System.Timers.Timer aTimer2;
        private static System.Timers.Timer aTimer3;

        public static void MyMethod_1(Object source, ElapsedEventArgs e)
        {
            AreaCore core = new AreaCore(1);
            core.run();
            Console.WriteLine("process 1 min timer");
        }

        public static void MyMethod_5(Object source, ElapsedEventArgs e)
        {
            AreaCore core = new AreaCore(5);
            core.run();
            Console.WriteLine("process 5 min timer");
        }

        public static void MyMethod_10(Object source, ElapsedEventArgs e)
        {
            AreaCore core = new AreaCore(10);
            core.run();
            Console.WriteLine("process 10 min timer");
        }

        public static void Main(string[] args)
        {
            aTimer1 = new System.Timers.Timer(60000);
            aTimer1.Elapsed += MyMethod_1;
            aTimer1.AutoReset = true;
            aTimer1.Enabled = true;

            aTimer2 = new System.Timers.Timer(300000);
            aTimer2.Elapsed += MyMethod_5;
            aTimer2.AutoReset = true;
            aTimer2.Enabled = true;

            aTimer3 = new System.Timers.Timer(600000);
            aTimer3.Elapsed += MyMethod_10;
            aTimer3.AutoReset = true;
            aTimer3.Enabled = true;
            /* var timer_1 = new System.Threading.Timer(
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
                 TimeSpan.FromMinutes(10)); */

            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
				//.UseUrls("http://0.0.0.0:8080/");
    }
}
