// Day 3 (Part 1)
import { IPuzzle } from "../src/IPuzzle";
import { getPriority } from "./priority";

export class Day03Part1 implements IPuzzle {
  solve(input: string[]): number {
    let i = 0;
    let totalPriority = 0;
    input.forEach((rucksack) => {
      console.log(`Rucksack ${i}: ${rucksack}`);
      const itemCount = rucksack.length;
      const compartment1 = rucksack.substring(0, itemCount / 2);
      const compartment2 = rucksack.substring(itemCount / 2);

      console.log(compartment1);
      console.log(compartment2);
      i++;

      let commonType = "?";
      compartment1.split("").forEach((type) => {
        if (compartment2.indexOf(type) > -1) {
          commonType = type;
        }
      });

      const priority = getPriority(commonType);
      console.log(`Common type ${commonType} has priority ${priority}`);
      totalPriority += priority;
    });

    return totalPriority;
  }
}
