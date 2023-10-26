var onEk = 'templates/';
var add = "rehbertest.batman.edu.tr";

var registrationModule = angular.module("registrationModule", ['angular.backtop','angularUtils.directives.dirPagination', 'LocalStorageModule', 'ngMessages',  'ngMaterial' , 'angular-loading-bar', 'LocalStorageModule', 'ui.router', 'ngAria', 'ngAnimate', 'ngMessages', 'ng',]).value('api', add + '/api/')
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/Giris');

       
        $stateProvider.state('Giris', {
                url: '/Giris',
                views: {


                    'orta': {
                        templateUrl: onEk + 'giris/giris.html',
                        controller: 'GirisCtrl'

                    }

                }

            }).state('Login', {
                url: '/Login/:sayfa/:token' ,
                views: {


                    'orta': {
                       // templateUrl: onEk + 'giris/giris.html',
                        controller: 'GirisCtrl'

                    }

                }

            })
        .state('Anasayfa', {
            url: '/Anasayfa',
                views: {
                    'sol': {
                        templateUrl: onEk + 'giris/sol.html',


                    },

                    'orta': {
                        templateUrl: onEk + 'anasayfa/anasayfa.html',
                        controller: 'anasayfaCtrl'

                    }


                }, data: {
                    baslik: "Anasayfa"
                }

            })

    });