"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var error_stack_parser_1 = __importDefault(require("error-stack-parser"));
var Stack_1 = require("./Stack");
var ErrorMock_1 = require("./ErrorMock");
function parseStack(rawStack) {
    var error = new ErrorMock_1.ErrorMock(rawStack);
    return error_stack_parser_1.default.parse(error).map(function (frame) { return new Stack_1.StackFrame(frame); });
}
exports.parseStack = parseStack;
//# sourceMappingURL=parseStack.js.map