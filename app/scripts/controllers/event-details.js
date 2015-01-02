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
    };

    var getEventMemberLink = function() {
      var promise = eventsService.getEventMemberLink($routeParams.eventId);
      promise.then(
        function(resp) {
          $scope.members = resp;
        },
        function(errorData) {
          console.log('Error', errorData);
        }
      );
    };

    /*var drag_and_drop_definitions = function() {
      $scope.drag = function(event) {
        event.dataTransfer.setData("text", event.target.id);
      };
      $scope.allow_drop = function(event) {
        event.preventDefault();
      };
      $scope.drop = function(event) {
        event.preventDefault();
        var data = event.dataTransfer.getData("text");
        var element = event.target;
        while (element.tagName != "TABLE" && element.parentNode) {
          element = element.parentNode;
        }
        if (element.tagName != "TABLE") {
          element = element.getElementsByTagName("table")[0];
        }
        element.appendChild(document.getElementById(data));
      };
    };*/

    var init = function() {
      $scope.eventTypeList = ["training", "match", "other event"];
      $scope.today = new Date().toISOString().split("T")[0];
      getEvent();
      getAllTeams();
      getEventTeamLink();
      getEventMemberLink();
      //drag_and_drop_definitions();
      $scope.onDragComplete = function(data, evt){
       console.log("drag success, data:", data);
       console.log("drag success, evt:", evt);
      };
      $scope.onDropComplete = function(data, evt){
        console.log("drop success, data:", data);
        console.log("drop success, evt:", evt);
      };
    };
    init();
  }
);
