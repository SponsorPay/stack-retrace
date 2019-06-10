import { promises as fs } from "fs"
import { RawSourceMap } from "source-map"

export function fsProvider(sourceMapDir: string) {
  return async function provide(fileUrl: string): Promise<RawSourceMap> {
    const filePath = new URL(fileUrl).pathname
    const sourceMapPath = sourceMapDir + filePath + ".map"

    const jsonBuffer = await fs.readFile(sourceMapPath)

    return JSON.parse(jsonBuffer.toString())
  }
}
