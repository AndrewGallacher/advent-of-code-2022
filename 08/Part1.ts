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

    const heightOfThisTree = wood[x][y];
    const lines: number[][] = [];

    // Up
    const up: number[] = [];
    for (let i = 0; i < x; i++) {
      up.push(wood[i][y]);
    }
    lines.push(up);

    // Down
    const down: number[] = [];
    for (let i = x + 1; i < wood.length; i++) {
      down.push(wood[i][y]);
    }
    lines.push(down);

    // Left
    const left: number[] = [];
    for (let i = 0; i < y; i++) {
      left.push(wood[x][i]);
    }
    lines.push(left);

    // Right
    const right: number[] = [];
    for (let i = y + 1; i < wood[x].length; i++) {
      right.push(wood[x][i]);
    }
    lines.push(right);

    for (let l in lines) {
      const line = lines[l];
      let isTreeVisible = true;

      for (let i = 0; i < line.length; i++) {
        if (line[i] >= heightOfThisTree) {
          isTreeVisible = false;
        }
      }

      if (isTreeVisible) {
        return true;
      }
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

    return visibleTreeCount;
  }
}
