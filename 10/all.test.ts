import { getData } from "../src/common";
import { Day10Part1 } from "./Part1";

const part1 = new Day10Part1();

const sample = getData("10/sample");
const input = getData("10/input");

describe("Day 10 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(13140);
  });
});

describe("Day 10 input", () => {
  test("part1", () => {
    const result = part1.solve(input);
    expect(result).toBe(15120);
  });
});
