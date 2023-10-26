////registrationModule.factory('Srvc', function ($http, $q, api) {
    
////    return {
////        PostMesajEkle: function (mesaj) {
////            var deferred = $q.defer();

////            $http.post(api + "Iletisim/PostMesajEkle", mesaj).success(deferred.resolve).error(deferred.reject);
////            return deferred.promise;
////        },
////        birimDegsitir: function (birimID) {

////        var deferred = $q.defer();
////        $http.get(api + 'Kullanici/setBirimID?birimID=' + birimID).success(deferred.resolve).error(deferred.reject);

////        return deferred.promise;
////    }, getKullaniciBirimleriByKullaniciAdi:function (kullaniciAdi) {

////        var deferred = $q.defer();
////        $http.get(api + 'Kullanici/getKullaniciBirimleriByKullaniciAdi?kullaniciAdi=' + kullaniciAdi).success(deferred.resolve).error(deferred.reject);

////        return deferred.promise;
////    }, getKullanici: function (sayfa, sayfaBoyutu) {

////        var deferred = $q.defer();
////        $http.get(api + 'Kullanici/getKullanici').success(deferred.resolve).error(deferred.reject);

////        return deferred.promise;
////    },
////             GetAyarlar: function () {

////            var deferred = $q.defer();
////            $http.get(api + 'Kullanici/getAyarlar').success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////             }, GetBirimler: function () {

////                 var deferred = $q.defer();
////                 $http.get(api + 'Values/GetBirimler').success(deferred.resolve).error(deferred.reject);

////                 return deferred.promise;
////             },  getTumPaylasimlarim: function (sayfa, sayfaBoyutu,birimID,paylasimTuru) {

////            var deferred = $q.defer();
////            $http.get(api + 'Paylasimlar/GetTumPaylasimlarim?sayfaNo=' + sayfa + "&sayfaBoyutu=" + sayfaBoyutu + "&birimID=" + birimID + "&paylasimTuru=" + paylasimTuru).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }, getOnayBekleyenPaylasimlar: function (sayfa, sayfaBoyutu) {

////            var deferred = $q.defer();
////            $http.get(api + 'Paylasimlar/GetOnayBekleyenlerPaylasimlar?sayfaNo=' + sayfa + "&sayfaBoyutu=" + sayfaBoyutu).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }, getOnayBekleyenYorumlar: function (sayfa, sayfaBoyutu) {

////            var deferred = $q.defer();
////            $http.get(api + 'Paylasimlar/GetOnayBekleyenYorumlar?sayfaNo=' + sayfa + "&sayfaBoyutu=" + sayfaBoyutu).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }, PostPaylasimVeyaYorumOnayla: function (onaylanacaklar) {

////            var deferred = $q.defer();
////            $http.post(api + 'Paylasimlar/PostPaylasimVeyaYorumOnayla',onaylanacaklar).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }, PostPaylasimVeyaYorumRedEt: function (onaylanacaklar) {

////            var deferred = $q.defer();
////            $http.post(api + 'Paylasimlar/PostPaylasimVeyaYorumRedEt', onaylanacaklar).success(deferred.resolve).error(deferred.reject);
            
////            return deferred.promise;
////        }, GetPaylasimByHaberID: function (haberID) {

////            var deferred = $q.defer();
////            $http.get(api + 'Paylasimlar/GetPaylasimByHaberID?haberID=' + haberID).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }, getPaylasimByID: function (haberID) {

////            var deferred = $q.defer();
////            $http.get(api + 'Paylasimlar/getPaylasimByID?haberID='+haberID).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }, GetPaylasimDosyasiSil: function (id) {

////            var deferred = $q.defer();
////            $http.get(api + 'Paylasimlar/GetPaylasimDosyasiSil?id=' + id).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        },PaylasimSil: function (id,tip) {

////            var deferred = $q.defer();
////            $http.get(api + 'Paylasimlar/GetPaylasimSil?id=' + id+"&tip="+tip).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        },

////        GetMesajlar: function (sayfa, sayfaBoyutu) {

////        var deferred = $q.defer();
////        $http.get(api + 'Iletisim/GetMesajlar?sayfa='+sayfa+"&sayfaBoyutu="+sayfaBoyutu).success(deferred.resolve).error(deferred.reject);

////        return deferred.promise;
////    }, GetOkunduIsaretle: function (id) {

////        var deferred = $q.defer();
////        $http.get(api + 'Iletisim/GetOkunduIsaretle/' + id).success(deferred.resolve).error(deferred.reject);

////        return deferred.promise;
////    }, PostMesajlariSil: function (idler) {
////        var deferred = $q.defer();
       
////        $http.post(api + "Iletisim/PostMesajlariSil", idler).success(deferred.resolve).error(deferred.reject);
////        return deferred.promise;
////    }, 
        
        
        
     
////    }
////}).factory('yemekhaneSrvc', function ($http, $q, api) {
////    return {
////        GetYemekMenusu: function () {

////            var deferred = $q.defer();
////            $http.get(api + 'Yemekhane/GetYemekMenusu').success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }, getYemekMenusuByTarih:function (tarih) {

////            var deferred = $q.defer();
////            $http.get(api + 'Yemekhane/getYemekMenusuByTarih?tarih=' + tarih.toUTCString()).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }, PostYemekMenusuEkleVeyaGuncelle: function (menu) {
////            var deferred = $q.defer();

////            $http.post(api + "Yemekhane/PostYemekMenusuEkleVeyaGuncelle", menu).success(deferred.resolve).error(deferred.reject);
////            return deferred.promise;
////        }, GetYemekMenusuSil:function (tarih) {

////            var deferred = $q.defer();
////            $http.get(api + 'Yemekhane/GetYemekMenusuSil?tarih=' + tarih.toUTCString()).success(deferred.resolve).error(deferred.reject);

////            return deferred.promise;
////        }
////    }

////});