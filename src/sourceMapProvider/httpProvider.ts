import { RawSourceMap } from "source-map"
import fetch from "node-fetch"

export async function httpProvider(filename: string): Promise<RawSourceMap> {
  return await fetch(filename + ".map").then(res => res.json())
}
