using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApiDemo.Areas.AngularDemo.Controllers
{
    public class ProductsController : Controller
    {
        //
        // GET: /AngularDemo/Products/

        public ActionResult Index()
        {
            return View();
        }

    }
}
