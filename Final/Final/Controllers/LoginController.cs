using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Final.Models;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private UserManager<IdentityUser> userManager;
        private SignInManager<IdentityUser> signInManager;

        public LoginController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost("create")]
        public async Task<ActionResult> CreateUser([FromBody] TodoUserLogin credentials)
        {
            var result = await userManager.CreateAsync(new IdentityUser()
            {
                UserName = credentials.UserName
            }, credentials.Password);
            if (result.Succeeded)
            {
                return Ok();
            }
            else
            {
                return BadRequest(result.Errors);
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] TodoUserLogin credentials)
        {
            var result = await signInManager.PasswordSignInAsync(credentials.UserName, credentials.Password, true, false);
            if (result.Succeeded)
            {
                return Ok();
            }
            else
            {
                var errors = new List<Error>();
                errors.Add(new Error() { description = "Invalid credentials." });
                return BadRequest(errors);
            }
        }
    }
}
