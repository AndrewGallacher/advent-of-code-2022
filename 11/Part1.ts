// Day 11 (Part 1)
import { IPuzzle } from "../src/IPuzzle";
import { Parser } from "./Parser";

export class Day11Part1 implements IPuzzle<number> {
  solve(data: string[]): number {
    const parser = new Parser();
    const monkeys = parser.parse(data);

    // Do 20 rounds
    for (let round = 0; round < 20; round++) {
      monkeys.map((monkey) => {
        const throws = monkey.inspectItems();

        throws.map((t) => {
          monkeys[t.monkeyId].items.push(t.worryLevel);
        });
      });
    }

    var counts = monkeys
      .map((monkey) => monkey.inspectionCount)
      .sort((a, b) => (a < b ? 1 : -1));

    return counts[0] * counts[1];
  }
}
