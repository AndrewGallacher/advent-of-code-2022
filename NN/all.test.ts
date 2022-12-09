import { getData } from "../src/common";
import { DayNNPart1 } from "./Part1";
import { DayNNPart2 } from "./Part2";

const part1 = new DayNNPart1();
const part2 = new DayNNPart2();
const sample = getData("NN/sample");
const input = getData("NN/input");

describe("Day NN sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(-1);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(-1);
  });
});

describe("Day NN input", () => {
  test("part1", () => {
    const result = part1.solve(input);
    expect(result).toBe(-1);
  });

  test("part2", () => {
    const result = part2.solve(input);
    expect(result).toBe(-1);
  });
});
