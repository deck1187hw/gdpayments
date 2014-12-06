'use strict';

describe('Controller: LaurieCtrl', function () {

  // load the controller's module
  beforeEach(module('londongdpaymentsystemApp'));

  var LaurieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LaurieCtrl = $controller('LaurieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
