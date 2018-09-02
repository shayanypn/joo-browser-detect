import detect from './detect-browser.js';
import { operator, ruleMapper } from './utilities.js';

function JOO() {
	let browserInfo = detect();

	return {

		name: 'joo',

		version: '0.0.1',

		init: function (userAgentString) {

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

				if (
					condition.name.trim().toLowerCase() === browserInfo.name.trim().toLowerCase() &&
					!operator(browserInfo.version, condition.version, condition.operation.trim())
					) {
					valid = false;
				}
			});

			if (typeof callback === 'function') {
				callback(valid);
			}

			return valid;
		},

		error: function (callback) {
			window.onerror = function (msg, url, lineNo, columnNo, error) {
				const errorInfo = {
					Message: msg,
					URL: url,
					Line: lineNo,
					Column: columnNo,
					Errorobject: JSON.stringify(error),
					Browser: browserInfo
				};

				if (typeof callback === 'function') {
					callback(errorInfo);
				}

				return false;
			};
		},

		isOrError: function (rules, callback) {
			const isBrowser = this.is(rules, callback);

			this.error(error => {
				if (typeof callback === 'function') {
					callback(isBrowser, error);
				}
			});
		}
	};
}

const myWindow = (typeof window !== 'undefined') ? window : {};

myWindow.joo = new JOO();
module.exports = myWindow.joo;
module.exports.default = myWindow.joo;
