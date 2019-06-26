import { createErrorRetracer, fsProvider } from "../src"
import { error } from "../support/errorWithStack"

async function retrace() {
  const errorRetracer = createErrorRetracer({ sourceMapProvider: fsProvider(__dirname + "/../support/sourceMaps") })

  console.log(await errorRetracer.retrace(error))
}

retrace()
