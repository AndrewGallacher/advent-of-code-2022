// Day 09 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { Instruction } from "./Instruction";
import { Parser } from "./Parser";
import { Position } from "./Position";
import { isAdjacent, moveHead, moveTail } from "./utilities9";

export class Day09Part2 implements IPuzzle<number> {
  solve(data: string[]): number {
    const parser = new Parser();

    const instructions = parser.parse(data);
    let headPosition = new Position(0, 0);
    let bodyPositions: Position[] = [];
    for (let i = 0; i < 9; i++) {
      bodyPositions.push(new Position(0, 0));
    }

    const tailPositions = new Map<string, number>();
    tailPositions.set(bodyPositions[8].toString(), 1);

    for (let index in instructions) {
      const instruction = instructions[index];

      for (let i = 0; i < instruction.length; i++) {
        // Move the head
        headPosition = moveHead(
          headPosition,
          new Instruction(instruction.direction, 1)
        );

        let basePosition = new Position(headPosition.row, headPosition.column);
        for (let i = 0; i < 9; i++) {
          if (!isAdjacent(basePosition, bodyPositions[i])) {
            bodyPositions[i] = moveTail(basePosition, bodyPositions[i]);
            
            if (i === 8) {
                console.log(`move tail - ${instruction} ${i}`)
              tailPositions.set(bodyPositions[8].toString(), 1);
            }
          }

          basePosition = new Position(
            bodyPositions[i].row,
            bodyPositions[i].column
          );
        }
      }
    }

    return tailPositions.size;
  }
}
