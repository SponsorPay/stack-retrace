import { retraceError } from "./retraceError"

export function errorLogger(handler: (error: Error) => any) {
  return async function log(error: Error) {
    const retracedError = await retraceError(error)

    return handler(retracedError)
  }
}
