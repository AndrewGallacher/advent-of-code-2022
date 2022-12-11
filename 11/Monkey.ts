import { Operation } from "./Operation";
import { Test } from "./Test";
import { Throw } from "./Throw";

export class Monkey {
  /**
   *
   */
  items: number[];

  /**
   *
   */
  operation: Operation;

  /**
   *
   */
  test: Test;

  /**
   *
   */
  inspectionCount: number;

  /**
   *
   */
  constructor(items: number[], operation: Operation, test: Test) {
    this.items = items;
    this.operation = operation;
    this.test = test;
    this.inspectionCount = 0;
  }

  inspectItems = (): Throw[] => {
    const throws: Throw[] = [];
    let monkeyId: number;

    this.items.map((item) => {
      let worryLevel = Math.floor(this.operation.operate(item) / 3);
      if (worryLevel % this.test.divisor === 0) {
        monkeyId = this.test.trueMonkey;
      } else {
        monkeyId = this.test.falseMonkey;
      }

      this.inspectionCount++;

      throws.push(new Throw(worryLevel, monkeyId));
    });

    this.items = [];

    return throws;
  };
}
