import { getData } from "../src/common";
import { Day07Part1 } from "./Part1";
import { Day07Part2 } from "./Part2";

const part1 = new Day07Part1();
const part2 = new Day07Part2();
const sample = getData("07/sample");

describe("Day 7 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(-1);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(-1);
  });
});
