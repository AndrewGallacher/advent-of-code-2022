// Day 11 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { MonkeyBusiness } from "./MonkeyBusiness";

export class Day11Part2 implements IPuzzle<number> {
  solve(data: string[]): number {
    const monkeyBusiness = new MonkeyBusiness(1, 10000);
    return monkeyBusiness.solve(data);
  }
}
