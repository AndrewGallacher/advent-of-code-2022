// Day 6 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { PacketFinder } from "./PacketFinder";

export class Day06Part2 implements IPuzzle<number> {
  solve(data: string[]): number {
    const stream = data[0].split("");
    const finder = new PacketFinder(14);
    return finder.find(stream);
  }
}
