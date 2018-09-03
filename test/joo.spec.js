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
function itMethodIs(title, agentString, condition) {
  it( title , () => {
    Joo.init(agentString).is(condition, function(result){
      expect(result).to.to.equal(true);
    })
  });
}


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

describe('Check get method', () => {
  itMethodGet(
    'Mozilla',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
    { bot: false, mobile: false, name: 'chrome', version: '50.0.2661', versionNumber: 50.02661, os: 'Linux' }
  );
});




describe('Check is method', () => {
  itMethodIs(
    'Mozilla',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
    ['firefox > 48']
  );
});

// describe('Check is error', () => {
//   it( 'if error happend' , () => {
//     Joo.error(function(){
//       expect(true).to.to.equal(true);
//     })
//     try {
//       throw new Error('Required');
//     }catch (e){
      
//     }
//   });
// });

