import { getData } from "../src/common";
import { Day03Part1 } from "./Part1";
import { Day03Part2 } from "./Part2";

const part1 = new Day03Part1();
const part2 = new Day03Part2();
const sample = getData("03/sample");

describe("Day 3 sample", () => {
  test("part1", () => {
    const result = part1.solve(sample);
    expect(result).toBe(157);
  });

  test("part2", () => {
    const result = part2.solve(sample);
    expect(result).toBe(70);
  });
});
