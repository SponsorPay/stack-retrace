import * as fs from "fs"
import { RawSourceMap } from "source-map"

export function fsProvider(pathMapping: Record<string, string>) {
  return function provide(filename: string): RawSourceMap {
    const path = pathMapping[filename]

    return JSON.parse(fs.readFileSync(path).toString())
  }
}
