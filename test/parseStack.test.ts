import { parseStack } from "../src"

const rawStack =
  "StatusCodeError: No such placement\n" +
  "    at new StatusCodeError (http://localhost:8080/nfp.js:7394:28)\n" +
  "    at CollinsFetch.<anonymous> (http://localhost:8080/nfp.js:7305:35)\n" +
  "    at step (http://localhost:8080/vendors~nfp.js:91818:23)"

test("returns parsed stack frames", async function() {
  const stackFrames = parseStack(rawStack)

  expect(stackFrames[0]).toMatchObject({
    fileName: "http://localhost:8080/nfp.js",
    lineNumber: 7394,
    columnNumber: 28,
    functionName: "new StatusCodeError"
  })
  expect(stackFrames[1]).toMatchObject({
    fileName: "http://localhost:8080/nfp.js",
    lineNumber: 7305,
    columnNumber: 35,
    functionName: "CollinsFetch.<anonymous>"
  })
  expect(stackFrames[2]).toMatchObject({
    fileName: "http://localhost:8080/vendors~nfp.js",
    lineNumber: 91818,
    columnNumber: 23,
    functionName: "step"
  })
})
