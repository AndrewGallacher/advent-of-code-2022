import { IPuzzle } from "../src/IPuzzle";
import { Parser } from "./Parser";

export class MonkeyBusiness implements IPuzzle<number> {
  worryReductionFactor: number;

  numberOfRounds: number;

  constructor(worryReductionFactor: number, numberOfRounds: number) {
    this.worryReductionFactor = worryReductionFactor;
    this.numberOfRounds = numberOfRounds;
  }

  solve(data: string[]): number {
    const parser = new Parser(this.worryReductionFactor);
    const monkeys = parser.parse(data);

    let commonFactor: number = 1;
    monkeys.forEach((monkey) => {
      commonFactor *= monkey.test.divisor;
    });

    // Do the rounds
    for (let round = 0; round < this.numberOfRounds; round++) {
      monkeys.map((monkey) => {
        const throws = monkey.inspectItems(commonFactor);

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
