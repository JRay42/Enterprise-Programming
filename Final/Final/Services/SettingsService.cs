using Microsoft.EntityFrameworkCore;
using Final.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final.Services
{
    public class SettingsService : ISettingsService
    {
        private TodoDbContext context;

        public SettingsService(TodoDbContext context) 
        {
            this.context = context;
        }

        public async Task<TodoWarningSetting> GetById(int id)
        {
            var todo = this.context.TodoWarningSettings.FirstOrDefault<TodoWarningSetting>(t => t.ID == id);
            return todo;
        }

        public async Task<TodoWarningSetting> Update(TodoWarningSetting todoSettings)
        {
            var updatedSettings = await GetById(1);
            updatedSettings.WarningSetting = todoSettings.WarningSetting;
            await this.context.SaveChangesAsync();
            return updatedSettings;
        }
    }
}
