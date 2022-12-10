// Day 10 (Part 2)
import { IPuzzle } from "../src/IPuzzle";

export class Day10Part2 implements IPuzzle<number> {
  isVisible(x: number, position: number): boolean {
    if (x === position) {
      return true;
    }

    if (x === position - 1) {
      return true;
    }
    if (x === position + 1) {
      return true;
    }

    return false;
  }

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

    console.log("----------------------------------------");

    let cycle = 0;
    let line = "";
    let count = 0;
    while (cycle < 240) {
      if (this.isVisible(xRegister[cycle], cycle % 40)) {
        line += "#";
      } else {
        line += " ";
      }

      cycle++;
      if (cycle % 40 === 0) {
        console.log(line);
        line = "";
      }
    }

    console.log("----------------------------------------");
    console.log();

    return 0;
  }
}
