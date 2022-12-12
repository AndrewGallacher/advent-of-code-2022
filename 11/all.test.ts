import { getData } from "../src/common";
import { Day11Part1 } from "./Part1";
import { Day11Part2 } from "./Part2";

const part1 = new Day11Part1();
const part2 = new Day11Part2();
const sample = getData("11/sample");
const input = getData("11/input");

describe("Day 11 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(10605);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(2713310158);
  });
});

describe("Day 11 input", () => {
  test("part1", () => {
    const result = part1.solve(input);
    expect(result).toBe(66124);
  });

  test("part2", () => {
    const result = part2.solve(input);
    expect(result).toBe(19309892877);
  });
});
