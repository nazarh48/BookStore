using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BookStore.Model
{
    public class Employee
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EmployeeNumber { get; set; }

        [Required]
        public string EmployeeName { get; set; }

        [Required]
        public string Qualification { get; set; }

        public int Age { get; set; }

        public string City { get; set; }
    }

}
