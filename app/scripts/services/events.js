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
        });
      }
      return promise;
    }
  };
  return eventsService;
});