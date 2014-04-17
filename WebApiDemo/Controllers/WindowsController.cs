using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiDemo.Models;
using System.Data;
using System.Data.Entity;
using System.Web;

namespace WebApiDemo.Controllers
{
    public class WindowsController : ApiController
    {
        private WindowsDBContext db = new WindowsDBContext();

        // GET api/<controller>
        public IEnumerable<Window> Get()
        {
            var windows = db.Windows;
            return windows;
        }

        // GET api/<controller>/5
        public Window Get(int id)
        {
            var window = db.Windows.Where(a => a.ID == id);
            return window.First();
        }

        // POST api/<controller>
        public int Post([FromBody]Window window)
        {
            db.Windows.Add(window);
            db.SaveChanges();
            int id = db.Windows.Count();
            return id;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
            
        }

        // DELETE api/<controller>/5
        public int Delete(int id)
        {
            Window window = db.Windows.Find(id);
            db.Windows.Remove(window);
            db.SaveChanges();
            return id;
        }
    }
}