using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace WebApiDemo.Models
{
    public class Movie
    {
        //[Key,Display(Name="ID"),Required(ErrorMessage="ID cannot be blank")]
        public string ID { get; set; }
        //[Display(Name="Title"),Required(ErrorMessage="Title cannot be blank")]
        public string Title { get; set; }
        //[Display(Name = "Genre"),Required(ErrorMessage="Genre cannot be blank")]
        public string Genre { get; set; }
        //[Display(Name = "Year"),Required(ErrorMessage="Year cannot be blank")]
        public string Year { get; set; }
    }
}