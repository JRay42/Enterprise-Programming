using Project4.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Services
{
    public class TodoService : ITodoService
    {
        private IList<Todo> todos;

        public TodoService() 
        {
            this.todos = new List<Todo>();
        }
        public Todo Create(Todo todo)
        {
            this.todos.Add(todo);
            return todo;
        }

        public bool Delete(int id)
        {
            bool result = this.todos.Remove(this.todos.FirstOrDefault(td => td.ID == id));
            return result;
        }

        public IEnumerable<Todo> Get()
        {
            return this.todos; 
        }

        public Todo Update(Todo todo)
        {
            Delete(todo.ID);
            todo = Create(todo);
            return todo;
        }
    }
}
