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
            return await _context.Login.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Login>> PostHorodatage(Login login)
        {
            _context.Login.Add(login);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLogin", new { id = login.IdLogin }, login);
        }


    }
}
