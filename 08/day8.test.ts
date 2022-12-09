import { getData } from "../src/common";
import { Day08Part1 } from "./Part1";
import { Day08Part2 } from "./Part2";

const part1 = new Day08Part1();
const part2 = new Day08Part2();
const sample = getData("08/sample");
const input = getData("08/input");

describe("Day 08 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(21);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(8);
  });
});

describe("Day 08 input", () => {
  test("part1", () => {
    const result = part1.solve(input);
    expect(result).toBe(1546);
  });

  test("part2", () => {
    const result = part2.solve(input);
    expect(result).toBe(519064);
  });
});
