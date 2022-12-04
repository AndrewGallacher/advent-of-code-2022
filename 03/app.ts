// Day 3
import * as fs from "fs";
import { Day03Part1 as Part1 } from "./Part1";
import { Day03Part2 as Part2 } from "./Part2";

const getData = (fileName: string): string[] => {
  let fileContent = fs.readFileSync(fileName, "utf8");
  return fileContent.split("\n");
};

// read input file
const filename = "input";
const data = getData(filename);

console.log("** START **");

console.log(data);

const part1 = new Part1();
const part1Result = part1.solve(data);
console.log(`Part 1 - Total priority: ${part1Result}`);

const part2 = new Part2();
const part2Result = part2.solve(data);
console.log(`Part 2 - Total priority: ${part2Result}`);

console.log("** END **");
