'use strict';

describe('Service: players', function () {

  // load the service's module
  beforeEach(module('londongdpaymentsystemApp'));

  // instantiate service
  var players;
  beforeEach(inject(function (_players_) {
    players = _players_;
  }));

  it('should do something', function () {
    expect(!!players).toBe(true);
  });

});
