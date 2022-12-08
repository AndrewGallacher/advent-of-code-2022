// Day 08 (Part 1)
import { IPuzzle } from "../src/IPuzzle";
import { Parser } from "./Parser";

export class Day08Part1 implements IPuzzle<number> {
  isVisible(wood: number[][], x: number, y: number): boolean {
    // Is on an edge?
    if (x === 0 || y === 0) {
      return true;
    }

    // Another two edges
    if (x === wood.length - 1 || y === wood[x].length - 1) {
      return true;
    }

    let isTreeVisible = true;
    for (let i = 0; i < x; i++) {
      if (wood[i][y] >= wood[x][y]) {
        isTreeVisible = false;
      }
    }

    if (isTreeVisible) {
      return true;
    }

    isTreeVisible = true;
    for (let i = x + 1; i < wood.length; i++) {
      if (wood[i][y] >= wood[x][y]) {
        isTreeVisible = false;
      }
    }

    if (isTreeVisible) {
      return true;
    }

    isTreeVisible = true;
    for (let i = 0; i < y; i++) {
      if (wood[x][i] >= wood[x][y]) {
        isTreeVisible = false;
      }
    }

    if (isTreeVisible) {
      return true;
    }

    isTreeVisible = true;
    for (let i = y + 1; i < wood[x].length; i++) {
      if (wood[x][i] >= wood[x][y]) {
        isTreeVisible = false;
      }
    }

    if (isTreeVisible) {
      return true;
    }

    return false;
  }

  solve(data: string[]): number {
    const parser = new Parser();
    var wood = parser.parse(data);
    let visibleTreeCount = 0;

    for (let x = 0; x < wood.length; x++) {
      for (let y = 0; y < wood[x].length; y++) {
        if (this.isVisible(wood, x, y)) {
          visibleTreeCount++;
        }
      }
    }

    console.log(wood);

    return visibleTreeCount;
  }
}
