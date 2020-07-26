/* global describe, it, before */
import chai from 'chai';
import joo from '../app/joo.js';

chai.expect();
const expect = chai.expect;

describe('Check is method', () => {
  it('is chrome > 50.0.2661.102' , () => {
  	joo.init('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36')
  	.is([
	      'chrome  >  50',
	      ], is => {
	      	expect(is).to.be.false;
	  });
  });
});

