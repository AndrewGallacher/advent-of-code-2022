// Day 5 (Part 1)
import { IPuzzle } from "../src/IPuzzle";
import { parse } from "./parser";

export class Day05Part1 implements IPuzzle<string> {
  solve(data: string[]): string {
    var input = parse(data);

    input.instructions.forEach((instruction) => {
      for (let crate = 0; crate < instruction.count; crate++) {
        input.initialState[instruction.to - 1].push(
          input.initialState[instruction.from - 1].pop() ?? "?"
        );
      }
    });

    let result = "";

    for (let i = 0; i < input.initialState.length; i++) {
      result = result + input.initialState[i].pop();
    }

    return result;
  }
}
