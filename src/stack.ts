export interface StackFrame {
  fileName: string | null
  lineNumber: number | null
  columnNumber: number | null
  functionName: string | null
}

export class StackFrame {
  constructor(params: StackFrame) {
    const { fileName, lineNumber, columnNumber, functionName } = params

    this.fileName = fileName
    this.lineNumber = lineNumber
    this.columnNumber = columnNumber
    this.functionName = functionName
  }

  public toString() {
    return `${this.functionName} (${this.fileName!}:${this.lineNumber}:${this.columnNumber})`
  }
}

export type Stack = StackFrame[]
