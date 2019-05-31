export interface StackFrame {
  fileName: string
  lineNumber: number
  columnNumber: number
  functionName: string
}

export class StackFrame {
  constructor(params: Partial<StackFrame> & { lineNumber: number }) {
    const { fileName = "", lineNumber, columnNumber = 1, functionName = "<anonymous>" } = params

    this.fileName = fileName
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
    this.functionName = functionName
  }

  toString() {
    return `${this.functionName} (${this.fileName!}:${this.lineNumber}:${this.columnNumber})`
  }
}

export type Stack = StackFrame[]
