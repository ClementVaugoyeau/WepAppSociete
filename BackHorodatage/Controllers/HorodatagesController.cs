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
    public class HorodatagesController : Controller
    {
        private readonly PostgreSqlContext _context;

        public HorodatagesController(PostgreSqlContext context)
        {
            _context = context;
        }

        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HorodatageUser>>> GetHorodatage()
        {
            return await _context.Horodatages.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<HorodatageUser>> PostHorodatage(HorodatageUser horodatage)
        {
            _context.Horodatages.Add(horodatage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetHorodatage", new { id = horodatage.IdHorodatage }, horodatage);
        }
        // GET: Horodatages/Details/5

    }
}
