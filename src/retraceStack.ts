import { RawSourceMap, SourceMapConsumer } from "source-map"
import { Stack } from "./Stack"

export async function retraceStack(stack: Stack, sourceMap: RawSourceMap): Promise<string> {
  return await SourceMapConsumer.with(
    sourceMap,
    null,
    (consumer: any): Promise<string> => {
      const firstFrame = stack[0]

      const retracedFrame = consumer.originalPositionFor({
        line: firstFrame.lineNumber,
        column: firstFrame.columnNumber
      })

      return Promise.resolve(retracedFrame.source)
    }
  )
}
