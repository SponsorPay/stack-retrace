import { RawSourceMap, SourceMapConsumer } from "source-map"
import { parseStack } from "./parseStack"
import { RetraceOptions } from "./retraceOptions"
import { httpProvider } from "./sourceMapProvider"
import { Stack, StackFrame } from "./stack"

export interface StackRetracer extends RetraceOptions {}

export class StackRetracer {
  constructor(options: Partial<RetraceOptions> = {}) {
    const { stackParser = parseStack, sourceMapProvider = httpProvider } = options

    this.stackParser = stackParser
    this.sourceMapProvider = sourceMapProvider
  }

  public async retrace(rawStack: string): Promise<Stack> {
    const stack = this.stackParser(rawStack)

    return Promise.all(
      stack.map(async frame => {
        if (!frame.fileName || !frame.lineNumber) {
          return frame
        }

        const sourceMap = await this.sourceMapProvider(frame.fileName)

        if (!sourceMap) {
          return frame
        }

        return this.retraceFrame(frame, sourceMap)
      })
    )
  }

  public async retraceFrame(frame: StackFrame, sourceMap: RawSourceMap): Promise<StackFrame> {
    return SourceMapConsumer.with(sourceMap, null, consumer => {
      const position = consumer.originalPositionFor({
        line: frame.lineNumber!,
        column: frame.columnNumber!
      })

      const retracedFrame = new StackFrame({
        ...frame,
        lineNumber: position.line,
        columnNumber: position.column,
        fileName: position.source
      })

      if (position.name) {
        retracedFrame.functionName = position.name
      }

      return retracedFrame
    })
  }
}
