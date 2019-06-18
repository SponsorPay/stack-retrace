import * as fs from "fs"
import { fsProvider } from "../../src/sourceMapProvider"

const sourceMapDir = __dirname + "/../../support/sourceMaps"

test("reads source map from the file system", async () => {
  const sourceMapProvider = fsProvider(sourceMapDir)

  const result = await sourceMapProvider("http://exmaple.com/nfp.js")

  expect(result).toEqual(readSourceMap(sourceMapDir + "/nfp.js.map"))
})

function readSourceMap(path: string) {
  return JSON.parse(fs.readFileSync(path).toString())
}
