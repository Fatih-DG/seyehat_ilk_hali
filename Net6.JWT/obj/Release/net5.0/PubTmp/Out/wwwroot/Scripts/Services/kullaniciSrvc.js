rehberApp.factory('kullaniciSrvc', function ($http) {
  
    return {
      
        GetKullaniciBilgileri: function (arama) {

          return   $http.get(api + 'Kullanicilar/GetKullaniciBilgileri?arama=' + arama);

        }

    }
});