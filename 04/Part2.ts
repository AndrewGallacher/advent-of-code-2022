// Day 4 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { partialOverlaps as overlaps } from "./overlaps";
import { parse } from "./parser";

export class Day04Part2 implements IPuzzle<number> {
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
