'use strict';

/**
 * @ngdoc function
 * @name londongdpaymentsystemApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the londongdpaymentsystemApp
 */
angular.module('londongdpaymentsystemApp')
  .controller('EventsCtrl', function($scope, $rootScope, eventsService) {
    $scope.events = {
        id: 0,
        state: 1,
        created_by: 4,
        type: "training",
        team: "Women 2nd Team",
        date: "22/12/2015",
        name: "Extra training in SportHouse",
        description: "",
        price: 5
    };
    /*$scope.getEventList = function() {  		  
	  var promise = eventsService.getAllEvents();
      promise.then(
        function(events) { 
          $scope.eventList = events;
        },
        function(errordata) {
          console.log('Error', errordata);
        }
      );
    };
	$scope.getEventList();*/
  });
