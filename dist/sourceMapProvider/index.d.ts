import { RawSourceMap } from "source-map";
export declare type SourceMapProvider = (filename: string) => RawSourceMap | Promise<RawSourceMap>;
