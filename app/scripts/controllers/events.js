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
  function ($scope, $http, $rootScope, eventsService, teamsService) {

    var getEventList = function() {
      var promise = eventsService.getAllEvents();
      promise.then(
        function(response) { 
          $scope.eventList = response;
        },
        function(errordata) {
          console.log('Error', errordata);
        }
      );
    };


    var getTeamList = function() {
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


    var getSelectedTeams = function() {
      var promise = teamsService.getAllTeams();
      promise.then(
        function(resp) {
          $scope.selectedTeams = [];
          for (var i = 0; i < resp.length; ++i) {
            var team = resp[i];
            $scope.selectedTeams[i] = { id: team.id, name: team.name, selected: false }
          }
        },
        function(errordata) {
          console.log('Error', errordata);
        }
      );
    }


    var init = function() {
      $scope.event = { created_by: 0 };// TODO Laurie: get connected user id $scope.user.id };
      $scope.eventTypeList = ["training", "match", "other event"];
      $scope.today = new Date().toISOString().split("T")[0];
      getEventList();
      getTeamList();
      getSelectedTeams();
    };
    init();


    $scope.eventForm = function(constData)
    {
      for (var key in constData) {
        $scope.event[key] = constData[key];
      }
      console.log('data transmitted', $scope.event);
      $scope.event.selectedTeams = $scope.selectedTeams;

      var options = { task: "create_event" };
      var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);

      var header = {
        'Content-Type': 'application/x-www-form-urlencoded'
      };

      var messageObject = {
        method: 'POST',
        url: fullUrl,
        data: $scope.event,
        headers: header,
        transformRequest: function(objects) {
          var str = [];
          for (var obj in objects) {
            str.push(encodeURIComponent(obj) + '=' + encodeURIComponent(objects[obj]));    
          }         
          return str.join('&');
        }
      };

      $http(messageObject).success(function(data) {
        if (data === 'exists') {
           sweetAlert('Oops...', 'This event already exists, please check the list or contact media@londongdhandball.co.uk', 'error');
         } else {
           sweetAlert('OK', 'This event has been registered, you can select it on the list', 'success');
           init();
         }
      });
    };
  }
);
