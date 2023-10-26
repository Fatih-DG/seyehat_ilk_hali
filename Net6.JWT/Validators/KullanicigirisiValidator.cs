
using FluentValidation;
using Net5.JWT.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Net5.JWT.Validators
{
    public class KullaniciGirisiValidator : AbstractValidator<Kullanici>
    {

        public KullaniciGirisiValidator()
        {
            RuleFor(x => x.kullaniciAdi)
            .NotEmpty().WithMessage("Kullanıcı adı boş olamaz")
            .Length(4, 50).WithMessage("Kullanıcı adı 4 ile 50 karakter arasında olmalıdır");
        
            
            RuleFor(x => x.sifre)
           .NotEmpty().WithMessage("Şifre alanı boş olamaz")
           .Length(5, 50).WithMessage("Şifre  5 ile 50 karakter arasında olmalıdır"); 


            //.Custom((studentNumber, context) =>
            //{
            //    var arr = new[] { "A", "B", "C" };
            //    if (!arr.Contains(studentNumber.Substring(0, 1)))
            //    {
            //        context.AddFailure("Öğrenci numarası 'A', 'B' veya 'C' harfi ile başlamalıdır.");
            //    }
            //});
        }

    }
}
