//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.Linq;
//using System.Web;
//using Messagerie;
//using Npgsql;
using BackHorodatage.Models;
using Microsoft.EntityFrameworkCore;

namespace BackHorodatage
{
    public class PostgreSqlContext : DbContext
    {
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseNpgsql(@"Server=localhost;Port=5432;Database=Horodatage;User Id=postgres;Password=root");
        //}
        public PostgreSqlContext(DbContextOptions<PostgreSqlContext> options)
            : base(options)
        {
        }

        public DbSet<User> users { get; set; }
    }
}
