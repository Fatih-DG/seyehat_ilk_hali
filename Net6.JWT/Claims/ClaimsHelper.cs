using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;

namespace Net5.JWT.Claims
{
    public class ClaimsHelper
    {
        public static int  getID(IIdentity  identy) {

            var claimsIdentity = identy as ClaimsIdentity;
            var kurumID = claimsIdentity.FindFirst("id").Value;

            try
            {
                return int.Parse(kurumID);
            }
            catch (Exception)
            {

                return -1;
            }
          
        }


        public static int getkullaniciID(IIdentity identy)
        {

            var claimsIdentity = identy as ClaimsIdentity;
            var kurumID = claimsIdentity.FindFirst("kullaniciID").Value;

            try
            {
                return int.Parse(kurumID);
            }
            catch (Exception)
            {

                return -1;
            }

        }
        public static int getOgretmenID(IIdentity identy)
        {

            var claimsIdentity = identy as ClaimsIdentity;
            var kurumID = claimsIdentity.FindFirst("ogretmenID").Value;

            try
            {
                return int.Parse(kurumID);
            }
            catch (Exception)
            {

                return -1;
            }

        }
        public static int getOgretmenKurumID(IIdentity identy)
        {

            var claimsIdentity = identy as ClaimsIdentity;
            var kurumID = claimsIdentity.FindFirst("kurumID").Value;

            try
            {
                return int.Parse(kurumID);
            }
            catch (Exception)
            {

                return -1;
            }

        }
        public static int getOgrenciID(IIdentity identy)
        {

            var claimsIdentity = identy as ClaimsIdentity;
            var kurumID = claimsIdentity.FindFirst("ogrenciID").Value;

            try
            {
                return int.Parse(kurumID);
            }
            catch (Exception)
            {

                return -1;
            }

        }
        public static string getRol(IIdentity identy)
        {

            var claimsIdentity = identy as ClaimsIdentity;
            return claimsIdentity.FindFirst(ClaimTypes.Role).Value;

         

        }
        public static string getKullaniciAdi(IIdentity identy)
        {

            var claimsIdentity = identy as ClaimsIdentity;
            return  claimsIdentity.FindFirst(ClaimTypes.Name).Value;

        

        }
    }
}
