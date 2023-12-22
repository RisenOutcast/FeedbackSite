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
                        Created = DateTime.Parse("2023-12-19 12:12:49.3349291"),
                        Name = "Testi Testinpoika",
                        Email = "test@test.com",
                        Subject = "Testing",
                        Score = 2,
                        Message = "Testing is all fun and games, until it isn't."
                    },
                    new Feedback
                    {
                        Created = DateTime.Parse("2023-12-19 12:22:49.3349291"),
                        Name = "Zunya",
                        Email = "zunya37@hotmail.com",
                        Subject = "Lorem Ipsum",
                        Score = 4,
                        Message = "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    },
                    new Feedback
                    {
                        Created = DateTime.Parse("2023-12-20 12:05:49.3349291"),
                        Name = "Lighthouse37",
                        Email = "light@house.de",
                        Subject = "The current movie",
                        Score = 4,
                        Message = "I thought it was great and nifty, all things considered 4/5. Too much water."
                    },     
                    new Feedback
                    {
                        Created = DateTime.Parse("2023-12-21 12:01:49.3349291"),
                        Name = "SilenceBefore",
                        Email = "silence@noise.com",
                        Subject = "The local band",
                        Score = 4,
                        Message = "Apparently this goes far. Could be the next big thing, if only things werent that way. Therefore I must say it is only a lazy attempt at this time. Keep trying, maybe. or go home."
                    },
                    new Feedback
                    {
                        Created = DateTime.Parse("2023-12-22 12:29:49.3349291"),
                        Name = "BungaBunga42",
                        Email = "supernovatron@hotmail.com",
                        Subject = "Me",
                        Score = 5,
                        Message = "Stunning."
                    }
                );
                context.SaveChanges();
            }
        }
    }
}
