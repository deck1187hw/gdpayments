'use strict';

/**
 * @ngdoc function
 * @name londongdpaymentsystemApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the londongdpaymentsystemApp
 */

angular.module('londongdpaymentsystemApp')
  .controller('EventsCtrl',
  function ($scope, $http, eventsService) {
    var promise = eventsService.getAllEvents();
    promise.then(
      function(response) { 
        $scope.eventList = response;
      },
      function(errordata) {
        console.log('Error', errordata);
      }
    );
  }
);
