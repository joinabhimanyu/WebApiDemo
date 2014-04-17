using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Web.Configuration;

namespace WebApiDemo.Models
{
    public class WindowsDBContext : DbContext
    {
        public WindowsDBContext()
            : base("name=WindowsConnection")
        { }

        public DbSet<Window> Windows { get; set; }

    }
}