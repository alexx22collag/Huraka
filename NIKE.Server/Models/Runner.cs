using System.ComponentModel.DataAnnotations;

namespace NIKE.Server.Models
{
    public class Runner
    {
        [Key]
        public int RunnerId {  get; set; }
        public string? RunnerName { get; set;}
        public string? Email { get; set;}
    }
}
