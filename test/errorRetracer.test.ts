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
