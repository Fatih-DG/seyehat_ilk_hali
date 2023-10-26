
var add = "https://rehbertest.batman.edu.tr";

registrationModule.factory('authInterceptorService', ['$q', 'localStorageService', '$state', '$rootScope', function ($q, localStorageService, $state, $rootScope) {

    $rootScope.mesajGoster = function (mesaj) {


      //  toastr.info(mesaj);


    };


    $rootScope.$state = $state;
        var _logOut = function () {

            localStorageService.remove('authorizationData');



        };
        var authInterceptorServiceFactory = {};

        var _request = function (config) {

            config.headers = config.headers || {};

            var authData = localStorageService.get('authorizationData');
            var itemStr = window.localStorage.getItem("tokenData")
            var item;
            if (itemStr != null) {
                item = JSON.parse(itemStr);

                var now = new Date();
                var simdi = now.getTime();
                // compare the expiry time of the item with the current time
                if (simdi > item.expiry) {
                    // If the item is expired, delete the item from storage
                    // and return null
                    window.localStorage.removeItem("tokenData")

                } else {
                    var veri = { token: item.token };
                    localStorageService.set('authorizationData', veri);
                    authData = localStorageService.get('authorizationData');
                }
            }

            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }

        var _responseError = function (rejection) {
            if (rejection.status === 401) {
                $rootScope.$broadcast("sifreYanlis");
                _logOut();
                $state.go('Giris');
            }
            return $q.reject(rejection);
        }

        authInterceptorServiceFactory.request = _request;
        authInterceptorServiceFactory.responseError = _responseError;

        return authInterceptorServiceFactory;
}]).factory('authService', ['$http', '$q', 'localStorageService', 'api', '$rootScope', '$state','$mdToast', function ($http, $q, localStorageService, api, $rootScope, $state, $mdToast) {

        var serviceBase = add + "/";
        var authServiceFactory = {};

        var _authentication = {
            isAuth: false,
            userName: ""
        };

    
        var _login = function (loginData) {

           // var data = "grant_type=password&kullaniciAdi=" + loginData.userName + "&sifre=" + loginData.password;
            var data = { kullaniciAdi: loginData.userName, sifre: loginData.password }
            var deferred = $q.defer();

            $http.post(serviceBase + 'api/Home/login', data).then(function (response) {

                var veri = { token: response.data.access_token, userName: loginData.userName};
                localStorageService.set('authorizationData', veri);
             
                var authData = localStorageService.get('authorizationData');
                _authentication.isAuth = true;
                _authentication.userName = loginData.userName;
                window.localStorage.setItem("kullaniciAdi", loginData.userName);

                $state.go("Anasayfa");


                return "Başarılı";

            }, function (err) {
               // $rootScope.mesajGoster("Kullanıcı adı veya şifre hatalı");

                $mdToast.show(
                    $mdToast.simple()
                        .textContent('Kullanıcı adı veya şifre hatalı').position("top right")
                        .hideDelay(4000)
                );

                return "Kullanıcı adı veya şifre hatalı";
              
                //if (err == null) {
                //    $rootScope.mesajGoster("KULLANICIADIVEYASIFREHATALI");
                //} else
                //    $rootScope.mesajGoster(err.error_description);
              
            });

         

        };

        var _logOut = function () {

            localStorageService.remove('authorizationData');

            _authentication.isAuth = false;
            _authentication.userName = "";

        };

        var _fillAuthData = function () {

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                _authentication.isAuth = true;
                _authentication.userName = authData.userName;
            }

        }

       
        authServiceFactory.login = _login;
        authServiceFactory.logOut = _logOut;
        authServiceFactory.fillAuthData = _fillAuthData;
        authServiceFactory.authentication = _authentication;



        return authServiceFactory;
    }]).config(function ($httpProvider) {

        $httpProvider.interceptors.push('authInterceptorService');
    }).service('localStorage', function ($window) {
        return {
            'clear': function () {
                $window.localStorage.clear();

            },
            'setVeri': function (veriAdi, veri) {
                $window.localStorage.setItem(veriAdi, veri);

            }, 'setVeriIfEmpty': function (veriAdi, veri) {
                var veri2 = $window.localStorage.getItem(veriAdi) || -1;
                if (veri2 == -1) {

                    $window.localStorage.setItem(veriAdi, veri);
                }


            },
            'changeVeri': function (veriAdi, veri) {
                var veri2 = $window.localStorage.getItem(veriAdi) || -1;
                if (veri2 == -1)
                    $window.localStorage.setItem(veriAdi, veri);
                else {

                    this.removeItem(veriAdi);
                    $window.localStorage.setItem(veriAdi, veri);
                }

            },
            'getVeri': function (veriAdi) {

                return $window.localStorage.getItem(veriAdi);

            }, 'setJson': function (veriAdi, veri) {
                $window.localStorage.setItem(veriAdi, JSON.stringify(veri));

            }, 'setJsonIfEmpty': function (veriAdi, veri) {
                var veri2 = $window.localStorage.getItem(veriAdi) || -1;
                if (veri2 == -1) {

                    this.removeItem(veriAdi);
                    $window.localStorage.setItem(veriAdi, JSON.stringify(veri));
                }


            }

            , 'getJson': function (veriAdi) {

                return JSON.parse($window.localStorage.getItem(veriAdi));

            }, 'removeItem': function (veriAdi) {
                $window.localStorage.removeItem(veriAdi);
            }, 'changeJson': function (veriAdi, yeniVeri) {
                var veri = $window.localStorage.getItem(veriAdi) || -1;
                if (veri != -1) {
                    this.removeItem(veriAdi);
                    this.setJson(veriAdi, yeniVeri);

                } else {

                    this.setJson(veriAdi, yeniVeri);
                }
            }, 'addToJson': function (veriAdi, eklenecekVeri) {
                var veri = JSON.parse($window.localStorage.getItem(veriAdi)) || -1;
                if (veri != -1) {
                    $window.localStorage.removeItem(veriAdi);
                    veri.push(eklenecekVeri);
                    $window.localStorage.setItem(veriAdi, JSON.stringify(veri));

                } else {
                    veri = [];
                    veri.push(eklenecekVeri);
                    $window.localStorage.setItem(veriAdi, JSON.stringify(veri));

                }
            }


        };
    }).filter('substr', function () {
        return function (input, kacAdet) {
            if (input == undefined)
                return input;

            return input.substring(0, kacAdet);
        };
    })