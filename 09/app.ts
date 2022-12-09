// app.ts
import { getData } from "../src/common";
import { Day09Part1 } from "./Part1";
import { Day09Part2 } from "./Part2";

const part1 = new Day09Part1();
const part2 = new Day09Part2();

// Get the data
const sample1 = getData("sample1");
const sample2 = getData("sample2");
const input = getData("input");
// const debug = getData("debug");

// Solve
const samplePart1Result =  part1.solve(sample1);
const samplePart2Result =  part2.solve(sample2);
// const samplePart2Result =  part2.solve(debug);
const inputPart1Result =  part1.solve(input);
const inputPart2Result =  part2.solve(input);

// Display results
console.log();
console.log("SAMPLE");
console.log(`Part 1: ${samplePart1Result}`);
console.log(`Part 2: ${samplePart2Result}`);

console.log();
console.log("INPUT");
console.log(`Part 1: ${inputPart1Result}`);
console.log(`Part 2: ${inputPart2Result}`);
