﻿using System.ComponentModel.DataAnnotations;

namespace NIKE.Server.Models
{
    public class User
    {
    [Key]
        public int UserId { get; set; }
        public string? Name { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Password { get; set; }
     
    }
}
