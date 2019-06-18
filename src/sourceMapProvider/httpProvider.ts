import fetch from "node-fetch"
import { RawSourceMap } from "source-map"

export async function httpProvider(fileUrl: string): Promise<RawSourceMap> {
  return fetch(fileUrl + ".map")
    .then(res => res.json())
    .catch(() => null)
}
