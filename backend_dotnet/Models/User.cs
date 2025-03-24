using System.ComponentModel.DataAnnotations;

namespace backend_dotnet.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public required string Username { get; set; }
        public required string Email { get; set; }
        public required string PasswordHash { get; set; }
    }
}
