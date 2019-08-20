import { ErrorStacks } from "./fixtures/errorStacks"
import { ErrorWithStack } from "../support/errorWithStack"
import { fsProvider } from "../src/sourceMapProvider"
import { createErrorRetracer } from "../src/errorRetracer"

const errorRetracer = createErrorRetracer({ sourceMapProvider: fsProvider(__dirname + "/../support/sourceMaps") })

test("retraces stack trace in Error object", async () => {
  const error = new ErrorWithStack(ErrorStacks.chrome)

  const retracedError = await errorRetracer.retrace(error)

  expect(retracedError.stack).toEqual(
    "new StatusCodeError (webpack:///state-actions/src/client/statusCodeError.ts:18:4)\n" +
      "CollinsFetch.<anonymous> (webpack:///state-actions/src/client/collinsFetch.ts:63:12)\n" +
      "step (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:97:0)\n" +
      "Object.next (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:78:44)\n" +
      "fulfilled (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:68:41)"
  )
})

test("should not throw if file not found", async () => {
  const error = new ErrorWithStack(ErrorStacks.webpackProduction2)

  const {stack} = await errorRetracer.retrace(error)

  expect(stack).toEqual(`pb (https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js:12:454)
n (https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js:13:221)
Th (https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js:37:309)
tf (https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js:37:377)
Object.findDOMNode (https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js:217:310)
t.value (https://mui-qa.fyber.com/vendors~nfp.52a56cb27e6de6d78d1c.js:1:88992)
qi (https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js:130:296)
ui (https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js:133:320)
<unknown> (https://unpkg.com/react-dom@16.8.6/umd/react-dom.production.min.js:158:377)
unstable_runWithPriority (https://unpkg.com/react@16.8.6/umd/react.production.min.js:27:36)`
  )
})
