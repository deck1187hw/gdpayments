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
    'ngTouch',
    'ngDraggable'
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
      .when('/events/:eventId', {
        templateUrl: 'views/event-details.html',
        controller: 'EventDetailsCtrl'
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
  })
  /*.directive('draggable', function() {
    return function(scope, elt) {
      // this gives us the native JS object
      var element = elt[0];
      element.draggable = true;
      element.addEventListener(
        'dragstart',
        function(e) {
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('Text', this.id);
          this.classList.add('drag');
          return false;
        },
        false
      );
      element.addEventListener(
        'dragend',
        function(e) {
          this.classList.remove('drag');
          return false;
        },
        false
      );
    }
  })
  .directive('droppable', function() {
    return {
      scope: {},
      link: function(scope, elt) {
        // again we need the native object
        var element = elt[0];
        element.addEventListener(
          'dragover',
          function(e) {
            e.dataTransfer.dropEffect = 'move';
            // allows us to drop
            if (e.preventDefault) e.preventDefault();
            this.classList.add('over');
            return false;
          },
          false
        );
        element.addEventListener(
          'dragenter',
          function(e) {
            this.classList.add('over');
            return false;
          },
          false
        );
        element.addEventListener(
          'dragleave',
          function(e) {
            this.classList.remove('over');
            return false;
          },
          false
        );
        element.addEventListener(
          'drop',
          function(e) {
            // Stops some browsers from redirecting.
            if (e.stopPropagation) e.stopPropagation();
            this.classList.remove('over');
            var item = document.getElementById(e.dataTransfer.getData('Text'));
            this.appendChild(item);
            return false;
          },
          false
        );
      }
    }
  })*/;

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
