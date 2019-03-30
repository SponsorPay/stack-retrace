import { parseStack } from "../src"

const rawStack =
  "StatusCodeError: No such placement\n" +
  "    at new StatusCodeError (http://localhost:8080/nfp.js:7394:28)\n" +
  "    at CollinsFetch.<anonymous> (http://localhost:8080/nfp.js:7305:35)\n" +
  "    at step (http://localhost:8080/vendors~nfp.js:91818:23)\n" +
  "    at Object.next (http://localhost:8080/vendors~nfp.js:91799:53)\n" +
  "    at fulfilled (http://localhost:8080/vendors~nfp.js:91789:58)"

test("returns parsed stack frames", async function() {
  expect(parseStack(rawStack)).toBeInstanceOf(Object)
})
