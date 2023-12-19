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

        /// <summary>
        /// Get the feedback entries from the database, ordered by creation date. 
        /// </summary>
        /// <param name="offset">Starting index</param>
        /// <param name="limit">How many entries are returned</param>
        /// <returns>List of the entries.</returns>
        [HttpGet("")]
        public ActionResult<List<Feedback>> GetFeedbacks(int offset = 0, int limit = 25)
        {
            var feedbacks = feedbackContext.Feedbacks.OrderBy(x => x.Created).Skip(offset).Take(limit).AsQueryable();
            return feedbacks.ToList();
        }

        /// <summary>
        /// For adding new feedback entries to the database.
        /// </summary>
        /// <param name="feedback">Feedback model</param>
        /// <returns>The created primary key.</returns>
        [HttpPost("")]
        public ActionResult<object> AddFeedback(Feedback feedback)
        {
            // Check that the user gave a name
            if (feedback.Name == "")
                return BadRequest();

            // Set creation time to now
            feedback.Created = DateTime.Now;

            // Add the feedback to the database
            feedbackContext.Feedbacks.Add(feedback);
            feedbackContext.SaveChanges();

            // Return the generated id (primary key) to the user
            return new { id = feedback.Id };
        }

        /// <summary>
        /// Get a single feedback from the database with it's id number.
        /// </summary>
        /// <param name="id">Feedback's id</param>
        /// <returns>Feedback object</returns>
        [HttpGet("{id}")]
        public ActionResult<Feedback> GetFeedbackById(long id)
        {
            var feedback = feedbackContext.Feedbacks.FirstOrDefault(feedback => feedback.Id == id);

            if (feedback != null)
                return feedback;
            else
                return NotFound();
        }

        /// <summary>
        /// Delete one entry from the database with specified id.
        /// </summary>
        /// <param name="id">Feedback's id</param>
        /// <returns>Either not found or no content</returns>
        [HttpDelete("{id}")]
        public ActionResult<Feedback> DeleteById(long id)
        {
            var feedback = feedbackContext.Feedbacks.FirstOrDefault(feedback => feedback.Id == id);
            if (feedback != null)
            {
                // Remove the feedback
                feedbackContext.Feedbacks.Remove(feedback);
                feedbackContext.SaveChanges();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
    }
}
