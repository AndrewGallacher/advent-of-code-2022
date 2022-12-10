// Day 10 (Part 1)
import { IPuzzle } from "../src/IPuzzle";

export class Day10Part1 implements IPuzzle<number> {
  solve(data: string[]): number {
    // 0 = initial position, N = aftre cycle N
    const xRegister: number[] = [];

    // Initial state
    let value = 1;
    xRegister.push(value);

    data
      .filter((instruction) => instruction !== "")
      .forEach((instruction) => {
        if (instruction === "noop") {
          xRegister.push(value);
        } else if (instruction.startsWith("addx")) {
          xRegister.push(value);
          const increment = parseInt(instruction.split(" ")[1]);
          value += increment;
          xRegister.push(value);
        } else {
          throw new Error(`Unexpected instruction ${instruction}`);
        }
      });

    let totalSignalStrength: number = 0;
    const cyclesOfInterest: number[] = [20, 60, 100, 140, 180, 220];
    cyclesOfInterest.forEach((cycle) => {
      totalSignalStrength += cycle * xRegister[cycle - 1];
    });

    return totalSignalStrength;
  }
}
