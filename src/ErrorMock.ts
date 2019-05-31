export class ErrorMock implements Error {
  name = ""
  message = ""

  stack: string

  constructor(stack: string) {
    this.stack = stack
  }
}
