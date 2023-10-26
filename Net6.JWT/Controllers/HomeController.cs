using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Net5.JWT.Attributes;
using Net5.JWT.Models;
using Net5.JWT.Repositories;
using Net5.JWT.Services;
using Net5.JWT.Validators;
using System.Linq;
using System;
using System.Data.Common;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace Net5.JWT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("EAPolicy")]
    public class HomeController : ControllerBase
    {
        private readonly IMapper _mapper;
       // private readonly KullaniciYonetimi ky;
       
        public HomeController(IMapper mapper)
        {
            _mapper = mapper;
           
        }

        //[HttpPost]
        //[Route("login")]
        //[AllowAnonymous]

        //public async Task<ActionResult<dynamic>> login([FromBody] Kullanici model)
        //{


        //    try
        //    {
        //        var validator = new KullaniciGirisiValidator();

               
        //        var results = validator.Validate(model);
        //        if (!results.IsValid)
        //        {

        //            return BadRequest(GenelResponseST.HataOlustur(results));

        //        }

        //        //  var user = UserRepository.Get(model.kullaniciAdi, model.sifre);
           
        //        var kullanici = ky.Login(model.kullaniciAdi, model.sifre);

        //        if (kullanici == null)
        //        {
        //            return BadRequest(GenelResponseST.HataOlustur("Kullanıcı adı veya şifre hatalı"));
        //        }
        //        else
        //        {
        //            var token = TokenService.CreateToken(kullanici);
        //            kullanici.sifre = "";



        //            var cevap = new
        //            {
        //                kullaniciAdi = kullanici.kullaniciAdi,
        //                roller = kullanici.kullanici_rol_iliskisi.Select(p => p.kullaniciRolu.rol).ToList(),
        //                access_token = token,

        //            };
        //            return cevap;
        //        }
        //    }
        //    catch (Exception)
        //    {

        //        return null;
        //    }
        //}




        [HttpGet]
        [Route("authenticated")]
        [AllowAnonymous]
        public string Authenticated()
        {


            return String.Format("Authenticated - {0}", User.Identity.Name);
        }






    }

}




     




    

