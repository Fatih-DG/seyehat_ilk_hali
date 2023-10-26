
using BLL;
using DAL.Models;

namespace TestConsole
{
    internal class Program
    {
        static void Main(string[] args)
        {
            BiletYonetimi by=new BiletYonetimi();


            //biletler bilet=new biletler();
            //bilet.id=Guid.NewGuid();
            //bilet.biletUcreti = 100;
            //bilet.biletAdi = "Batman-İstanbul Seferi";
            //bool sonuc=by.biletEkle (bilet);
            //if (sonuc) {

            //    Console.WriteLine("Bilet eklendi");
            //}
            //else
            //{

            //    Console.WriteLine("Bilet eklerken hata oluştu");
            //}


            string biletId = "87afd4fe-b801-4d47-8e9c-3d5df82473d0";

            Guid id=Guid.Parse(biletId);

          var sonuc=  by.biletSilByID(id);
            if (sonuc)
            {

                Console.WriteLine("Bilet silindi");
            }
            else
            {

                Console.WriteLine("Bilet silerken hata oluştu");
            }



        }
    }
}