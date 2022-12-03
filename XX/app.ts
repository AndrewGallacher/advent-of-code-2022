// Day ?
import * as fs from "fs";

const getData = (fileName: string): string[] => {
  let fileContent = fs.readFileSync(fileName, "utf8");
  return fileContent.split("\n");
};
 
// read input file
const filename = "sample";
const data = getData(filename);

console.log("** START **");

console.log(data);

console.log("** END **");
