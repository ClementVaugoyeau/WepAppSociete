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
    public class HorodatageUsersController : Controller
    {
        private readonly PostgreSqlContext _context;

        public HorodatageUsersController(PostgreSqlContext context)
        {
            _context = context;
        }

        // GET: HorodatageUsers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HorodatageUser>>> Index()
        {
            return await _context.horodatages.ToListAsync();
        }

        // POST: HorodatageUsers/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<ActionResult<HorodatageUser>> PostHorodatageUser(HorodatageUser horodatageUser)
        {
            _context.horodatages.Add(horodatageUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Index", new { id = horodatageUser.IdHorodatage }, horodatageUser);
        }

        
    }
}
