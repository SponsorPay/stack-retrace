// import { StackFrame } from "error-stack-parser"

export type StackFrame = {
  fileName?: string
  functionName?: string
  lineNumber?: number
  columnNumber?: number
}

export type Stack = StackFrame[]
