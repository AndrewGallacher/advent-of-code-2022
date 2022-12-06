// Day 6 (Part 2)
import { IPuzzle } from "../src/IPuzzle";
import { PacketFinder } from "./PacketFInder";

export class Day06Part1 implements IPuzzle<number> {
  solve(data: string[]): number {
    const stream = data[0].split("");
    const finder = new PacketFinder(4);
    return finder.find(stream);
  }
}
