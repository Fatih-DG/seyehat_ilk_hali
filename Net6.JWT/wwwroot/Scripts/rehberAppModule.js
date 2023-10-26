var rehberApp = angular.module('rehberApp', ['ui.router', 'ngMaterial', 'ngMessages', 'angular.backtop']);


rehberApp.config(function ($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise('/Anasayfa');

     $stateProvider
         .state('Anasayfa', {
             url: '/Anasayfa',
             views: {
                

                 'orta': {
                     templateUrl:  'pages/anasayfa.html',
                     controller: 'HomeController'

                 }


             }, data: {
                 baslik: "anasayfa"
             }
             
         }).state('Blog', {
             url: '/Blog',
             views: {


                 'orta': {
                     templateUrl: 'pages/blog.html',
                     controller: 'BlogController'

                 }


             }, data: {
                 baslik: "Blog"
             }

         })


 });