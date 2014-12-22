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
      if (!promise) {
        var options = { task: 'get_teams' };
        var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
        promise = $http.jsonp(fullUrl).then(
          function (response) {
            return response.data;
          },
          function(errordata) {
          console.log('Error get_teams, using default', errordata);
          var defaultTeams = [
            { id: 1, name: "Men 1st Team" },
            { id: 2, name: "Women 1st Team" }
          ];
          return defaultTeams;
        }
        );
      }
      return promise;
    }
  };
  return teamsService;
});


