var api = "https://rehbertest.batman.edu.tr/api/";
rehberApp.controller('HomeController', function ($scope, $mdToast, kullaniciSrvc) {
  
    $scope.arama = "";
    $scope.aramaYapildiMi = false;
    $scope.kullanicilar = [];
    $scope.GetKullaniciBilgileri = function (arama) {
        $scope.aramaYapildiMi = false;
        if (arama.length < 3) {
            $mdToast.show($mdToast.simple().position('top right').textContent("En az 3 karakter giriniz.").hideDelay(5000));
          //  alert("En Az 3 karakter giriniz");
        }
        kullaniciSrvc.GetKullaniciBilgileri(arama).then(function successCallback(response) {
            //success code
            $scope.kullanicilar = response.data;
            $scope.aramaYapildiMi = true;
        }, function errorCallback(error) {
            //error code
        });


    };


    !function (a) { "use strict"; a('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () { if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) { var e = a(this.hash); if ((e = e.length ? e : a("[name=" + this.hash.slice(1) + "]")).length) return a("html, body").animate({ scrollTop: e.offset().top - 70 }, 1e3, "easeInOutExpo"), !1 } }), a(".js-scroll-trigger").click(function () { a(".navbar-collapse").collapse("hide") }), a("body").scrollspy({ target: "#mainNav", offset: 100 }); var e = function () { a("#mainNav").offset().top > 100 ? a("#mainNav").addClass("navbar-shrink") : a("#mainNav").removeClass("navbar-shrink") }; e(), a(window).scroll(e) }(jQuery);

   


});

