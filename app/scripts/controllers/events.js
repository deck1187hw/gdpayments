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
  function ($scope, $http, eventsService, teamsService) {


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
    }
    getTeamList();


    $scope.eventForm = function()
    {
      console.log($scope.user);
      console.log("TODO Laurie eventForm");
      /*var options = {
        option: "com_gdpayments",
        task: "create_event",
        tmpl: "component",
        format: "raw"
      }
      $http({
          method: 'POST',
          url: getUrlWithOptions($rootScope.siteUrl, options),
          data: $scope.user,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: function(obj) {
              var str = [];
              for(var p in obj){
              str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));    
              }             
              return str.join('&');
          },
          
       }).success(function(data) {
         if (data === 'exists') {
           sweetAlert('Oops...', 'This event already exists, please check the list', 'error');
           
         } else {
           $scope.user = {};
           sweetAlert('OK', 'This event has been registered, you can select it on the list', 'success');
           $scope.getEventList();
         }
      });*/
    };
  }
);
