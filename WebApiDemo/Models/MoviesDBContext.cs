using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Web.Configuration;

namespace WebApiDemo.Models
{
    public class MoviesDBContext : DbContext
    {
    
        public MoviesDBContext()
            : base("name=MoviesConnection")
        {
        }

        public DbSet<Movie> Movies { get; set; }
    }
}