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

        [HttpGet("{prenom}")]
        public async Task<User> GetUserByPrenom(string prenom)
        {
            var query = from st in _context.users
                        where st.Prenom == prenom
                        select st;

            User user = query.FirstOrDefault<User>();
            return user;
        }

        [HttpPost]
        public async Task<ActionResult<User>> PostOrderMaster(User user)
        {
            _context.users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsers", new { id = user.IdUser }, user);
        }


    }
}
