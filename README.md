# stack-retrace [![Build Status](https://travis-ci.org/SponsorPay/stack-retrace.svg?branch=master)](https://travis-ci.org/SponsorPay/stack-retrace)

`stack-retrace` is a utility that will retrace stack calls according to the provided source map.

### Usage

```js
import {parseStack, retraceStack}

const stack = parseStack(
  "StatusCodeError: No such placement\n" +
    "    at new StatusCodeError (http://localhost:8080/nfp.js:8961:28)\n" +
    "    at CollinsFetch.<anonymous> (http://localhost:8080/nfp.js:8867:35)\n" +
    "    at step (http://localhost:8080/vendors~nfp.js:83709:23)\n" +
    "    at Object.next (http://localhost:8080/vendors~nfp.js:83690:53)\n" +
    "    at fulfilled (http://localhost:8080/vendors~nfp.js:83680:58)"
)


retraceStack(stack).join("\n") // Results in:

"new StatusCodeError (webpack:///state-actions/src/client/statusCodeError.ts:18:4)\n" +
"CollinsFetch.<anonymous> (webpack:///state-actions/src/client/collinsFetch.ts:63:12)\n" +
"step (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:97:0)\n" +
"Object.next (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:78:44)\n" +
"fulfilled (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:68:41)"
```
