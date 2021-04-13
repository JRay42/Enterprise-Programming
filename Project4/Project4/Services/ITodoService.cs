using Project4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Services
{
    public interface ITodoService
    {
        IEnumerable<Todo> Get();
        Todo Create(Todo todo);
        Todo Update(Todo todo);
        bool Delete(int id);
    }
}
