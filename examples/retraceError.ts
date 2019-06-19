import { createErrorRetracer, fsProvider } from "../src"
import { error } from "../support/errorWithStack"

async function retrace() {
  const retraceError = createErrorRetracer({ sourceMapProvider: fsProvider(__dirname + "/../support/sourceMaps") })

  console.log(await retraceError.retrace(error))
}

retrace()
