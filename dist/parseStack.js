"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var stackParser = __importStar(require("stacktrace-parser"));
var Stack_1 = require("./Stack");
function parseStack(rawStack) {
    var rawFrames = stackParser.parse(rawStack);
    return rawFrames.map(function (_a) {
        var file = _a.file, column = _a.column, lineNumber = _a.lineNumber, methodName = _a.methodName;
        return new Stack_1.StackFrame({ fileName: file, functionName: methodName, columnNumber: column, lineNumber: lineNumber });
    });
}
exports.parseStack = parseStack;
//# sourceMappingURL=parseStack.js.map