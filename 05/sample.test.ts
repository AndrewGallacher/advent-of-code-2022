import { getData } from "../src/common";
import { Day05Part1 } from "./Part1";
import { Day05Part2 } from "./Part2";

const part1 = new Day05Part1();
const part2 = new Day05Part2();
const sample = getData("05/sample");

describe("Day 5 sample", () => {
  test("part1", () => {
    const result = part1.solve(sample);
    expect(result).toBe("CMZ");
  });

  test("part2", () => {
    const result = part2.solve(sample);
    expect(result).toBe("MCD");
  });
});
