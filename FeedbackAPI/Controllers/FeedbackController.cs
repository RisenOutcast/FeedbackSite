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
        public ActionResult<List<Feedback>> GetFeedbacks(int startIndex, int numberOfItems)
        {
            var feedbacks = feedbackContext.Feedbacks.Skip(startIndex).Take(numberOfItems).AsQueryable();
            return feedbacks.ToList();
        }
    }
}
