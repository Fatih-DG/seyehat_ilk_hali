using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Net5.JWT
{
    public class GenelResponseST
    {
        public List<String> hatalar { get; set; }
        public object cevap { get; set; }


        public static List<string> HataOlustur(ValidationResult validate)
        {



            var hatalar = validate.Errors.Select(p => p.ErrorMessage).ToList();
            return hatalar;



     
        }


        public static List<string> HataOlustur(string hata)
        {
            List<string> hatalar = new List<string>();

            hatalar.Add(hata);
            return hatalar;

        
        }



        public static List<string> HataOlustur(List<string> hatalar,string hata)
        {
           

            hatalar.Add(hata);
            return hatalar;


        }





        public static GenelResponseST OkCevapOlustur(dynamic cevap)
        {


            return new GenelResponseST() { cevap = cevap, hatalar = new List<string>() };


        }
    }




}
