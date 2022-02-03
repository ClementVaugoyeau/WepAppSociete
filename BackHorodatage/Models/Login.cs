using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using BackHorodatage;
using Npgsql;
using Microsoft.EntityFrameworkCore;


namespace BackHorodatage.Models
{


    public class Login
    {
        [Key]
        public int IdLogin { get; set; }

        public User? User { get; set; }


        public string? Pseudo { get; set; }


        public string? Password { get; set; }

    }
}