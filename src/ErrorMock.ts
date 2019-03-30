export class ErrorMock implements Error {
  name = "ErrorMock"
  message = "Mock of an Error object"

  stack: string

  constructor(stack: string) {
    this.stack = stack
  }
}
