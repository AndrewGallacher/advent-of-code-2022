// Day 11 (Part 1)
import { IPuzzle } from "../src/IPuzzle";
import { MonkeyBusiness } from "./MonkeyBusiness";

export class Day11Part1 implements IPuzzle<number> {
  solve(data: string[]): number {
    const monkeyBusiness = new MonkeyBusiness(3, 20);
    return monkeyBusiness.solve(data);
  }
}
