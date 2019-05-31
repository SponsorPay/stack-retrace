import ErrorStackParser from "error-stack-parser"
import { Stack, StackFrame } from "./Stack"
import { ErrorMock } from "./ErrorMock"

export function parseStack(rawStack: string): Stack {
  const error = new ErrorMock(rawStack)

  return ErrorStackParser.parse(error).map(frame => new StackFrame(frame as StackFrame))
}
