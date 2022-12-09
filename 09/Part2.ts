// Day 09 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { Parser } from "./Parser";
import { Position } from "./Position";
import { isAdjacent, moveHead, moveTail } from "./utilities9";

export class Day09Part2 implements IPuzzle<number> {
  solve(data: string[]): number {
    const parser = new Parser();

    const instructions = parser.parse(data);

    let knotPositions: Position[] = [];
    for (let i = 0; i < 10; i++) {
      knotPositions.push(new Position(0, 0));
    }

    const tailPositions = new Map<string, number>();
    tailPositions.set(knotPositions[9].toString(), 1);

    for (let index in instructions) {
      const instruction = instructions[index];

      for (let i = 0; i < instruction.length; i++) {
        // Move the head
        knotPositions[0] = moveHead(knotPositions[0], instruction.direction);

        for (let i = 1; i < 10; i++) {
          if (!isAdjacent(knotPositions[i - 1], knotPositions[i])) {
            knotPositions[i] = moveTail(knotPositions[i - 1], knotPositions[i]);

            if (i === 9) {
              tailPositions.set(knotPositions[9].toString(), 1);
            }
          }
        }
      }
    }

    return tailPositions.size;
  }
}
