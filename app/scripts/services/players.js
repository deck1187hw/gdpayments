'use strict';

/**
 * @ngdoc service
 * @name londongdpaymentsystemApp.players
 * @description
 * # players
 * Service in the londongdpaymentsystemApp.
 */




angular.module('londongdpaymentsystemApp').factory('playersService', function($http, $rootScope) {
  
  var playersService = {
    getAllPlayers: function() {
	  var promise;
      if ( !promise ) {
        var options = { task: 'get_players' };
        var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
        promise = $http.jsonp(fullUrl).then(function (response) {
          return response.data;
        });
      }
      return promise;
    },

    getMembershipList: function() {
		var promise;
      if ( !promise ) {
        var options = { task: 'get_memberships' };
        var fullUrl = getUrlWithOptions($rootScope.siteUrl, options);
        promise = $http.jsonp(fullUrl).then(function (response) {
          return response.data;
        });
      }
      return promise;
    }
  };
  return playersService;
});


