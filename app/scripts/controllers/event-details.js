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

    var addMemberToEvent = function(data, event) {
      if (data.isSelected) {
        return;
      }
      data = { eventId: $routeParams.eventId, playerId: data.playerId };

      var options = { task: "add_player_to_event" };
      var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
      var header = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      var messageObject = {
        method: 'POST',
        url: fullUrl,
        data: data,
        headers: header,
        transformRequest: function(objects) {
          var str = [];
          for (var obj in objects) {
            str.push(encodeURIComponent(obj) + '=' + encodeURIComponent(objects[obj]));
          }         
          return str.join('&');
        }
      };

      console.log(messageObject);

      $http(messageObject)
      .success(function(data) {
        if (data.indexOf('exists') > -1) {
          console.log("Player with ID" + data.playerId + " already associated with event of ID " + data.eventId);
        } else {
          console.log("Player with ID" + data.playerId + " successfully associated with event of ID " + data.eventId);
          init();
        }
      })
      .error(function(data) {
        console.log("failure player id");
      });
    };

    var removeMemberFromEvent = function(data, event) {
      if (!data.isSelected) {
        return;
      }
      data = { eventId: $routeParams.eventId, playerId: data.playerId };

      var options = { task: "remove_player_from_event" };
      var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
      var header = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      var messageObject = {
        method: 'POST',
        url: fullUrl,
        data: data,
        headers: header,
        transformRequest: function(objects) {
          var str = [];
          for (var obj in objects) {
            str.push(encodeURIComponent(obj) + '=' + encodeURIComponent(objects[obj]));
          }         
          return str.join('&');
        }
      };

      console.log(messageObject);

      $http(messageObject)
      .success(function(data) {
        if (data.indexOf('inexistant') > -1) {
          console.log("Player with ID" + data.playerId + " not associated with event of ID " + data.eventId);
        } else {
          console.log("Player with ID" + data.playerId + " successfully unassociated with event of ID " + data.eventId);
          init();
        }
      })
      .error(function(data) {
        console.log("failure player id");
      });
    };

    var init = function() {
      $scope.eventTypeList = ["training", "match", "other event"];
      $scope.today = new Date().toISOString().split("T")[0];
      $scope.addMemberToEvent = addMemberToEvent;
      $scope.removeMemberFromEvent = removeMemberFromEvent;
      getEvent();
      getAllTeams();
      getEventTeamLink();
      getEventMemberLink();
    };

    init();
  }
);
