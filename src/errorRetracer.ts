import { RetraceOptions } from "./retraceOptions"
import { StackRetracer } from "./stackRetracer"

export interface ErrorRetracer {
  stackRetracer: StackRetracer
}

export class ErrorRetracer {
  constructor(stackRetracer: StackRetracer) {
    this.stackRetracer = stackRetracer
  }

  public async retrace(error: Error) {
    if (!error.stack) {
      return error
    }

    const retracedStack = await this.stackRetracer.retrace(error.stack)

    return { ...error, stack: retracedStack.join("\n") }
  }
}

export function createErrorRetracer(options: Partial<RetraceOptions> = {}) {
  const stackRetracer = new StackRetracer(options)

  return new ErrorRetracer(stackRetracer)
}
