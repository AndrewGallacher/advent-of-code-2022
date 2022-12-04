// Day 4 (Part 1)
import { IPuzzle } from "../src/IPuzzle";
import { fullOverlaps as overlaps } from "./overlaps";
import { parse } from "./parser";

export class Day04Part1 implements IPuzzle {
  solve(input: string[]): number {
    var assignmentPairs = parse(input);
    let overlappingAssignments = 0;
    assignmentPairs.forEach((assignmentPair) => {
      if (overlaps(assignmentPair)) {
        overlappingAssignments++;
      }
    });

    return overlappingAssignments;
  }
}
