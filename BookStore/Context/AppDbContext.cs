using BookStore.Model;
using Microsoft.EntityFrameworkCore;

namespace BookStoreApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Employee> Employee { get; set; }
    }
}
