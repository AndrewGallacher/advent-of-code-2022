import { getData } from "../src/common";
import { Day04Part1 } from "./Part1";
import { Day04Part2 } from "./Part2";

const part1 = new Day04Part1();
const part2 = new Day04Part2();
const sample = getData("04/sample");

describe("Day 4 sample", () => {
  test("part1", () => {
    const result = part1.solve(sample);
    expect(result).toBe(2);
  });

  test("part2", () => {
    const result = part2.solve(sample);
    expect(result).toBe(4);
  });
});
