angular.module('valk', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: './app/routes/landing/landing.html',
    controller: 'mainCtrl',
  })
  .state('calender', {
    url:'/calender',
    templateUrl:'./app/routes/calender/calender.html',
    controller:'calCtrl',
  })
  .state('games', {
    url:'/games',
    templateUrl:'./app/routes/games/games.html',
    controller:'gameCtrl',
  })

  $urlRouterProvider.otherwise('/home');
});
