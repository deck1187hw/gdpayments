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
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
  	$rootScope.siteUrl = 'http://londongdhandball.co.uk';
  })
  .filter('stringToTimestamp', function() {
    return function(dateSTR) {
        dateSTR = dateSTR.replace(/-/g, "/"); // Replaces hyphens with slashes
        return Date.parse(dateSTR + " -0000"); // No TZ subtraction on this sample
    }
  });

function getUrlWithOptions(siteUrl, options) {
  var fullUrl = siteUrl + '/index.php?';
  if (options.option === undefined) {
    options.option = "com_gdpayments";
  }
  if (options.tmpl === undefined) {
    options.tmpl = "component";
  }
  if (options.format === undefined) {
    options.format = "raw";
  }
  if (options.callback === undefined) {
    options.callback = 'JSON_CALLBACK';
  }
  for (var option in options) {
    fullUrl += option + '=' + options[option] + '&';
  }
  return fullUrl;
}
