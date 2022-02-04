#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using BackHorodatage;
using BackHorodatage.Models;

namespace BackHorodatage.Controllers

{

    [Route("[controller]")]
    [ApiController]
    public class LoginsController : Controller
    {
        private readonly PostgreSqlContext _context;

        public LoginsController(PostgreSqlContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetLogin()
        {
            return await _context.login.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Login>> PostLogin(Login login)
        {
            _context.login.Add(login);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLogin", new { id = login.IdLogin }, login);
        }

        [HttpPost("login")]
        public async Task<Login> GetUserByPrenom(Login mylogin)
        {
            //var query = from st in _context.login
            //            where st.Pseudo == mylogin.Pseudo
            //            where st.Password == mylogin.Password
            //            select st;

            //string studentName = _context.Database.SqlQuery<string>(@"SELECT StudentName FROM Student WHERE StudentID = 1")
            //    .FirstOrDefault<string>();
            //Login monLogin = query.FirstOrDefault<Login>();

            Console.WriteLine(mylogin.Pseudo);
            Console.WriteLine(mylogin.Password);

            var monLogin = _context.login
            .FromSqlRaw("SELECT * FROM \"Login\" where \"Pseudo\" = {0} and \"Password\" = {1}", mylogin.Pseudo, mylogin.Password)
            .FirstOrDefault();

        
            return monLogin;
        }

    }
}