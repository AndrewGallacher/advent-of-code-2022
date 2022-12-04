import * as fs from "fs";

export function getData(fileName: string): string[] {
  let fileContent = fs.readFileSync(fileName, "utf8");
  return fileContent.split("\n");
}
