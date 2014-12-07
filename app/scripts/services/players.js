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
        var options = {
          option: 'com_gdpayments',
          task: 'get_players',
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
    },

    getMembershipList: function() {
		var promise;
      if ( !promise ) {
        var options = {
          option: 'com_gdpayments',
          task: 'get_memberships',
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
  return playersService;
});


