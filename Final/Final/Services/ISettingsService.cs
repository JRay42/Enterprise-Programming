using Final.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final.Services
{
    public interface ISettingsService
    {
        Task<TodoWarningSetting> GetById(int id);
        Task<TodoWarningSetting> Update(TodoWarningSetting todoSettings);
    }
}
