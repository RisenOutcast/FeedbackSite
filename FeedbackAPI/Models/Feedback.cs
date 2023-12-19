using System.ComponentModel.DataAnnotations;

namespace FeedbackAPI.Models
{
    public class Feedback
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public DateTime Created { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Message { get; set; }
    }
}
