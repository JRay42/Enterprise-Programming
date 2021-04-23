using Final.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final.Services
{
    public interface ITodoService
    {
        Task<IEnumerable<Todo>> Get(string owner);
        Task<Todo> GetById(int id, string owner);
        Task<Todo> Create(Todo todo);
        Task<Todo> Update(Todo todo);
        Task<bool> Delete(int id, string owner);
    }
}
