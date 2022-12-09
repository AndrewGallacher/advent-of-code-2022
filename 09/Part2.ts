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

    let knotPositions: Position[] = [];
    for (let i = 0; i < 10; i++) {
      knotPositions.push(new Position(0, 0));
    }
    console.log("knotPositions", knotPositions);

    const tailPositions = new Map<string, number>();
    tailPositions.set(knotPositions[9].toString(), 1);
    console.log("tailPositions", tailPositions);

    for (let index in instructions) {
      const instruction = instructions[index];
      console.log("instruction", instruction);

      for (let i = 0; i < instruction.length; i++) {
        console.log("step", i + 1);

        // Move the head
        knotPositions[0] = moveHead(knotPositions[0], instruction.direction);

        for (let i = 1; i < 10; i++) {
          //console.log('knot', i);
          //console.log('previous', knotPositions[i - 1]);
          //console.log('this', knotPositions[i]);

          if (!isAdjacent(knotPositions[i - 1], knotPositions[i])) {
            const newPosition = moveTail(
              knotPositions[i - 1],
              knotPositions[i]
            );
            knotPositions[i].row = newPosition.row;
            knotPositions[i].column = newPosition.column;

            if (i === 9) {
              //    console.log(`move tail - ${instruction} ${i}`);
              tailPositions.set(knotPositions[9].toString(), 1);
            }
          }

          //    console.log(knotPositions);
        }
      }
    }

    return tailPositions.size;
  }
}
