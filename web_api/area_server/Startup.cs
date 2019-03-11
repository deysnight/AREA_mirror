using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Cors;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using NSwag.AspNetCore;
using System.Reflection;

namespace area_server
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAnyOrigin",
                    builder => builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowCredentials()
                    .AllowAnyHeader());
            });

            services.Configure<MvcOptions>(options =>
            {
                options.Filters.Add(new CorsAuthorizationFilterFactory("AllowAnyOrigin"));
            });

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

            // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
            public void Configure(IApplicationBuilder app, IHostingEnvironment env)
            {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            /*app.UseStatusCodePagesWithReExecute("/error/{0}.html");*/

            /*app.UseStaticFiles(new StaticFileOptions()
            {
                /*OnPrepareResponse = context =>
                {
                    context.Context.Response.Headers.Add("Cache-Control", "no-cache, no-store");
                    context.Context.Response.Headers.Add("Expires", "-1");
                }
            });*/


            app.UseSwagger(typeof(Startup).Assembly, settings =>
            {
                settings.PostProcess = document =>
                {
                    document.Info.Version = "v1";
                    document.Info.Title = "Manage product's familly API";
                    document.Info.Description = "This API allows to create a familly of product, set the translation and SEO values and manage product's category in the same maner";
                    document.Info.TermsOfService = "See Startpoint web site";
                    
                };
            });

            app.UseSwaggerUi3(typeof(Startup).GetTypeInfo().Assembly, settings =>
            {
                settings.GeneratorSettings.DefaultPropertyNameHandling = NJsonSchema.PropertyNameHandling.CamelCase;
            });


            app.UseMvc();
        }
    }
}
