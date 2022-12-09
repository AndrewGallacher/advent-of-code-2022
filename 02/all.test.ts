import { getData } from "../src/common";
import { Day02Part1 } from "./Part1";
import { Day02Part2 } from "./Part2";

const part1 = new Day02Part1();
const part2 = new Day02Part2();
const sample = getData("02/sample");
const input = getData("02/input");

describe("Day 02 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(15);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(12);
  });
});

describe("Day 02 input", () => {
  test("part1", () => {
    const result = part1.solve(input);
    expect(result).toBe(11449);
  });

  test("part2", () => {
    const result = part2.solve(input);
    expect(result).toBe(13187);
  });
});
