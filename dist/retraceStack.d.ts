import { RawSourceMap } from "source-map";
import { Stack } from "./Stack";
export declare function retraceStack(stack: Stack, sourceMap: RawSourceMap): Promise<string>;
