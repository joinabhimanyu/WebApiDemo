using System.Web.Mvc;

namespace WebApiDemo.Areas.AngularDemo
{
    public class AngularDemoAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "AngularDemo";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "AngularDemo_default",
                "AngularDemo/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
