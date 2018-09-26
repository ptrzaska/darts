using Microsoft.EntityFrameworkCore;

namespace DartsApp.API.Models
{
    public class DataContext : DbContext
    {
      public DataContext(DbContextOptions<DataContext> options) : base(options) {}

      public DbSet<Player> Players { get; set; }

      public DbSet<DayResult> Results { get; set; }
    }
}
