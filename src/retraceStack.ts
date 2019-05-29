import { SourceMapConsumer } from "source-map"
import { Stack } from "./Stack"
import { StackFrame } from "error-stack-parser"
import { SourceMapProvider } from "./sourceMapProvider"
import { httpProvider } from "./sourceMapProvider/httpProvider"

export async function retraceStack(stack: Stack, sourceMapProvider: SourceMapProvider = httpProvider): Promise<any> {
  return await stack.map(async frame => {
    const sourceMap = await sourceMapProvider(frame.fileName!)

    return await SourceMapConsumer.with(sourceMap, frame.fileName + ".map", consumer => {
      const position = consumer.originalPositionFor({
        line: frame.lineNumber!,
        column: frame.columnNumber!
      })

      const retracedFrame = {
        ...frame,
        lineNumber: position.line,
        columnNumber: position.column,
        fileName: position.source
      }

      retracedFrame.toString = function() {
        return `${this.functionName} (${this.fileName!}:${this.lineNumber}:${this.columnNumber})`
      }

      return Promise.resolve(retracedFrame as StackFrame)
    })
  })
}
