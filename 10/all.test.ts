import { getData } from "../src/common";
import { Day10Part1 } from "./Part1";
import { Day10Part2 } from "./Part2";

const part1 = new Day10Part1();
const part2 = new Day10Part2();
const sample = getData("10/sample");
const input = getData("10/input");

describe("Day 10 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(13140);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(-1);
  });
});

describe("Day 10 input", () => {
  test("part1", () => {
    const result = part1.solve(input);
    expect(result).toBe(15120);
  });

  test("part2", () => {
    const result = part2.solve(input);
    expect(result).toBe(-1);
  });
});
