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
        promise = $http.jsonp($rootScope.siteUrl+'/index.php?option=com_gdpayments&task=get_teams&tmpl=component&format=raw&callback=JSON_CALLBACK').then(function (response) {
          return response.data;
        });
      }
      
      return promise;
    }
  };
  return teamsService;
});


