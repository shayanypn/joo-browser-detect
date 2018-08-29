const test = require('tape');
const detect = require('../dist/joo.js');

function assertAgentString(t, agentString, expectedResult) {
  t.deepEqual(joo.init(agentString).get(), expectedResult);
}

test('detects Chrome', function(t) {
  assertAgentString(t,
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
    { name: 'chrome', version: '50.0.2661', os: 'Linux' }
  );

  assertAgentString(t,
    'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36',
    { name: 'chrome', version: '41.0.2228', os: 'Windows 7' }
  );

  t.end();
});
