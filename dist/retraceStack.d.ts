import { Stack } from "./Stack";
import { SourceMapProvider } from "./sourceMapProvider";
export declare function retraceStack(stack: Stack, sourceMapProvider?: SourceMapProvider): Promise<Stack>;
