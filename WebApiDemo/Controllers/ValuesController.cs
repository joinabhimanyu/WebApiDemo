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
    public class ValuesController : ApiController
    {
        private MoviesDBContext db = new MoviesDBContext();

        // GET api/values
        public IEnumerable<Movie> Get()
        {
            var movies = db.Movies;
            return movies;
            
        }

        // GET api/values/5
        public Movie Get(string id)
        {
            var movie = db.Movies.Where(a => a.ID == id);
            return movie.First();
        }

        // POST api/values
        public HttpResponseMessage Post([FromBody]Movie movie)
        {
            db.Movies.Add(movie);
            db.SaveChanges();
            var response = Request.CreateResponse(HttpStatusCode.Created);
            response.StatusCode = HttpStatusCode.Created;
            string uri = Url.Link("DefaultApi", new { controller="Values"});
            response.Headers.Location = new Uri(uri);
            return response;
        }

        // PUT api/values/5
        public HttpResponseMessage Put(int id, [FromBody]Movie movie)
        {
            db.Entry(movie).State = EntityState.Modified;
            db.SaveChanges();
            var response = Request.CreateResponse(HttpStatusCode.Created);
            response.StatusCode = HttpStatusCode.Created;
            string uri = Url.Link("DefaultApi", new { controller="Values" });
            response.Headers.Location = new Uri(uri);
            return response;

        }

        // DELETE api/values/5
        public HttpResponseMessage Delete(string id)
        {
            Movie movie = db.Movies.Find(id);
            db.Movies.Remove(movie);
            db.SaveChanges();
            var response = Request.CreateResponse(HttpStatusCode.Created);
            response.StatusCode = HttpStatusCode.Created;
            string uri = Url.Link("DefaultApi", new { controller="Values" });
            response.Headers.Location = new Uri(uri);
            return response;
        }
    }
}