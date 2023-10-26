using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;

using AutoMapper;

using System.Security.Claims;
using Net5.JWT.Claims;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using System.Drawing;
using System.IO;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Net5.JWT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("EAPolicy")]
    public class KullanicilarController : ControllerBase
    {
        private readonly IMapper _mapper;

        //    public KullanicilarController(IMapper mapper)
        //    {
        //        _mapper = mapper;
        //    }

        //    // GET: api/<KullanicilarController>





        //    //[HttpGet]
        //    //[Route("YeniSifreOlustur")]
        //    //[AllowAnonymous]
        //    //public ActionResult YeniSifreOlustur(String sifre, string sifreTekrar,string sifirlamaId)
        //    //{

        //    //    if (string.IsNullOrEmpty(sifre)) { 

        //    //        return BadRequest(GenelResponseST.HataOlustur("Şifre Alanı boş olamaz"));

        //    //    }

        //    //    if (sifre != sifreTekrar) { 

        //    //        return BadRequest(GenelResponseST.HataOlustur("Şifreler uyuşmuyor"));


        //    //    }

        //    //    Guid id;
        //    //    bool guidDogruMu=Guid.TryParse(sifirlamaId,out id);
        //    //    if (!guidDogruMu) {
        //    //        return BadRequest(GenelResponseST.HataOlustur("Şifre Sıfırlama ID'si Geçersiz"));
        //    //    }

        //    //    var cevap = _ky.YeniSifreOlustur(sifre, id);
        //    //    if (cevap == "Başarılı")

        //    //        return Ok(cevap);
        //    //    else
        //    //        return BadRequest(GenelResponseST.HataOlustur(cevap));


        //    //}


        //    [HttpGet]
        //    [Route("GetKullanicilarPaging")]
        //    [Authorize(Roles = "admin")]
        //    public ActionResult GetKullanicilarPaging(string arama, int sayfaNo, int sayfaBoyutu)
        //    {

        //        ///Yetki Kontrol

        //      //  var user = User;

        //        var sonuc = _ky.GetKullaniciBilgileriPaging(arama, sayfaNo, sayfaBoyutu);

        //        Sayfalama<kisi_bilgileri> paylasimlar = new Sayfalama<kisi_bilgileri>();




        //        if (sonuc == null)
        //        {
        //            paylasimlar.source = new List<kisi_bilgileri>();
        //            paylasimlar.total = 0;


        //            return Ok(paylasimlar);
        //        }
        //        else
        //        {


        //            paylasimlar.source = sonuc.source;
        //            paylasimlar.total = sonuc.TotalCount;
        //            return Ok(paylasimlar);

        //        }




        //    }



        //    [HttpGet]
        //    [Route("GetKullaniciBilgileri")]
        //    [AllowAnonymous]
        //    public ActionResult GetKullaniciBilgileri(string arama)
        //    {

        //        if (string.IsNullOrEmpty(arama))
        //        {
        //            return BadRequest(new List<kisi_bilgileri>());

        //        }
        //        else
        //        {

        //            if (arama.Length < 3)
        //            {
        //                return BadRequest(new List<kisi_bilgileri>());
        //            }
        //        }


        //        var sonuc = _ky.GetKullaniciBilgileri(arama);


        //        return Ok(sonuc);




        //    }





        //    [HttpGet]
        //    [Route("KisiyiPasifYap")]
        //    [Authorize(Roles = "admin")]
        //    public ActionResult KisiyiPasifYap(string id)
        //    {

        //        if (string.IsNullOrEmpty(id))
        //            return Ok(false);
        //        else
        //            return Ok(_ky.RehberKisisiPasifYap(Guid.Parse(id)));






        //}



        //[HttpGet]
        //    [Route("KisiyiAktifYap")]
        //    [Authorize(Roles = "admin")]
        //    public ActionResult KisiyiAktifYap(string id)
        //    {


        //        if (string.IsNullOrEmpty(id))
        //            return Ok(false);
        //        else
        //            return Ok(_ky.RehberKisisiAktifYap(Guid.Parse(id)));


        //    }
        //    [HttpPost]
        //    [Route("RehbereKisiEkleVeyaGuncelle")]
        //    [Authorize(Roles = "admin")]
        //    public ActionResult RehbereKisiEkleVeyaGuncelle(KullaniciBilgileriST kisiBilgileri)
        //    {

        //        var mappedKisi = _mapper.Map<kisi_bilgileri>(kisiBilgileri);


        //        if (string.IsNullOrEmpty(kisiBilgileri.id))
        //        {

        //            return Ok(_ky.RehbereKisiEkle(mappedKisi));



        //        }
        //        else
        //        {


        //            return Ok(_ky.RehbereKisisiniGuncelle(mappedKisi));


        //        }



        //    }


        //    [HttpGet]
        //    [Route("KisiSil")]
        //    [Authorize(Roles = "admin")]
        //    public ActionResult KisiSil(string id)
        //    {



        //        if (string.IsNullOrEmpty(id))
        //            return Ok(false);
        //        else
        //            return Ok(_ky.RehberKisisiniSil(Guid.Parse(id)));



        //    }





    }
}
