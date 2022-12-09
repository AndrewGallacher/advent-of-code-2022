import { getData } from "../src/common";
import { Day09Part1 } from "./Part1";
import { Day09Part2 } from "./Part2";

const part1 = new Day09Part1();
const part2 = new Day09Part2();
const sample1 = getData("09/sample1");
const sample2 = getData("09/sample2");
const input = getData("09/input");

describe("Day 09 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample1);
    expect(result).toBe(13);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample2);
    expect(result).toBe(36);
  });
});

describe("Day 09 input", () => {
  test("part1", () => {
    const result = part1.solve(input);
    expect(result).toBe(6314);
  });

  test("part2", () => {
    const result = part2.solve(input);
    expect(result).toBe(2504);
  });
});
