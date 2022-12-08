import { getData } from "../src/common";
import { Day08Part1 } from "./Part1";
import { Day08Part2 } from "./Part2";

const part1 = new Day08Part1();
const part2 = new Day08Part2();
const sample = getData("08/sample");

describe("Day 08 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(21);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(-1);
  });
});
