using Microsoft.EntityFrameworkCore;
using Final.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final.Services
{
    public class TodoService : ITodoService
    {
        private TodoDbContext context;

        public TodoService(TodoDbContext context) 
        {
            this.context = context;
        }
        public async Task<Todo> Create(Todo todo)
        {
            this.context.Todos.Add(todo);
            await this.context.SaveChangesAsync();
            return todo;
        }

        public async Task<Todo> GetById(int id)
        {
            var todo = this.context.Todos.Include(t => t.Tags).FirstOrDefault<Todo>(t => t.ID == id);
            return todo;
        }

        public async Task<bool> Delete(int id)
        {
            this.context.Todos.Remove(await GetById(id));
            await this.context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Todo>> Get(string owner)
        {
            return await this.context.Todos.Where(t => t.Owner == owner).Include(t => t.Tags).ToListAsync<Todo>();
        }

        public async Task<Todo> Update(Todo todo)
        {
            var todoToUpdate = await GetById(todo.ID);
            todoToUpdate.Task = todo.Task;
            todoToUpdate.Due = todo.Due;
            todoToUpdate.Tags.Clear();
            foreach (TodoTags tag in todo.Tags) 
            {
                todoToUpdate.Tags.Add(tag);
            }
            this.context.SaveChangesAsync();
            return todoToUpdate;
        }
    }
}
