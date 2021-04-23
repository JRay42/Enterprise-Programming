using System.ComponentModel.DataAnnotations;

namespace Final.Models
{
  public class TodoUserLogin
  {
      [Key]
      public string UserName { get; set; }
      public string Password { get; set; }
  }
}