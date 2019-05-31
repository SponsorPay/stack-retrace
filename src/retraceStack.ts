import { SourceMapConsumer } from "source-map"
import { Stack } from "./Stack"
import { SourceMapProvider } from "./sourceMapProvider"
import { httpProvider } from "./sourceMapProvider/httpProvider"

export async function retraceStack(stack: Stack, sourceMapProvider: SourceMapProvider = httpProvider): Promise<any> {
  return Promise.all(
    stack.map(async frame => {
      if (!frame.fileName) {
        return frame
      }

      const sourceMap = await sourceMapProvider(frame.fileName)

      if (!sourceMap) {
        return frame
      }

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

        return retracedFrame
      })
    })
  )
}
