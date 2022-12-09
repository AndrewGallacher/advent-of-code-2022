// Day 01 (Part 1)
import { IPuzzle } from "../src/IPuzzle";

export class Day01Part1 implements IPuzzle<number> {
  solve(data: string[]): number {
    let elf = 1;
    let totalCalories = 0;
    let calorieTotals: number[] = [];

    data.forEach((item) => {
      if (item === "") {
        elf++;
        calorieTotals.push(totalCalories);
        totalCalories = 0;
      } else {
        totalCalories += parseInt(item);
      }
    });

    calorieTotals.sort((a, b) => (a < b ? 1 : -1));
    const maximumTotalCalories = calorieTotals[0];

    return maximumTotalCalories;
  }
}
