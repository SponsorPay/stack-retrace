"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StackFrame = /** @class */ (function () {
    function StackFrame(params) {
        var _a = params.fileName, fileName = _a === void 0 ? "" : _a, lineNumber = params.lineNumber, _b = params.columnNumber, columnNumber = _b === void 0 ? 1 : _b, _c = params.functionName, functionName = _c === void 0 ? "<anonymous>" : _c;
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