using Microsoft.EntityFrameworkCore;

namespace FeedbackAPI.Models
{
    public class FeedbackContext : DbContext
    {
        public DbSet<Feedback> Feedbacks { get; set; }


        protected readonly IConfiguration Configuration;
        public FeedbackContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // Connect to SQL database
            options.UseSqlServer(Configuration.GetConnectionString("Feedbank"));
        }
    }
}
