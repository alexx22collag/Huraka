using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NIKE.Server.Models
{
    public class Order
    {
        [Key]
        public int OrderId { get; set; }
        public User? User { get; set; }
        [ForeignKey("User")]
        public int UserId { get; set; }
        public DateTime OrderDate { get; set; }
    }
}
