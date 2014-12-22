'use strict';

/**
 * @ngdoc service
 * @name londongdpaymentsystemApp.events
 * @description
 * # events
 * Service in the londongdpaymentsystemApp.
 */

var defaultEvent = {
  id: 0,
  name: "Default Event",
  type: "training",
  price: 0,
  date: "2014-12-25",
  time: "00:00:00",
  description: "default description",
  state: 1
};

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
        promise = $http.jsonp(fullUrl).then(
          function (response) {
            return response.data;
          },
          function(errordata) {
            console.log('Error get_event, using default', errordata);
            return defaultEvent;
          }
        );
      }
      return promise;
    },
    getEventTeamLink: function(id) {
      var promise;
      if (!promise) {
        var options = { task: 'get_event_team_link', eventId: id };
        var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
        promise = $http.jsonp(fullUrl).then(
          function (response) {
            return response.data;
          },
          function(errordata) {
            console.log('Error get_event_team_link, using default', errordata);
            var defaultEventTeamLink = [
              { id_event: 0, id_team: 1, id: 1, name: "Men 1st Team" },
              { id_event: null, id_team: 2, id: 2, name: "Women 1st Team" }
            ];
            return defaultEventTeamLink;
          }
        );
      }
      return promise;
    },
    getEventMemberLink: function(id) {
      var promise;
      if (!promise) {
        var options = { task: 'get_event_member_link', eventId: id };
        var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
        promise = $http.jsonp(fullUrl).then(
          function(response) {
            return response.data;
          },
          function(errordata) {
            console.log('Error get_event_member_link', errordata);
            var defaultEventMemberLink = [
              { id_event: 0, id_member: 1, id: 1, name: "Jean-Pierre Schleuh" },
              { id_event: null, id_member: 2, id: 2, name: "Micheline Miaou" }
            ];
            return defaultEventMemberLink;
          }
        );
      }
      return promise;
    }
  };
  return eventsService;
});