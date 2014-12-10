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


    $scope.event = {};
    $scope.eventTypeList = ["training", "match", "other event"];
    $scope.today = new Date().toISOString().split("T")[0];


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
    getEventList();


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
    getTeamList();


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
    getSelectedTeams();


    $scope.eventForm = function()
    {
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

      console.log('Message sent', JSON.stringify(messageObject));

      $http(messageObject).success(function(data) {
        if (data === 'exists') {
           sweetAlert('Oops...', 'This event already exists, please check the list or contact media@londongdhandball.co.uk', 'error');
         } else {
          console.log('Message received', data);
           $scope.event = {};
           getSelectedTeams();
           sweetAlert('OK', 'This event has been registered, you can select it on the list', 'success');
           getEventList();
         }
      });
    };
  }
);
