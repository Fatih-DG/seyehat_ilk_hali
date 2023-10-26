registrationModule.factory('kullaniciSrvc', function ($http) {
   // var api = "https://localhost:44374/api/";
   // var add = "https://localhost:44374";
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