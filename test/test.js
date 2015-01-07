var should = require('should');
var tw = require('..');

describe('Module functionality', function() {
  it('Should export a function', function() {
    tw.should.be.instanceOf(Function);
  });
  it('Should return the expected when using with twig.js', function() {
    var T = require('twig');
    var t = T.twig;
    tw(T);
    var template = t({
      data: "<div>{{ data|without('unwanted') }}</div>",
    });
    var rendered = template.render({
      data: {
        wanted: 'this is wanted',
        unwanted: 'this is not wanted'
      }
    });
    rendered.should.equal('<div>this is wanted</div>');
  });
});
