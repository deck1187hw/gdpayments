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
          $scope.event = resp;
        },
        function(errordata) {
          console.log('Error', errordata);
        }
      );
    };
    
    var getAllTeams = function() {
      var promise = teamsService.getAllTeams();
      promise.then(
        function(resp) { 
          $scope.teams = resp;
        },
        function(errordata) {
          console.log('Error', errordata);
        }
      );
    };

    var getEventTeamLink = function() {
      var promise = eventsService.getEventTeamLink($routeParams.eventId);
      promise.then(
        function(resp) {
          $scope.selectedTeams = [];
          for (var i = 0; i < resp.length; ++i) {
            var team = resp[i];
            $scope.selectedTeams[i] = {
              id: team.id,
              name: team.name,
              selected: team.id_event == $routeParams.eventId
            };
          }
        },
        function(errorData) {
          console.log('Error', errorData);
        }
      );
    }

    var init = function() {
      $scope.eventTypeList = ["training", "match", "other event"];
      $scope.today = new Date().toISOString().split("T")[0];
      getEvent();
      getAllTeams();
      getEventTeamLink();
    };
    init();
  }
);
