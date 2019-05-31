import { parseStack } from "./parseStack"
import { retraceStack } from "./retraceStack"

export async function retraceError(error: Error): Promise<any> {
  const retracedStack = await retraceStack(parseStack(error.stack!))

  return { ...error, stack: retracedStack.join("\n") }
}
