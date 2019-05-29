import { RawSourceMap } from "source-map"

export type SourceMapProvider = (filename: string) => RawSourceMap | Promise<RawSourceMap>
