using Microsoft.EntityFrameworkCore;

namespace FeedbackAPI.Models
{
    /// <summary>
    /// Adds sample data to the database if its empty.
    /// </summary>
    public  static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new FeedbackContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<FeedbackContext>>()))
            {
                // Look for any feedbacks.
                if (context.Feedbacks.Any())
                {
                    return;   // DB has been seeded
                }
                context.Feedbacks.AddRange(
                    new Feedback
                    {
                        Created = DateTime.Parse("2023-17-12"),
                        Name = "Testi Testman",
                        Email = "test@test.com",
                        Score = 2,
                        Message = "Testi 3"
                    },
                    new Feedback
                    {
                        Created = DateTime.Parse("2023-18-12"),
                        Name = "Testinen",
                        Email = "testinen@testi.fi",
                        Score = 4,
                        Message = "Testi 2"
                    },
                    new Feedback
                    {
                        Created = DateTime.Parse("2023-19-12"),
                        Name = "Testi Testinpoika",
                        Email = "Testimies@testi.org",
                        Score = 3,
                        Message = "Testi 3"
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
