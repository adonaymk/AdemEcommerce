using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Adem",
                    Email = "adem@test.com",
                    UserName = "adem@test.com",
                    Address = new Address
                    {
                        FirstName = "Adem",
                        LastName = "mekg",
                        Street = "10 Street",
                        City = "Nashville",
                        State = "TN",
                        ZipCode = "37015"

                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");

            }
        }
    }
}