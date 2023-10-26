
using Microsoft.IdentityModel.Tokens;
using Net5.JWT.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Net5.JWT.Services
{
    public static class TokenService
    {
        private const double EXPIRE_HOURS = 1.0;
        public static string CreateToken(object user)
        {
            var key = Encoding.ASCII.GetBytes(Settings.Secret);
            var tokenHandler = new JwtSecurityTokenHandler();

            List<Claim> listClaim = new List<Claim>();

          //  listClaim.Add(new Claim(ClaimTypes.Name, user.kullaniciAdi.ToString()));
       
            //listClaim.Add(new Claim("kullaniciID", user.id.ToString()));

          


            //foreach (var item in user.kullanici_rol_iliskisi)
            //{
            //    listClaim.Add(new Claim(ClaimTypes.Role,item.kullaniciRolu.rol));

            //}
      







            var descriptor = new SecurityTokenDescriptor
            {



                Subject = new ClaimsIdentity(listClaim.ToArray()),
                Expires = DateTime.UtcNow.AddDays(EXPIRE_HOURS),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(descriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
