registrationModule.factory('kullaniciSrvc', function ($http) {
    var api = "https://rehbertest.batman.edu.tr/api/";
    return {
  

        GetKullanicilarPaging: function (arama, sayfaNo, sayfaBoyutu) {

  
         return   $http.get(api + 'Kullanicilar/GetKullanicilarPaging?arama=' + arama + "&sayfaNo=" + sayfaNo + "&sayfaBoyutu=" + sayfaBoyutu);

         
        },
        KisiSil: function (id) {


            return $http.get(api + 'Kullanicilar/KisiSil?id=' + id);


        },

        KisiyiAktifYap: function (id) {


            return $http.get(api + 'Kullanicilar/KisiyiAktifYap?id=' + id);


        }, KisiyiPasifYap: function (id) {


            return $http.get(api + 'Kullanicilar/KisiyiPasifYap?id=' + id);


        }, RehbereKisiEkleVeyaGuncelle: function (kisiBilgileri) {


            return $http.post(api + 'Kullanicilar/RehbereKisiEkleVeyaGuncelle', kisiBilgileri);


        },


    }
});