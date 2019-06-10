import { RawSourceMap } from "source-map"

export { fsProvider } from "./fsProvider"
export { httpProvider } from "./httpProvider"

export type SourceMapProvider = (fileUrl: string) => RawSourceMap | Promise<RawSourceMap> | undefined
