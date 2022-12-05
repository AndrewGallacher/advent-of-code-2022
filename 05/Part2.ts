// Day 5 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { parse } from "./parser";

export class Day05Part2 implements IPuzzle<string> {
  solve(data: string[]): string {
    var input = parse(data);

    input.instructions.forEach((instruction) => {
      const cratesToBeMoved: string[] = [];
      for (let crate = 0; crate < instruction.count; crate++) {
        cratesToBeMoved.push(
          input.initialState[instruction.from - 1].pop() ?? "?"
        );
      }

      while (cratesToBeMoved.length > 0) {
        input.initialState[instruction.to - 1].push(
          cratesToBeMoved.pop() ?? "?"
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
