'use stric';

/**
 * create a filter array function
 * @param  {Array}      Array which you want to make filter on it
 * @param  {Function}   Filter function
 * @return {Array}     Filtered Array
 */
function filter(ary, fun) {
  var len = ary.length >>> 0,
  res = [];

  if (typeof fun !== 'function') {
    throw new TypeError();
  }

  let thisp = fun;

  for (let i = 0; i < len; i++) {
    if (i in ary) {
      let val = ary[i]; // in case fun mutates ary

      if (fun.call(thisp, val, i, ary)) {
        res.push(val);
      }
    }
  }
  return res;
}

function operator(firstParam, secondParam, operation) {
  let result;

  switch (operation) {
    case '&&': result = (firstParam && secondParam); break;
    case '||': result = (firstParam || secondParam); break;
    case '==': result = (firstParam === secondParam); break;
    case '===': result = (firstParam === secondParam); break;
    case '!=': result = (firstParam !== secondParam); break;
    case '>': result = (firstParam > secondParam); break;
    case '>=': result = (firstParam >= secondParam); break;
    case '<': result = (firstParam < secondParam); break;
    case '<=': result = (firstParam <= secondParam); break;
    default: result = firstParam ; break;
  }
  return result;
}

function buildRules(ruleTuples) {
  return ruleTuples.map(tuple => {
    return {
      name: tuple[0],
      rule: tuple[1]
    };
  });
}

function versionNumber(version) {
  const num = [];

  num.push(version[0]);
  num.push(version.slice(1, version.length).join(''));
  return parseFloat(num.join('.'));
}

function ruleMapper(rule) {
  const ruleAry = rule.trim().replace(/\s+/g, ' ').split(' ');

  return {
    name: ruleAry[0],
    operation: ruleAry[1],
    version: versionNumber(ruleAry[2].split('.'))
  };
}

module.exports = {
  filter: filter,
  versionNumber: versionNumber,
  buildRules: buildRules,
  ruleMapper: ruleMapper,
  operator: operator
};
