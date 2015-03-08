/* jshint node: true, mocha: true */
var Immutable = require('immutable');
var expect = require('chai').expect;
var validation = require('..');

var DIGEST = new Array(65).join('a');

describe('Inclusions', function() {
  it('can contain "heading" and "inclusion" properties', function() {
    expect(validation.inclusion(Immutable.fromJS({
      heading: 'Indemnification',
      inclusion: DIGEST
    })))
      .to.be.true();
  });

  it('can omit "heading"', function() {
    expect(validation.inclusion(Immutable.fromJS({inclusion: DIGEST})))
      .to.be.true();
  });

  it('cannot be functions', function() {
    var f = function() {};
    f.definition = 'Merger Consideration';
    expect(validation.definition(f))
      .to.be.false();
  });
});
