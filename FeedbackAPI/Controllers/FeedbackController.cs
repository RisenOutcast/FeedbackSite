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
            var feedbacks = feedbackContext.Feedbacks.OrderBy(feedback => feedback.Created).Skip(offset).Take(limit).AsQueryable();
            return feedbacks.ToList();
        }

        /// <summary>
        /// Get max number of items in database.
        /// </summary>
        /// <returns>The number of items</returns>
        [HttpGet("Amount")]
        public int GetMaxFeedbacksNumber()
        {
            var MaxAmount = feedbackContext.Feedbacks.Count();
            return MaxAmount;
        }

        /// <summary>
        /// For adding new feedback entries to the database.
        /// </summary>
        /// <param name="feedback">Feedback model</param>
        /// <returns>The created primary key.</returns>
        [HttpPost("")]
        public ActionResult<object> AddFeedback(Feedback feedback)
        {
            // Check that the user gave values
            if (feedback.Name == "" || feedback.Email == "" || feedback.Score == 0)
                return BadRequest();

            // Set creation time to now
            feedback.Created = DateTime.Now;

            // Add the feedback to the database
            feedbackContext.Feedbacks.Add(feedback);
            feedbackContext.SaveChanges();

            return CreatedAtAction("GetFeedbackById", new { id = feedback.Id }, feedback);
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
