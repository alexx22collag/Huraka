using System;
using System.Collections.Generic;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NIKE.Server.DbContext;
using NIKE.Server.Models;

namespace NIKE.Server.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class RunnersController : ControllerBase
    {
        private readonly Context _context;
        private readonly IConfiguration _configuration;

        public RunnersController(Context context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        // GET: api/Runners
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Runner>>> GetRunners()
        {
            return await _context.Runners.ToListAsync();
        }

        // GET: api/Runners/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Runner>> GetRunner(int id)
        {
            var runner = await _context.Runners.FindAsync(id);

            if (runner == null)
            {
                return NotFound();
            }

            return runner;
        }

        // PUT: api/Runners/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRunner(int id, Runner runner)
        {
            if (id != runner.RunnerId)
            {
                return BadRequest();
            }

            _context.Entry(runner).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RunnerExists(id))
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

        // POST: api/Runners
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Runner>> PostRunner(Runner runner)
        {
            _context.Runners.Add(runner);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRunner", new { id = runner.RunnerId }, runner);
        }

        // DELETE: api/Runners/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRunner(int id)
        {
            var runner = await _context.Runners.FindAsync(id);
            if (runner == null)
            {
                return NotFound();
            }

            _context.Runners.Remove(runner);
            await _context.SaveChangesAsync();

            return NoContent();
        }








        private bool RunnerExists(int id)
        {
            return _context.Runners.Any(e => e.RunnerId == id);
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] User model)
        {
            // Replace this logic with your actual authentication mechanism
            if (IsValidUser(model.Email, model.Password))
            {
                var user = _context.Users.FirstOrDefault(u => u.Email == model.Email);
                var token = GenerateJwtToken(model.Email, user.UserId, user.Name);
                return Ok(new { Token = token});
            }

            return Unauthorized();
        }
        [Authorize]
        [HttpPost("userInfo")]
        public IActionResult UserInfo()
        {
            // Accede a la información del usuario desde el contexto de la solicitud
            var userEmail2 = User.FindFirst("email")?.Value;
            var userEmail = User.FindFirst(ClaimTypes.Email)?.Value;

            if (string.IsNullOrEmpty(userEmail))
            {
                return BadRequest("User email claim not found.");
            }
            //obtener información del usuario
            var user = _context.Users.FirstOrDefault(u => u.Email == userEmail);
            if (user == null)
            {
                return NotFound();
            }

            // Realiza acciones con la información del usuario (por ejemplo, devolverla como JSON)
            return Ok(new { user });
        }

        private string GenerateJwtToken(string email, int id, string name)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Secret"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
            new Claim(ClaimTypes.Email, email),
            new Claim(ClaimTypes.Name, name),
            new Claim(ClaimTypes.NameIdentifier, id.ToString()),
                    // Add additional claims as needed
                }),
                Expires = DateTime.UtcNow.AddHours(1), // Token expiration time
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        private bool IsValidUser(string email, string password)
        {
            // Replace this with your actual user authentication logic
            // For example, check credentials against a database

            //Comprobamos que el username y password estén registrados en la base de datos
            if (_context.Users.Any(u => u.Email == email && u.Password == password))
            {
                return true;
            }


            return false;
        }
    }
}
