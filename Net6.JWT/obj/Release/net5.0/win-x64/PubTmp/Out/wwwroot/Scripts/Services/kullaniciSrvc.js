rehberApp.factory('kullaniciSrvc', function ($http) {
    var api = "https://rehbertest.batman.edu.tr/api/";
    return {
      
        GetKullaniciBilgileri: function (arama) {

          return   $http.get(api + 'Kullanicilar/GetKullaniciBilgileri?arama=' + arama);

        }

    }
});