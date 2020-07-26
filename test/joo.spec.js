/* global describe, it, before */
import chai from 'chai';
import joo from '../dist/joo.min.js';

chai.expect();
const expect = chai.expect;


describe('Given an instance of joo library', () => {
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(joo.name).to.be.equal('joo');
    });

    it('should return the version', () => {
      expect(joo.version).to.be.equal('0.0.1');
    });
  });
});
