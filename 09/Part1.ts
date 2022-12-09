// Day 09 (Part 1)
import { IPuzzle } from "../src/IPuzzle";
import { Parser } from "./Parser";
import { Position } from "./Position";
import { isAdjacent, moveHead, moveTail } from "./utilities9";

export class Day09Part1 implements IPuzzle<number> {
  solve(data: string[]): number {
    const parser = new Parser();

    const instructions = parser.parse(data);
    let headPosition = new Position(0, 0);
    let tailPosition = new Position(0, 0);

    const tailPositions = new Map<string, number>();
    tailPositions.set(tailPosition.toString(), 1);

    for (let index in instructions) {
      const instruction = instructions[index];

      for (let i = 0; i < instruction.length; i++) {
        headPosition = moveHead(headPosition, instruction.direction);
        if (!isAdjacent(headPosition, tailPosition)) {
          tailPosition = moveTail(headPosition, tailPosition);
          tailPositions.set(tailPosition.toString(), 1);
        }
      }
    }

    return tailPositions.size;
  }
}
