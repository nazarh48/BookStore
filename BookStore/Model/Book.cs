using System.ComponentModel.DataAnnotations;

namespace BookStore.Model
{
    public class Book
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Author { get; set; }

        public int Year { get; set; }
    }
}
