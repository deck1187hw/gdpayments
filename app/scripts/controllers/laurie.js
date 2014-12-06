'use strict';

/**
 * @ngdoc function
 * @name londongdpaymentsystemApp.controller:LaurieCtrl
 * @description
 * # LaurieCtrl
 * Controller of the londongdpaymentsystemApp
 */
angular.module('londongdpaymentsystemApp')
  .controller('LaurieCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.callMum = function()
    {
		sweetAlert("Hi Mum");    
    };
    
    
  });
