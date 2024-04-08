using Microsoft.EntityFrameworkCore;
using NIKE.Server.Models;

namespace NIKE.Server.DbContext
{
    public class Context: Microsoft.EntityFrameworkCore.DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Subcategory> Subcategories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<Runner> Runners { get; set; }

        public Context(DbContextOptions<Context> options) :
         base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           //modelBuilder.Seed();
            base.OnModelCreating(modelBuilder);
        }
    }
}
