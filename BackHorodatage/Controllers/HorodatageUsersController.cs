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
        [HttpPost]
        public async Task<ActionResult<HorodatageUser>> PostHorodatageUser(HorodatageUser horodatageUser)
        {
            _context.horodatages.Add(horodatageUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Index", new { id = horodatageUser.IdHorodatage }, horodatageUser);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<HorodatageUser>> GetHorodatageUser(int id)
        {
            var horodatageUser = await _context.horodatages.FindAsync(id);

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
            var horodatageUser = await _context.horodatages.FindAsync(id);
            if (horodatageUser == null)
            {
                return NotFound();
            }

            _context.horodatages.Remove(horodatageUser);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HorodatageUserExists(long id)
        {
            return _context.horodatages.Any(e => e.IdHorodatage == id);
        }


    }
}
