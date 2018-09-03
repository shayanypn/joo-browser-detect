

# Joo (browser detect)
This is a package that attempts to be a tool for helping people detecting browser, check for support/valid browser and fire when a browser error happens


## Example Usage

```js
const joo = require('joo');
console.log(joo.get());
```
out put will be 

    {
       "bot": false,
       "mobile": false,
       "name": "chrome",
       "version": "68.0.3440",
       "versionNumber": 68.0344,
       "os": "Windows 10"
    }

## Detect Object
| name | type | description | example |
| ---- | ---- | ----------- | ------- |
| name | string | a browser name | ie, chrome, firefox |
| version | string | browser or node version | 59.2.22 |
| versionNumber | number | browser or node number casted to number | 59.222 |
| mobile | boolean | if browser is in mobile environment or not | true |
| bot| boolean | if requester is Bot or not | true |
| os | string | os type name | Windows NT 10.0 |



## Method
| name | entry | description | output |
| ---- | ---- | ----------- | ------- |
| init | string |  |  |
| get |  | return current browser detect object |  |
| version | string | browser or node version |  |
| versionNumber |  |  |  |
| mobile |  |  |  |
| bot|  |  |  |
| os |  |  |  |

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


