using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class FirmaYonetimi
    {
        private seyehatContext _seyehatContext = new seyehatContext();

        public bool firmaEkle(firma frm)
        {


            try
            {
                _seyehatContext.firma.Add(frm);
                _seyehatContext.SaveChanges();
                return true;
            }
            catch (Exception)
            {


            }

            return false;

        }

        public bool firmaSilByID(Guid firmaID)
        {

            var blt = _seyehatContext.firma.Where(p => p.id == firmaID).FirstOrDefault();

            if (blt != null)
            {
                try
                {

                    _seyehatContext.firma.Remove(blt);
                    _seyehatContext.SaveChanges();
                    return true;
                }
                catch (Exception)
                {


                }

            }
            return false;
        }
        public string firmaAdGuncelle(Guid id, string firmaAdi)
        {


            var frm = _seyehatContext.firma.Where(p => p.id == id).FirstOrDefault();

            if (frm != null)
            {

                frm.firmaAdi = firmaAdi;
                _seyehatContext.SaveChanges();
                return "Başarılı";
            }

            return "Yolcu bulunamadı";



        }



    }
}
