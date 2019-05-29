import { RawSourceMap } from "source-map";
export declare function fsProvider(pathMapping: Record<string, string>): (filename: string) => RawSourceMap;
