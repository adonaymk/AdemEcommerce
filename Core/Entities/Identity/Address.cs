using System.ComponentModel.DataAnnotations;

namespace Core.Entities.Identity
{
    public class Address
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Street { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        [Required] //string is nullable we need restriction not to make null
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; } // A user has one address for this senario

    }
}