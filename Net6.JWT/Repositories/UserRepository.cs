using Net5.JWT.Models;
using System.Collections.Generic;
using System.Linq;

namespace Net5.JWT.Repositories
{
    public static class UserRepository
    {
        public static Kullanici Get(string kullaniciAdi, string sifre)
        {
            var users = new List<Kullanici>();
            users.Add(new Kullanici {  kullaniciAdi = "admin", sifre = "ad", rol = "manager" });
            users.Add(new Kullanici {  kullaniciAdi = "vejeta", sifre = "vejeta", rol = "employee" });
            users.Add(new Kullanici {  kullaniciAdi = "kuririn", sifre = "kuririn", rol = "tester" });
            return users.Where(x => x.kullaniciAdi.ToLower() == kullaniciAdi.ToLower() && x.sifre == sifre).FirstOrDefault();
        }
    }
}
