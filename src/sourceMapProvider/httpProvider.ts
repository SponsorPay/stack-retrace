import { RawSourceMap } from "source-map"
import fetch from "node-fetch"

export async function httpProvider(filename: string): Promise<RawSourceMap> {
  return await fetch(filename + ".map")
    .then(res => res.json())
    .catch(() => null)
}

// const EmptySourceMap = {
//   version: 3,
//   sources: [],
//   mappings: "",
//   file: "",
// }

// version: number;
// sources: string[];
// names: string[];
// sourceRoot?: string;
// sourcesContent?: string[];
// mappings: string;
// file: string;
