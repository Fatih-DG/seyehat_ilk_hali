using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class BiletYonetimi
    {

        private seyehatContext _seyehatContext = new seyehatContext();

        public bool biletEkle(biletler bilet)
        {


            try
            {
                _seyehatContext.biletler.Add(bilet);
                _seyehatContext.SaveChanges();
                return true;
            }
            catch (Exception)
            {


            }

            return false;

        }

        public bool biletSilByID(Guid biletID)
        {

            var blt = _seyehatContext.biletler.Where(p => p.id == biletID).FirstOrDefault();

            if (blt != null)
            {
                try
                {

                    _seyehatContext.biletler.Remove(blt);
                    _seyehatContext.SaveChanges();
                    return true;
                }
                catch (Exception)
                {


                }

            }
            return false;
        }
        public string biletAdGuncelle(Guid id, string biletAdi)
        {


            var blt = _seyehatContext.yolcu.Where(p => p.id == id).FirstOrDefault();

            if (blt != null)
            {

                blt.ad = biletAdi;
                _seyehatContext.SaveChanges();
                return "Başarılı";
            }

            return "Yolcu bulunamadı";



        }



    }
}
