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
      	var options = {
          option: 'com_gdpayments',
          task: 'get_events',
          tmpl: 'component',
          format: 'raw',
          callback: 'JSON_CALLBACK'
        };
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