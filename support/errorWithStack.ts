export class ErrorWithStack implements Error {
  name = "ErrorWithStack"
  message = "Error with stack example"

  stack: string

  constructor(stack: string) {
    this.stack = stack
  }
}

const stack =
  "StatusCodeError: No such placement\n" +
  "    at new StatusCodeError (http://localhost:8080/nfp.js:8961:28)\n" +
  "    at CollinsFetch.<anonymous> (http://localhost:8080/nfp.js:8867:35)\n" +
  "    at step (http://localhost:8080/vendors~nfp.js:83709:23)\n" +
  "    at Object.next (http://localhost:8080/vendors~nfp.js:83690:53)\n" +
  "    at fulfilled (http://localhost:8080/vendors~nfp.js:83680:58)"

export const error = new ErrorWithStack(stack)
