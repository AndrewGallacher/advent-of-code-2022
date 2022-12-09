import { getData } from "../src/common";
import { Day01Part1 } from "./Part1";
import { Day01Part2 } from "./Part2";

const part1 = new Day01Part1();
const part2 = new Day01Part2();
const sample = getData("01/sample");
const input = getData("01/input");

describe("Day 01 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(24000);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(45000);
  });
});

describe("Day 01 input", () => {
  test("part1", () => {
    const result = part1.solve(input);
    expect(result).toBe(70698);
  });

  test("part2", () => {
    const result = part2.solve(input);
    expect(result).toBe(206643);
  });
});
