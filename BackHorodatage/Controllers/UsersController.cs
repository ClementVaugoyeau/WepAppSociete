using Microsoft.AspNetCore.Mvc;
using BackHorodatage;
using BackHorodatage.Models;
using Microsoft.EntityFrameworkCore;

namespace Messagerie.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly PostgreSqlContext _context;

        public UsersController(PostgreSqlContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.users.ToListAsync();
        }



    }
}
