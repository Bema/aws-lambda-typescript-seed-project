const expect = require('chai').expect;
const handler = require('./index').handler;

describe('Hanlder', () => {
  it('should define the handler function', () => {
      expect(handler).to.be.a('function');
  });
});
