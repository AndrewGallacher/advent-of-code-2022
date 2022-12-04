// app.ts
import { getData } from "../src/common";
import { Day04Part1 } from "./Part1";
import { Day04Part2 } from "./Part2";

const part1 = new Day04Part1();
const part2 = new Day04Part2();

// Get the data
const sample = getData("sample");
const input = getData("input");

// Solve
const samplePart1Result = part1.solve(sample);
const samplePart2Result = part2.solve(sample);
const inputPart1Result = part1.solve(input);
const inputPart2Result = part2.solve(input);

// Display results
console.log();
console.log("SAMPLE");
console.log(`Part 1: ${samplePart1Result}`);
console.log(`Part 2: ${samplePart2Result}`);

console.log();
console.log("INPUT");
console.log(`Part 1: ${inputPart1Result}`);
console.log(`Part 2: ${inputPart2Result}`);
