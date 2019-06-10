"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StackFrame = /** @class */ (function () {
    function StackFrame(params) {
        var fileName = params.fileName, lineNumber = params.lineNumber, columnNumber = params.columnNumber, functionName = params.functionName;
        this.fileName = fileName;
        this.lineNumber = lineNumber;
        this.columnNumber = columnNumber;
        this.functionName = functionName;
    }
    StackFrame.prototype.toString = function () {
        return this.functionName + " (" + this.fileName + ":" + this.lineNumber + ":" + this.columnNumber + ")";
    };
    return StackFrame;
}());
exports.StackFrame = StackFrame;
//# sourceMappingURL=Stack.js.map