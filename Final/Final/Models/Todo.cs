using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Final.Models
{
    public class Todo
    {
        public int ID { get; set; }
        public IList<TodoTags> Tags {get; set;}
        public string Task { get; set; }
        public DateTime Due { get; set; }
        public bool Done { get; set; }
    }
}
