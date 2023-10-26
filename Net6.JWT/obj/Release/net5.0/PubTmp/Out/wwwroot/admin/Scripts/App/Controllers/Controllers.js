'use strict';
registrationModule
    .controller('AppCtrl', function ($scope, $mdUtil, $timeout, $mdSidenav, $state, authService, $rootScope, $mdToast, kullaniciSrvc) {


     


        $rootScope.tumu;
        $rootScope.arama = "";
        $rootScope.sayfaBoyutu = 15;
        $rootScope.sayfaNo=1;
        $rootScope.getKullanicilar = function (arama, sayfaNo, sayfaBoyutu) {
            $rootScope.sayfaNo = sayfaNo;
            kullaniciSrvc.GetKullanicilarPaging(arama, sayfaNo, sayfaBoyutu).then(function (data) {
                $rootScope.tumu = data.data;
                //    $scope.kullanicilar = data.source;



            }, function () {


            });

        };


   
        //angular.element(document).ready(function () {
        //    $rootScope.appInit();
        //});

        $scope.$state = $state;
      
        $rootScope.goToDiv = function (id) {

            document.getElementById(id).scrollIntoView();
        }
        $rootScope.goToState = function (ad) {

           
            $state.go(ad);
        }


        $rootScope.menuClick = function (id) {

                $("#menu"+id).click(function (e) {
                    $("#leftside-navigation ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
                    e.stopPropagation()
                })

            }
        
   
 
    


        $rootScope.animasyon = "animated infinite pulse";

     
    $scope.logOut = function () {
        authService.logOut();
        $state.go('Giris');
    }
    $rootScope.$on("sifreYanlis", function () {
        $mdToast.show(
    $mdToast.simple()
      .textContent('Yanlış Kullanıcı Adı Veya Şifre').position("top right")
       .hideDelay(4000)
  );
        //   $state.go('Giris');
    });
 
        

 

    $scope.openMenu = function ($mdMenu, ev) {
      
        //originatorEv = ev;
        $mdMenu.open(ev);
    };

        $rootScope.mesajGoster = function (mesaj) {

            $mdToast.show(
                $mdToast.simple()
                    .textContent(mesaj).position("top right")
                    .hideDelay(4000)
            );

        }

       
     
        
       

}).controller('GirisCtrl', ['$scope', 'authService', '$state', '$rootScope', '$stateParams','kullaniciSrvc', function ($scope, authService, $state, $rootScope,kullaniciSrvc) {

    $("#layout-navbar").hide();
    $("#layout-menu").hide();

    $rootScope.girisSayfasiMi = true;


    //    GirisCtrl.$inject = ['localStorageService'];
        var token = $state.params.token;
        var sayfa = $state.params.sayfa;
        $scope.loginData = {
            userName: "",
            password: "",
            birimID: "0"
        };


       
      
    
        $scope.login = function () {

            authService.login($scope.loginData);

           

        };






       
}]).controller('anasayfaCtrl', ['$scope', '$state', '$rootScope', 'kullaniciSrvc','$mdDialog', function ($scope, $state, $rootScope, kullaniciSrvc, $mdDialog) {
    $("#layout-navbar").show();
    $("#layout-menu").show();
    $rootScope.girisSayfasiMi = false;
   //     $scope.kullanicilar = [];
        //$scope.getKullanicilar = function (arama, sayfaNo, sayfaBoyutu) {
        //    kullaniciSrvc.GetKullanicilarPaging(arama, sayfaNo, sayfaBoyutu).then(function (data) {
        //        $scope.tumu = data;
        //    //    $scope.kullanicilar = data.source;
             


        //    }, function () { });

        //};
        $rootScope.sayfaNo = 1;
        $rootScope.getKullanicilar($rootScope.arama, 1, $rootScope.sayfaBoyutu);


    $scope.rehberdenKisiSil = function (id, index) {

            var confirm = $mdDialog.confirm()
                .title("Kişiyi silmek istediğinizden emin misiniz?")
                .textContent("Bu işlem geri alınamaz!")

                .ok("EVET")
                .cancel("HAYIR");

            $mdDialog.show(confirm).then(function () {


                kullaniciSrvc.KisiSil(id).then(function (data) {

                    if (data.data == true) {
                        $rootScope.mesajGoster("Kişi silindi");
                        $rootScope.tumu.source.splice(index, 1);
                    } else {
                        $rootScope.mesajGoster("Hata oluştu lütfen tekrar deneyiniz");


                    }



                }, function () { });


            }, function () {

              //  $rootScope.mesajGoster("Hata oluştu lütfen tekrar deneyiniz");

            });




    }


    
        $scope.KisiyiAktifYap = function (id,index) {

        var confirm = $mdDialog.confirm()
            .title("kişiyi aktif yapmak istediğinizden emin misiniz?")
            .textContent("")

            .ok("EVET")
            .cancel("HAYIR");

        $mdDialog.show(confirm).then(function () {


            kullaniciSrvc.KisiyiAktifYap(id).then(function (data) {

                if (data.data == true) {
                    $rootScope.mesajGoster("İşlem Başarılı");

                    $rootScope.tumu.source[index].aktifMi=true;

                } else {
                    $rootScope.mesajGoster("Hata oluştu lütfen tekrar deneyiniz");


                }



            }, function () { });


        }, function () {

          //  $rootScope.mesajGoster("Hata oluştu lütfen tekrar deneyiniz");

        });




    }
    $scope.KisiyiPasifYap = function (id, index) {

        var confirm = $mdDialog.confirm()
            .title("kişiyi pasif yapmak istediğinizden emin misiniz?")
            .textContent("Bu işlem geri alınamaz!")

            .ok("EVET")
            .cancel("HAYIR");

        $mdDialog.show(confirm).then(function () {


            kullaniciSrvc.KisiyiPasifYap(id).then(function (data) {

                if (data.data == true) {
                    $rootScope.mesajGoster("İşlem Başarılı");
                    $rootScope.tumu.source[index].aktifMi = false;

                } else {
                    $rootScope.mesajGoster("Hata oluştu lütfen tekrar deneyiniz");


                }



            }, function () { });


        }, function () {

          //  $rootScope.mesajGoster("Hata oluştu lütfen tekrar deneyiniz");

        });




    }





    $scope.RehbereKisiEkleVeyaGuncelleDialog = function (kisi, guncellemeMi, index) {
       
      
        $mdDialog.show({
            controller: 'kisiEkleveyaGuncelleDialogCtrl', locals: { kisi: kisi, guncellemeMi: guncellemeMi, $mdDialog: $mdDialog, index: index },
            templateUrl: 'templates/dialog/rehberekisiekledialog.html',
            parent: angular.element(document.body),

            clickOutsideToClose: true,
            fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
        })
            .then(function (answer) {





            }, function () {



            });
    };


}]).controller('kisiEkleveyaGuncelleDialogCtrl', function ($scope, authService, $state, $rootScope, kullaniciSrvc, $mdDialog, guncellemeMi, kisi, index) {

    $rootScope.girisSayfasiMi = false;
    $scope.guncellemeMi = guncellemeMi;
    $scope.kisi = kisi;
    $scope.index =index;

    $scope.cancel = function () {
        $mdDialog.cancel();
    };




    $scope.RehbereKisiEkleVeyaGuncelle = function (kisiBilgileri, guncellemeMi) {
        var islem = (guncellemeMi == true) ? "güncellemek" : "eklemek";
        var confirm = $mdDialog.confirm()
            .title("Kişiyi " + islem + " istediğinizden emin misiniz?")
            .textContent("Bu işlem geri alınamaz!")

            .ok("EVET")
            .cancel("HAYIR");

        $mdDialog.show(confirm).then(function () {


            kullaniciSrvc.RehbereKisiEkleVeyaGuncelle(kisiBilgileri).then(function (data) {

                if (data.data == true) {
                    $rootScope.mesajGoster("İşlem Başarılı");
                } else {
                    $rootScope.mesajGoster("Hata oluştu lütfen tekrar deneyiniz");


                }



            }, function () { });


        }, function () {

            $rootScope.mesajGoster("Hata oluştu lütfen tekrar deneyiniz");

        });




    }

})

 

 





