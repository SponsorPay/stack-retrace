import * as stackParser from "stacktrace-parser"
import { Stack, StackFrame } from "./stack"

export function parseStack(rawStack: string): Stack {
  const rawFrames = stackParser.parse(rawStack)

  return rawFrames.map(
    ({ file, column, lineNumber, methodName }) =>
      new StackFrame({ fileName: file, functionName: methodName, columnNumber: column, lineNumber })
  )
}
