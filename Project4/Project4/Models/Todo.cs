using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project4.Models
{
    public class Todo
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string[] Todos {get; set;}
    }
}
