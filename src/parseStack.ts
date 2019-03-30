import ErrorStackParser from "error-stack-parser"
import { Stack } from "./Stack"
import { ErrorMock } from "./ErrorMock"

export function parseStack(rawStack: string): Stack {
  const error = new ErrorMock(rawStack)

  return ErrorStackParser.parse(error)
}
