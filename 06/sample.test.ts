import { getData } from "../src/common";
import { Day06Part1 } from "./Part1";
import { Day06Part2 } from "./Part2";

const part1 = new Day06Part1();
const part2 = new Day06Part2();
const sample = getData("06/sample");

describe("Day 6 sample", () => {
  test("part1 (main sample)", () => {
    const result = part1.solve(sample);
    expect(result).toBe(7);
  });

  test("part1 (example 1)", () => {
    const result = part1.solve(["bvwbjplbgvbhsrlpgdmjqwftvncz"]);
    expect(result).toBe(5);
  });

  test("part1 (example 2)", () => {
    const result = part1.solve(["nppdvjthqldpwncqszvftbrmjlhg"]);
    expect(result).toBe(6);
  });

  test("part1 (example 3)", () => {
    const result = part1.solve(["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"]);
    expect(result).toBe(10);
  });

  test("part1 (example 4)", () => {
    const result = part1.solve(["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"]);
    expect(result).toBe(11);
  });

  test("part2 (main sample)", () => {
    const result = part2.solve(sample);
    expect(result).toBe(19);
  });

  test("part2 (example 1)", () => {
    const result = part2.solve(["bvwbjplbgvbhsrlpgdmjqwftvncz"]);
    expect(result).toBe(23);
  });

  test("part2 (example 2)", () => {
    const result = part2.solve(["nppdvjthqldpwncqszvftbrmjlhg"]);
    expect(result).toBe(23);
  });

  test("part2 (example 3)", () => {
    const result = part2.solve(["nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"]);
    expect(result).toBe(29);
  });

  test("part2 (example 4)", () => {
    const result = part2.solve(["zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"]);
    expect(result).toBe(26);
  });
});
