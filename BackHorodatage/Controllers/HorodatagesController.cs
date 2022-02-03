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
        [HttpGet("{id}")]
        public async Task<ActionResult<HorodatageUser>> GetHorodatageUser(int id)
        {
            var horodatageUser = await _context.Horodatages.FindAsync(id);

            if (horodatageUser == null)
            {
                return NotFound();
            }

            return horodatageUser;
        }

        // PUT: api/OrderMasters/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, HorodatageUser horodatageUser)
        {
            if (id != horodatageUser.IdHorodatage)
            {
                return BadRequest();
            }

            _context.Entry(horodatageUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HorodatageUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var horodatageUser = await _context.Horodatages.FindAsync(id);
            if (horodatageUser == null)
            {
                return NotFound();
            }

            _context.Horodatages.Remove(horodatageUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HorodatageUserExists(long id)
        {
            return _context.Horodatages.Any(e => e.IdHorodatage == id);
        }

    }
}
