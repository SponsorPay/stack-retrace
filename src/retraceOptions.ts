import { SourceMapProvider } from "./sourceMapProvider"
import { Stack } from "./stack"

export interface RetraceOptions {
  stackParser: (rawStack: string) => Stack
  sourceMapProvider: SourceMapProvider
}
