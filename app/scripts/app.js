/*global $:false */
/*jshint unused:false*/

'use strict';


/**
 * @ngdoc overview
 * @name londongdpaymentsystemApp
 * @description
 * # londongdpaymentsystemApp
 *
 * Main module of the application.
 */
angular
  .module('londongdpaymentsystemApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'angularFileUpload',
   	'oitozero.ngSweetAlert',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .when('/players', {
        templateUrl: 'views/players.html',
        controller: 'PlayersCtrl'
      })
      .when('/laurie', {
        templateUrl: 'views/laurie.html',
        controller: 'LaurieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
  	$rootScope.siteUrl = 'http://londongdhandball.co.uk';
  });
