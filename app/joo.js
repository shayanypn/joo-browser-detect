import { detect } from './detect-browser.js';
import { operator, ruleMapper, versionNumber } from './utilities.js';

function JOO() {
	let browserInfo = detect();

	return {

		name: 'joo',

		version: '0.0.1',

		init: function(userAgentString){

			if (typeof userAgentString === 'string') {
				browserInfo = detect(userAgentString);
			}

			return this;
		},

		get: function () {
			return browserInfo;
		},

		is: function (rules, callback) {
			let valid = true;

			rules.forEach(rule => {
				const condition = ruleMapper(rule);

				console.log('condition', condition);
				if (
					condition.name === browserInfo.name &&
					!operator(browserInfo.version, condition.version, condition.operation)
					) {
					valid = false;
				}
				console.log(condition);
			});

			if (typeof callback === 'function') {
				callback(valid);
			}
		},

		error: function (callback) {
			const self = this;
			window.onerror = function (msg, url, lineNo, columnNo, error) {
				const errorInfo = {
					Message: msg,
					URL: url,
					Line: lineNo,
					Column:  columnNo,
					Errorobject: JSON.stringify(error),
					Browser: self.get()
				};

				if ( typeof callback === 'function') {
					callback(errorInfo);
				}

				return false;
			};
		},

		isOrError: function(rules, callback){
			this.is(rules, callback);
			this.error(callback);
		}
	};
}


const myWindow = (typeof window !== 'undefined') ? window : {};
myWindow.joo = new JOO();
module.exports = myWindow.joo;
module.exports.default = myWindow.joo;
