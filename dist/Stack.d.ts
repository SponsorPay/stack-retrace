export interface StackFrame {
    fileName: string | null;
    lineNumber: number | null;
    columnNumber: number | null;
    functionName: string | null;
}
export declare class StackFrame {
    constructor(params: StackFrame);
    toString(): string;
}
export declare type Stack = StackFrame[];
