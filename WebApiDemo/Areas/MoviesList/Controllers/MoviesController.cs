using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApiDemo.Areas.MoviesList.Controllers
{
    public class MoviesController : Controller
    {
        //
        // GET: /MoviesList/Movies/

        public ActionResult Index()
        {
            return View();
        }

    }
}
