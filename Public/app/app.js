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
// Individual games
  .state('audioShield', {
    url:'/audioShield',
    templateUrl:'./app/routes/indGames/as.html',
    controller:'indCtrl',
  })
  .state('theLab', {
    url:'/theLab',
    templateUrl:'./app/routes/indGames/tl.html',
    controller:'indCtrl',
  })
  .state('brookhaven', {
    url:'/brookhaven',
    templateUrl:'./app/routes/indGames/bh.html',
    controller:'indCtrl',
  })
  .state('spacePirate', {
    url:'/spacePirate',
    templateUrl:'./app/routes/indGames/sp.html',
    controller:'indCtrl',
  })


  $urlRouterProvider.otherwise('/home');
});
