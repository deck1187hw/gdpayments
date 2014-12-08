'use strict';

/**
 * @ngdoc service
 * @name londongdpaymentsystemApp.teamsService
 * @description
 * # teamsService
 * Service in the londongdpaymentsystemApp.
 */


angular.module('londongdpaymentsystemApp').factory('teamsService', function($http, $rootScope) {

  var teamsService = {
    getAllTeams: function() {
		var promise;
      if ( !promise ) {
        var options = {
          option: 'com_gdpayments',
          task: 'get_teams',
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
  return teamsService;
});


