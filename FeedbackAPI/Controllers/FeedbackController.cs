using FeedbackAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace FeedbackAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FeedbackController : Controller
    {
        private FeedbackContext feedbackContext;
        public FeedbackController(FeedbackContext _feedbackContext)
        {
            feedbackContext = _feedbackContext;
        }

        [HttpGet("")]
        public ActionResult<List<Feedback>> GetFeedbacks(int startIndex = 0, int items = 25)
        {
            var feedbacks = feedbackContext.Feedbacks.Skip(startIndex).Take(items).AsQueryable();
            return feedbacks.ToList();
        }

        [HttpPost("")]
        public ActionResult<object> AddFeedback(Feedback feedback)
        {
            // Check that the user gave a name
            if (feedback.Name == "")
                return BadRequest();

            // Add the feedback to the database
            feedbackContext.Feedbacks.Add(feedback);
            feedbackContext.SaveChanges();

            // Return the generated id (primary key) to the user
            return new { id = feedback.Id };
        }
    }
}
