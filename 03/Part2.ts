// Day 3 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { getPriority } from "./priority";

export class Day03Part2 implements IPuzzle<number> {
  solve(input: string[]): number {
    const groups: string[][] = [];
    let currentGroup: string[] = [];
    let groupSize = 3;
    input.forEach((rucksack) => {
      if (rucksack !== "") {
        if (groupSize === 3) {
          groupSize = 0;
          currentGroup = [];
          groups.push(currentGroup);
        }

        currentGroup.push(rucksack);
        groupSize++;
      }
    });

    console.log(groups);

    let totalPriority = 0;
    groups.forEach((group) => {
      let commonType = "?";
      group[0].split("").forEach((type) => {
        if (group[1].indexOf(type) > -1) {
          if (group[2].indexOf(type) > -1) {
            commonType = type;
          }
        }
      });

      const priority = getPriority(commonType);
      console.log(`Common type ${commonType} has priority ${priority}`);
      totalPriority += priority;
    });

    return totalPriority;
  }
}
