import { fsProvider } from "../src/sourceMapProvider"
import { ErrorStacks } from "./fixtures/errorStacks"
import { StackRetracer } from "../src/stackRetracer"

const stackRetracer = new StackRetracer({ sourceMapProvider: fsProvider(__dirname + "/../support/sourceMaps") })

test("retraces Chrome stack trace", async () => {
  const retracedStack = await stackRetracer.retrace(ErrorStacks.chrome)

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

test("retraces FireFox stack trace", async () => {
  const retracedStack = await stackRetracer.retrace(ErrorStacks.firefox)

  expect(retracedStack[0].toString()).toEqual(
    "StatusCodeError (webpack:///state-actions/src/client/statusCodeError.ts:18:4)"
  )
  expect(retracedStack[1].toString()).toEqual(
    "../state-actions/build/client/collinsFetch.js/CollinsFetch.prototype.fetch/</< (webpack:///state-actions/src/client/collinsFetch.ts:63:12)"
  )
  expect(retracedStack[2].toString()).toEqual(
    "step (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:97:0)"
  )
  expect(retracedStack[3].toString()).toEqual(
    "verb/< (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:78:44)"
  )
  expect(retracedStack[4].toString()).toEqual(
    "fulfilled (webpack:///Users/mckomo/Projects/revenue-desk/node_modules/tslib/tslib.es6.js:68:41)"
  )
})

test("retraces Webpack production bundle", async () => {
  const retracedStack = await stackRetracer.retrace(ErrorStacks.webpackProduction)

  expect(retracedStack[0].toString()).toEqual("call (webpack:///state-actions/src/client/statusCodeError.ts:18:4)")
  expect(retracedStack[1].toString()).toEqual(
    "e.<anonymous> (webpack:///state-actions/src/client/collinsFetch.ts:63:12)"
  )
  expect(retracedStack[2].toString()).toEqual(
    "call (webpack:///mnt/jenkins/workspace/Console_revenue-desk_master-TDJ4IO3A3KP5PGHEHJFCEMN352DR6RVOCCXRPZZMQN2NJV2JG6QA/node_modules/tslib/tslib.es6.js:97:0)"
  )
  expect(retracedStack[3].toString()).toEqual(
    "Object.next (webpack:///mnt/jenkins/workspace/Console_revenue-desk_master-TDJ4IO3A3KP5PGHEHJFCEMN352DR6RVOCCXRPZZMQN2NJV2JG6QA/node_modules/tslib/tslib.es6.js:78:44)"
  )
  expect(retracedStack[4].toString()).toEqual(
    "next (webpack:///mnt/jenkins/workspace/Console_revenue-desk_master-TDJ4IO3A3KP5PGHEHJFCEMN352DR6RVOCCXRPZZMQN2NJV2JG6QA/node_modules/tslib/tslib.es6.js:68:41)"
  )
})
