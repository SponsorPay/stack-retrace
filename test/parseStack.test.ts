import { parseStack } from "../src/parseStack"
import { ErrorStacks } from "./fixtures/errorStacks"
import { StackFrame } from "../src/stack"

test("returns collection of StackFrame objects", async function() {
  const stack = parseStack(ErrorStacks.chrome)

  for (const frame of stack) {
    expect(frame).toBeInstanceOf(StackFrame)
  }

  expect(stack.length).toBeGreaterThan(0)
})

test("parses Chrome stack", async function() {
  const stackFrames = parseStack(ErrorStacks.chrome)

  expect(stackFrames[0]).toMatchObject({
    fileName: "http://localhost:8080/nfp.js",
    lineNumber: 8957,
    columnNumber: 28,
    functionName: "new StatusCodeError"
  })
  expect(stackFrames[1]).toMatchObject({
    fileName: "http://localhost:8080/nfp.js",
    lineNumber: 8863,
    columnNumber: 35,
    functionName: "CollinsFetch.<anonymous>"
  })
  expect(stackFrames[2]).toMatchObject({
    fileName: "http://localhost:8080/vendors~nfp.js",
    lineNumber: 83709,
    columnNumber: 23,
    functionName: "step"
  })
  expect(stackFrames[3]).toMatchObject({
    fileName: "http://localhost:8080/vendors~nfp.js",
    lineNumber: 83690,
    columnNumber: 53,
    functionName: "Object.next"
  })
  expect(stackFrames[4]).toMatchObject({
    fileName: "http://localhost:8080/vendors~nfp.js",
    lineNumber: 83680,
    columnNumber: 58,
    functionName: "fulfilled"
  })
  expect(stackFrames.length).toEqual(5)
})

test("parses Chrome console stack", async function() {
  const stackFrames = parseStack(ErrorStacks.chromeConsole)

  expect(stackFrames[0]).toMatchObject({
    fileName: "<anonymous>",
    lineNumber: 1,
    columnNumber: 24,
    functionName: "foo"
  })
  expect(stackFrames[1]).toMatchObject({
    fileName: "<anonymous>",
    lineNumber: 1,
    columnNumber: 1,
    functionName: "<unknown>"
  })
  expect(stackFrames.length).toEqual(2)
})

test("parses Firefox stack", async function() {
  const stackFrames = parseStack(ErrorStacks.firefox)

  expect(stackFrames[0]).toMatchObject({
    fileName: "http://localhost:8080/nfp.js",
    lineNumber: 8957,
    columnNumber: 28,
    functionName: "StatusCodeError"
  })
  expect(stackFrames[1]).toMatchObject({
    fileName: "http://localhost:8080/nfp.js",
    lineNumber: 8863,
    columnNumber: 35,
    functionName: "../state-actions/build/client/collinsFetch.js/CollinsFetch.prototype.fetch/</<"
  })
  expect(stackFrames[2]).toMatchObject({
    fileName: "http://localhost:8080/vendors~nfp.js",
    lineNumber: 83709,
    columnNumber: 23,
    functionName: "step"
  })
  expect(stackFrames[3]).toMatchObject({
    fileName: "http://localhost:8080/vendors~nfp.js",
    lineNumber: 83690,
    columnNumber: 53,
    functionName: "verb/<"
  })
  expect(stackFrames[4]).toMatchObject({
    fileName: "http://localhost:8080/vendors~nfp.js",
    lineNumber: 83680,
    columnNumber: 58,
    functionName: "fulfilled"
  })
  expect(stackFrames.length).toEqual(5)
})
