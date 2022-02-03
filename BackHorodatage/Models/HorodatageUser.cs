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
    [Table("HorodatageUser", Schema = "public")]
    public class HorodatageUser
    {
        [Key]
        //[Column("Id")]
        public int IdHorodatage { get; set; }


        public int IdUser { get; set; }

        public User? User { get; set; }


        [Column(TypeName = "timestamp with timezone")]
        public DateTime DateArrival { get; set; }

        [Column(TypeName = "timestamp with timezone")]
        public DateTime DateDeparture { get; set; }
    }
}
