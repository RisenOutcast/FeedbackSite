using Microsoft.EntityFrameworkCore;

namespace FeedbackAPI.Models
{
    public class FeedbackContext : DbContext
    {
        public DbSet<Feedback> Feedbacks { get; set; }

        public FeedbackContext(DbContextOptions<FeedbackContext> options)
        : base(options)
        {

        }
    }
}
