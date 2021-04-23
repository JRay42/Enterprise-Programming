using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Final.Models;
using Final.Services;
using Microsoft.AspNetCore.Identity;
using System.Threading.Tasks;

namespace Final
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
            services.AddControllersWithViews();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddTransient<ITodoService, TodoService>();
            services.AddTransient<ISettingsService, SettingsService>();

            var connectionString = Configuration["TodoConnectionString"];
            services.AddDbContext<TodoDbContext>(options => options.UseSqlServer(connectionString));

            services.AddSwaggerGen(c => 
            {
                c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "Todo API", Version = "v1" });
            });

            services.AddIdentity<IdentityUser, IdentityRole>(configuration => 
            {
                configuration.Password.RequireDigit = true;
                configuration.Password.RequiredLength = 8;
                configuration.Password.RequireUppercase = true;
                configuration.Password.RequireLowercase = true;
                configuration.Password.RequireNonAlphanumeric = true;
                configuration.User.RequireUniqueEmail = false;
                configuration.SignIn.RequireConfirmedAccount = false;
                configuration.SignIn.RequireConfirmedEmail = false;
            }).AddEntityFrameworkStores<TodoDbContext>();

            services.ConfigureApplicationCookie(options =>
            {
                options.LoginPath = "/user/login";
                options.AccessDeniedPath = "/user/login";
                options.Events.OnRedirectToLogin = context =>
                {
                    context.Response.StatusCode = 401;
                    return Task.CompletedTask;
                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
