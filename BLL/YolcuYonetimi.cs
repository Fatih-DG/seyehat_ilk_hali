using DAL.Models;
using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class YolcuYonetimi
    {

        private seyehatContext _seyehatContext = new seyehatContext();

        public bool yolcuEkle(yolcu ylc) {


            try
            {
                _seyehatContext.yolcu.Add(ylc);
                _seyehatContext.SaveChanges();
                return true;
            }
            catch (Exception)
            {

             
            }

            return false;

        }

        public bool yolcuSilByID(Guid yolcuID) {

             yolcu? ylc= _seyehatContext.yolcu.Where(p => p.id == yolcuID).FirstOrDefault();

            if (ylc != null)
            {
                try
                {

                    _seyehatContext.Remove(ylc);
                    _seyehatContext.SaveChanges();
                    return true;
                }
                catch (Exception)
                {
                    
                    
                }

            }
            return false;
        }


        public string yolcuAdGuncelle(Guid id,string yolcununYeniAdi) {


      yolcu? ylc=      _seyehatContext.yolcu.Where(p => p.id == id).FirstOrDefault();

            if (ylc != null) {

                ylc.ad = yolcununYeniAdi;
                _seyehatContext.SaveChanges();
                return "Başarılı";
            }

            return "Yolcu bulunamadı";


        
        }

        public string yolcularinAdiniGuncelle(List<cokluYolcuSilmeYK> yolcular) {



            List<yolcu> list = new List<yolcu>();

       var transaction=     _seyehatContext.Database.BeginTransaction();

            try
            {
                foreach (var item in yolcular)
                {


                    var ylc = _seyehatContext.yolcu.Where(p => p.id == item.id).FirstOrDefault();

                    if (ylc != null)
                    {

                        ylc.ad = item.yolcununYeniAdi;
                        _seyehatContext.SaveChanges();
                    }


                }
                transaction.Commit();
                return "Başarılı";

            }
            catch (Exception)
            {

                transaction.Rollback();
                return "Hata Oluştu";
              
            }
           


        
        }

    }
}
