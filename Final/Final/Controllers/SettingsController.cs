using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Final.Models;
using Final.Services;
using System.Threading.Tasks;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SettingsController : ControllerBase
    {
        private ISettingsService settingService;
        public SettingsController(ISettingsService settingService)
        {
            this.settingService = settingService;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TodoWarningSetting>> Get()
        {
            return Ok(await this.settingService.GetById(1));
        }

        [HttpPut()]
        public async Task<ActionResult<TodoWarningSetting>> Put([FromBody] TodoWarningSetting todoSettings)
        {
            return Ok(await this.settingService.Update(todoSettings));
        }
    }
}