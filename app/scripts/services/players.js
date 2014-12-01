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
        promise = $http.jsonp($rootScope.siteUrl+'/index.php?option=com_gdpayments&task=get_players&tmpl=component&format=raw&callback=JSON_CALLBACK').then(function (response) {
        
          return response.data;
        });
      }
      
      return promise;
    },
    getMembershipList: function() {
		var promise;
      if ( !promise ) {
        promise = $http.jsonp($rootScope.siteUrl+'/index.php?option=com_gdpayments&task=get_memberships&tmpl=component&format=raw&callback=JSON_CALLBACK').then(function (response) {

          return response.data;
        });
      }
      
      return promise;
    }
  };
  return playersService;
});


