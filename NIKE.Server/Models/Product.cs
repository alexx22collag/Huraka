using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace NIKE.Server.Models
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string? ProductName { get; set; }
        public string? Description { get; set; }
        public int Stock {  get; set; }
        public decimal Price { get; set; }
        public string? Image {  get; set; }
        public string? Image2 {  get; set; }
        public virtual Category? Category { get; set; }
        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public virtual Subcategory? Subcategory { get; set; }
        [ForeignKey("Subcategory")]
        public int SubcategoryId { get; set; }
    }
}
