import { StackFrame } from "../src/stack"

test("Can be casted to a string", () => {
  const frame = new StackFrame({
    fileName: "http://localhost:8080/nfp.js",
    lineNumber: 8957,
    columnNumber: 28,
    functionName: "new StatusCodeError"
  })

  expect(`${frame}`).toEqual(frame.toString())
  expect(`${frame}`).toEqual("new StatusCodeError (http://localhost:8080/nfp.js:8957:28)")
})
