/* global describe, it, before */
import chai from 'chai';
import Joo from '../dist/joo.js';

chai.expect();
const expect = chai.expect;


describe('Given an instance of joo library', () => {
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(Joo.name).to.be.equal('joo');
    });

    it('should return the version', () => {
      expect(Joo.version).to.be.equal('0.0.1');
    });
  });
});
