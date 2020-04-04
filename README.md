

# Joo (browser detect)

[![npm version](https://img.shields.io/npm/v/joo-browser-detect.svg?style=flat-square)](https://www.npmjs.org/package/joo-browser-detect) [![Build Status](https://travis-ci.com/shayanypn/joo-browser-detect.svg?branch=master)](https://travis-ci.com/shayanypn/joo-browser-detect)[![install size](https://packagephobia.now.sh/badge?p=joo-browser-detect)](https://packagephobia.now.sh/result?p=joo-browser-detect)[![npm downloads](https://img.shields.io/npm/dm/joo-browser-detect.svg?style=flat-square)](http://npm-stat.com/charts.html?package=joo-browser-detect)

This is a package that attempts to be a tool for helping people detecting browser, check for support/valid browser and fire when a browser error happens

To see demo, example and document please check [Demo & Document](https://shayanypn.github.io/joo-browser-detect/)

## Using npm:

```bash
$ npm install joo-browser-detect
```


Using yarn:

```bash
$ yarn add joo-browser-detect
```

Using Html:

```html
<script src="node_modules/joo-browser-detect/dist/joo-browser-detect.umd.js"/>
```


## Example Usage

```js
const joo = require('joo-browser-detect');
// or
import joo from 'joo-browser-detect';

console.log(joo.get());
```

      // joo.get() 
      {
         "bot": false,
         "mobile": false,
         "name": "chrome",
         "version": "68.0.3440",
         "versionNumber": 68.0344,
         "os": "Windows 10"
      }
        
      //joo.is
      joo.is([
          'chrome  >  70.0.3440',
          ], is => {
          console.log( is ? 'Valid' : 'No Valid');
      });
    
      //joo.error
      joo.error(function(error) {
        console.log(error);
      });
  

        
      //joo.isOrError
      joo.isOrError([
          ' chrome  >  70.0.3440 ',
          ' chrome == 60.0.0000 '
        ], (is, error) => {
          console.log(is, error);
      });
    
    

## Detect Object
| name | type | description | example |
| ---- | ---- | ----------- | ------- |
| name | string | a browser name | ie, chrome, firefox |
| version | string | browser or node version | 59.2.22 |
| versionNumber | number | browser or node number casted to number | 59.222 |
| mobile | boolean | if browser is in mobile environment or not | true |
| bot| boolean | if requester is Bot or not | true |
| os | string | os type name | Windows NT 10.0 |


## DetectRules

    firefox > 50.0
    chrome > 49.00123
    ie not


## Method
| name | entry | description | output |
| ---- | ---- | ----------- | ------- |
| init | String | Initial the library with user agency string | this |
| get |  | Return current browser detect object | DetectObject |
| is| DetectRules | Browser or node version | True/False |
| error | Callback | In any error happens during on the page, this method call the callback |  |
| isOrError | DetectRules, Callback |  |  |

## LICENSE

The MIT License (MIT)

Copyright (c) 2018 shayan yazdanpanah <shayanypn@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

