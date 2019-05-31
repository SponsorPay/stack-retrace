import { parseStack, retraceStack } from "../src"
import { fsProvider } from "../src/sourceMapProvider/fsProvider"

const stack = parseStack(
  "StatusCodeError: No such placement\n" +
    "    at new StatusCodeError (http://localhost:8080/nfp.js:8961:28)\n" +
    "    at CollinsFetch.<anonymous> (http://localhost:8080/nfp.js:8867:35)\n" +
    "    at step (http://localhost:8080/vendors~nfp.js:83709:23)\n" +
    "    at Object.next (http://localhost:8080/vendors~nfp.js:83690:53)\n" +
    "    at fulfilled (http://localhost:8080/vendors~nfp.js:83680:58)"
)

const sourceMapProvider = fsProvider({
  "http://localhost:8080/nfp.js": __dirname + "/support/nfp.js.map",
  "http://localhost:8080/vendors~nfp.js": __dirname + "/support/vendors~nfp.js.map"
})

test("returns retraced path of first stack frame", async function() {
  const retracedStack = await retraceStack(stack, sourceMapProvider)

  expect(retracedStack[0].toString()).toEqual(
    "new StatusCodeError (webpack:///state-actions/src/client/statusCodeError.ts:18:4)"
  )
  expect(retracedStack[1].toString()).toEqual(
    "CollinsFetch.<anonymous> (webpack:///state-actions/src/client/collinsFetch.ts:63:12)"
  )
  expect(retracedStack[2].toString()).toEqual(
    "step (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:97:0)"
  )
  expect(retracedStack[3].toString()).toEqual(
    "Object.next (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:78:44)"
  )
  expect(retracedStack[4].toString()).toEqual(
    "fulfilled (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:68:41)"
  )
})
