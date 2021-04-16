using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Models
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options) 
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.LogTo(Console.WriteLine).EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Todo>().HasData(
                new Todo
                {
                    ID = 1,
                    Task = "Project",
                    Due = Convert.ToDateTime("2021-04-11T23:59:59.000"),
                    Done = true,
                }, 
                new Todo
                {
                    ID = 2,
                    Task = "Project 4",
                    Due =  Convert.ToDateTime("2021-04-13T23:59:59.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 3,
                    Task = "Quiz 5",
                    Due = Convert.ToDateTime("2021-04-19T13:00:00.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 4,
                    Task = "Biweekly Report",
                    Due = Convert.ToDateTime("2021-04-22T23:59:59.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 5,
                    Task = "Quiz 6",
                    Due = Convert.ToDateTime("2021-04-26T13:00:00.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 6,
                    Task = "Assignment 2",
                    Due = Convert.ToDateTime("2021-04-26T23:59:59.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 7,
                    Task = "Final Project",
                    Due = Convert.ToDateTime("2021-04-27T23:59:59.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 8,
                    Task = "Assignment 4",
                    Due = Convert.ToDateTime("2021-04-28T23:59:59.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 9,
                    Task = "Biweekly Report",
                    Due = Convert.ToDateTime("2021-04-29T23:59:59.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 10,
                    Task = "Lightning Talk",
                    Due = Convert.ToDateTime("2021-05-01T23:59:59.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 11,
                    Task = "Project",
                    Due = Convert.ToDateTime("2021-05-03T13:00:00.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 12,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-04T19:30:00.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 13,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-04T09:00:00.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 14,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-05T17:30:00.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 15,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-07T15:00:00.000"),
                    Done = false,
                },
                new Todo
                {
                    ID = 16,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-04-13T23:59:59.000"),
                    Done = false,
                });
            modelBuilder.Entity<TodoTags>().HasData(
                new TodoTags
                {
                    ID = 1,
                    Tag = "UCO - CS",
                    TodoID = 1
                },
                new TodoTags
                {
                    ID = 2,
                    Tag = "Concepts of AI",
                    TodoID = 1
                },
                new TodoTags
                {
                    ID = 3,
                    Tag = "Enterprise Programming",
                    TodoID = 2
                },
                new TodoTags
                {
                    ID = 4,
                    Tag = "Ethics of Computing",
                    TodoID = 3
                },
                new TodoTags
                {
                    ID = 5,
                    Tag = "Concepts of AI",
                    TodoID = 4
                },
                new TodoTags
                {
                    ID = 6,
                    Tag = "Ethics of Computing",
                    TodoID = 5
                },
                new TodoTags
                {
                    ID = 7,
                    Tag = "Operating Systems",
                    TodoID = 6
                },
                new TodoTags
                {
                    ID = 8,
                    Tag = "Enterprise Programming",
                    TodoID = 7
                },
                new TodoTags
                {
                    ID = 9,
                    Tag = "Networks",
                    TodoID = 8
                },
                new TodoTags
                {
                    ID = 10,
                    Tag = "Concepts of AI",
                    TodoID = 9
                },
                new TodoTags
                {
                    ID = 11,
                    Tag = "Enterprise Programming",
                    TodoID = 10
                },
                new TodoTags
                {
                    ID = 12,
                    Tag = "Ethics of Computing",
                    TodoID = 11
                },
                new TodoTags
                {
                    ID = 13,
                    Tag = "Concepts of AI",
                    TodoID = 12
                },
                new TodoTags
                {
                    ID = 14,
                    Tag = "Enterprise Programming",
                    TodoID = 13
                },
                new TodoTags
                {
                    ID = 15,
                    Tag = "Networks",
                    TodoID = 14
                },
                new TodoTags
                {
                    ID = 16,
                    Tag = "Theory of Computing",
                    TodoID = 15
                },
                new TodoTags
                {
                    ID = 17,
                    Tag = "Operating Systems",
                    TodoID = 16
                });
            
        }

        public DbSet<Todo> Todos { get; set; }

        public DbSet<TodoTags> TodoTags { get; set; }
    }
}
