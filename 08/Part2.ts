// Day 08 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { Parser } from "./Parser";

export class Day08Part2 implements IPuzzle<number> {
  getVisibleTreeCount(line: number[], heightOfThisTree: number): number {
    let treeCount = 0;

    while (line.length > 0) {
      const tree = line.pop() ?? 0;
      treeCount++;

      if (tree >= heightOfThisTree) {
        break;
      }
    }

    return treeCount;
  }

  getScenicScore(wood: number[][], x: number, y: number): number {
    // Is on an edge?
    if (x === 0 || y === 0) {
      return 0;
    }

    // Another two edges
    if (x === wood.length - 1 || y === wood[x].length - 1) {
      return 0;
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
    for (let i = wood.length - 1; i > x; i--) {
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
    for (let i = wood[x].length - 1; i > y; i--) {
      right.push(wood[x][i]);
    }
    lines.push(right);

    let scenicScore = 1;
    for (let l in lines) {
      const line = lines[l];

      scenicScore =
        scenicScore * this.getVisibleTreeCount(line, heightOfThisTree);
    }

    return scenicScore;
  }

  solve(data: string[]): number {
    const parser = new Parser();
    var wood = parser.parse(data);

    let bestScenicScore = 0;

    for (let x = 0; x < wood.length; x++) {
      for (let y = 0; y < wood[x].length; y++) {
        const scenicScore = this.getScenicScore(wood, x, y);
        if (scenicScore > bestScenicScore) {
          bestScenicScore = scenicScore;
        }
      }
    }

    return bestScenicScore;
  }
}
