/* global describe, it, before */
import chai from 'chai';
import Joo from '../dist/joo.js';

chai.expect();
const expect = chai.expect;

function itMethodGet(title, agentString, expectedResult) {
  it( title , () => {
    expect(Joo.init(agentString).get()).to.deep.equal(expectedResult);
  });
}


describe('Check get method in Chrome', () => {
  itMethodGet('Chrome/50.0.2661.102',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
    { bot: false, mobile: false, name: 'chrome', version: '50.0.2661',versionNumber: 50.02661 , os: 'Linux' }
  );

});
