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
    public class XboxController : ApiController
    {
        private XboxDBContext db = new XboxDBContext();

        // GET api/<controller>
        public IEnumerable<Xbox> Get()
        {
            var xboxs = db.Xboxs;
            return xboxs;
        }

        // GET api/<controller>/5
        public Xbox Get(int id)
        {
            var xbox = db.Xboxs.Where(a => a.ID == id);
            return xbox.First();
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {

        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {

        }
    }
}