using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Web.Configuration;

namespace WebApiDemo.Models
{
    public class XboxDBContext : DbContext
    {
        public XboxDBContext()
            : base("name=WindowsConnection")
        { }

        public DbSet<Xbox> Xboxs { get; set; }

    }
}