export interface StackFrame {
    fileName: string;
    lineNumber: number;
    columnNumber: number;
    functionName: string;
}
export declare class StackFrame {
    constructor(params: Partial<StackFrame> & {
        lineNumber: number;
    });
    toString(): string;
}
export declare type Stack = StackFrame[];
