using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using BackHorodatage;
using Npgsql;
using Microsoft.EntityFrameworkCore;

namespace BackHorodatage.Models;

[Table("User", Schema = "public")]
public class User
{
        //internal AppDb Db { get; set; }

        [Key]
        //[Column("Id")]
        public int IdUser { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string? Nom { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string? Prenom { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string? Poste { get; set; }

        [Column(TypeName = "varchar(100)")]
        public string? Email { get; set; }


}


//public class UserContext : DbContext

//{
//    public DbSet<User> users { get; set; }

//    //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
//    //{
//    //    optionsBuilder.UseNpgsql(@"Server=localhost;Port=5432;Database=Messagerie;User Id=postgres;Password=root");
//    //}
//}