using Microsoft.EntityFrameworkCore;
using Final.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System;

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

        public async Task<Todo> GetById(int id, string owner)
        {
            var todo = this.context.Todos.Where(t => t.Owner == owner).Include(t => t.Tags).FirstOrDefault<Todo>(t => t.ID == id);
            if (todo == null) throw new Exception();
            return todo;
        }

        public async Task<bool> Delete(int id, string owner)
        {
            this.context.Todos.Remove(await GetById(id, owner));
            await this.context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Todo>> Get(string owner)
        {
            return await this.context.Todos.Where(t => t.Owner == owner).Include(t => t.Tags).ToListAsync<Todo>();
        }

        public async Task<Todo> Update(Todo todo)
        {
            var todoToUpdate = await GetById(todo.ID, todo.Owner);
            todoToUpdate.Task = todo.Task;
            todoToUpdate.Due = todo.Due;
            todoToUpdate.Tags.Clear();
            foreach (TodoTags tag in todo.Tags) 
            {
                todoToUpdate.Tags.Add(tag);
            }
            await this.context.SaveChangesAsync();
            return todoToUpdate;
        }
    }
}
