'use strict';

/**
 * @ngdoc function
 * @name londongdpaymentsystemApp.controller:EventDetailsCtrl
 * @description
 * # EventDetailsCtrl
 * Controller of the londongdpaymentsystemApp
 */

angular.module('londongdpaymentsystemApp')
  .controller('EventDetailsCtrl',
  function ($scope, $http, $rootScope, $routeParams, eventsService, teamsService) {

    var getEvent = function() {
      var promise = eventsService.getEvent($routeParams.eventId);
      promise.then(
        function(resp) { 
          console.log('getEvent', resp);
          $scope.event = resp;
        },
        function(errordata) {
          console.log('Error', errordata);
        }
      );
    };

    var init = function() {
      $scope.eventTypeList = ["training", "match", "other event"];
      $scope.today = new Date().toISOString().split("T")[0];
      getEvent();
    };
    init();
  }
);
