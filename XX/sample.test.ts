import { getData } from "../src/common";
import { DayNNPart1 } from "./Part1";
import { DayNNPart2 } from "./Part2";

const part1 = new DayNNPart1();
const part2 = new DayNNPart2();
const sample = getData("NN/sample");

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
