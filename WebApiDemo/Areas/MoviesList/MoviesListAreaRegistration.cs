using System.Web.Mvc;

namespace WebApiDemo.Areas.MoviesList
{
    public class MoviesListAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "MoviesList";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "MoviesList_default",
                "MoviesList/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
