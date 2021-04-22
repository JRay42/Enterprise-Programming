using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;

namespace Final.Models
{
    public class TodoDbContext : IdentityDbContext<IdentityUser>
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
                    Due = Convert.ToDateTime("2021-04-12T04:59:59.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 2,
                    Task = "Project 4",
                    Due = Convert.ToDateTime("2021-04-14T04:59:59.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 3,
                    Task = "RE 25",
                    Due = Convert.ToDateTime("2021-04-19T04:59:59.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 4,
                    Task = "Quiz 5",
                    Due = Convert.ToDateTime("2021-04-19T18:00:00.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 5,
                    Task = "RE 26",
                    Due = Convert.ToDateTime("2021-04-21T04:59:59.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 6,
                    Task = "Biweekly Report",
                    Due = Convert.ToDateTime("2021-04-23T04:59:59.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 7,
                    Task = "RE 27",
                    Due = Convert.ToDateTime("2021-04-23T04:59:59.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 8,
                    Task = "RE 28",
                    Due = Convert.ToDateTime("2021-04-26T04:59:59.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 9,
                    Task = "Assignment 5",
                    Due = Convert.ToDateTime("2021-04-26T04:59:59.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 10,
                    Task = "Quiz 6",
                    Due = Convert.ToDateTime("2021-04-26T18:00:00.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 11,
                    Task = "Assignment 2",
                    Due = Convert.ToDateTime("2021-04-27T04:59:59.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 12,
                    Task = "Final Project",
                    Due = Convert.ToDateTime("2021-04-28T04:59:59.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 13,
                    Task = "Assignment 4",
                    Due = Convert.ToDateTime("2021-04-29T04:59:59.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 14,
                    Task = "Biweekly Report",
                    Due = Convert.ToDateTime("2021-04-30T04:59:59.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 15,
                    Task = "Lightning Talk",
                    Due = Convert.ToDateTime("2021-05-02T04:59:59.000"),
                    Done = true,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 16,
                    Task = "Project",
                    Due = Convert.ToDateTime("2021-05-03T18:00:00.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 17,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-05T00:30:00.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 18,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-04T14:00:00.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 19,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-05T22:30:00.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 20,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-06T22:30:00.000"),
                    Done = false,
                    Owner = "jray22",
                },
                new Todo
                {
                    ID = 21,
                    Task = "Final Exam",
                    Due = Convert.ToDateTime("2021-05-07T18:00:00.000"),
                    Done = false,
                    Owner = "jray22",
                }
            );
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
                    Tag = "Theory of Computing",
                    TodoID = 3
                },
                new TodoTags
                {
                    ID = 5,
                    Tag = "Ethics of Computing",
                    TodoID = 4
                },
                new TodoTags
                {
                    ID = 6,
                    Tag = "Theory of Computing",
                    TodoID = 5
                },
                new TodoTags
                {
                    ID = 7,
                    Tag = "Concepts of AI",
                    TodoID = 6
                },
                new TodoTags
                {
                    ID = 8,
                    Tag = "Theory of Computing",
                    TodoID = 7
                },
                new TodoTags
                {
                    ID = 9,
                    Tag = "Theory of Computing",
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
                    Tag = "Ethics of Computing",
                    TodoID = 10
                },
                new TodoTags
                {
                    ID = 12,
                    Tag = "Operating Systems",
                    TodoID = 11
                },
                new TodoTags
                {
                    ID = 13,
                    Tag = "Enterprise Programming",
                    TodoID = 12
                },
                new TodoTags
                {
                    ID = 14,
                    Tag = "Networks",
                    TodoID = 13
                },
                new TodoTags
                {
                    ID = 15,
                    Tag = "Concepts of AI",
                    TodoID = 14
                },
                new TodoTags
                {
                    ID = 16,
                    Tag = "Enterprise Programming",
                    TodoID = 15
                },
                new TodoTags
                {
                    ID = 17,
                    Tag = "Ethics of Computing",
                    TodoID = 16
                },
                new TodoTags
                {
                    ID = 18,
                    Tag = "Concepts of AI",
                    TodoID = 17
                },
                new TodoTags
                {
                    ID = 19,
                    Tag = "Enterprise Programming",
                    TodoID = 18
                },
                new TodoTags
                {
                    ID = 20,
                    Tag = "Networks",
                    TodoID = 19
                },
                new TodoTags
                {
                    ID = 21,
                    Tag = "Theory of Computing",
                    TodoID = 20
                },
                new TodoTags
                {
                    ID = 22,
                    Tag = "Operating Systems",
                    TodoID = 21
                }
            );
            //modelBuilder.Entity<TodoUserLogin>().HasData(
            //    new TodoUserLogin
            //    {
            //        UserName = "jray22",
            //        Password = "Abcde12345!"
            //    }
            //);
        }

        public DbSet<Todo> Todos { get; set; }
        public DbSet<TodoTags> TodoTags { get; set; }
        //public DbSet<TodoUserLogin> TodoUserLogins { get; set; }
    }
}
