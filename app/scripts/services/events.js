'use strict';

/**
 * @ngdoc service
 * @name londongdpaymentsystemApp.events
 * @description
 * # events
 * Service in the londongdpaymentsystemApp.
 */

angular.module('londongdpaymentsystemApp').factory('eventsService', function($http, $rootScope) {
  var eventsService = {

  	getAllEvents: function () {
      var promise;
      if (!promise) {
      	var options = { task: 'get_events' };
        var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
        promise = $http.jsonp(fullUrl).then(function (response) {
          return response.data;
        },
        function(errordata) {
          console.log('Error get_events, using default', errordata);
          var defaultEvent = {
            name: "Default Event",
            type: "training",
            price: 0,
            date: "12-25-2014 00:00:00",
            description: "default description",
            state: 1
          };
          return [defaultEvent];
        });
      }
      return promise;
    },
    getEvent: function (id) {
      var promise;
      if (!promise) {
        var options = { task: 'get_event', eventId: id };
        var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
        promise = $http.jsonp(fullUrl).then(function (response) {
          return response.data;
        });
      }
      return promise;
    },
    getEventTeamLink: function(id) {
      var promise;
      if (!promise) {
        var options = { task: 'get_event_team_link', eventId: id };
        var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
        promise = $http.jsonp(fullUrl).then(function (response) {
          return response.data;
        },
        function(errordata) {
          console.log('Error get_event_team_link', errordata);
        });
      }
      return promise;
    }
  };
  return eventsService;
});