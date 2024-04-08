using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NIKE.Server.Models
{
    public class OrderDetail
    {
        [Key]
        public int OrderDetailId { get; set; }
        public Order? Order { get; set; }
        [ForeignKey("Order")]
        public int OrderId { get; set; }
        public Product? Product { get; set; }
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public int Amount { get; set; }
    }
}
