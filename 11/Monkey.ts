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

  worryReductionFactor: number;

  /**
   *
   */
  inspectionCount: number;

  /**
   *
   */
  constructor(
    items: number[],
    operation: Operation,
    test: Test,
    worryReductionFactor: number
  ) {
    this.items = items;
    this.operation = operation;
    this.test = test;
    this.worryReductionFactor = worryReductionFactor;
    this.inspectionCount = 0;
  }

  inspectItems = (commonFactor: number): Throw[] => {
    const throws: Throw[] = [];
    let monkeyId: number;

    this.items.map((item) => {
      let worryLevel: number = Math.floor(
        this.operation.operate(item) / this.worryReductionFactor
      );

      if (worryLevel % this.test.divisor === 0) {
        monkeyId = this.test.trueMonkey;
      } else {
        monkeyId = this.test.falseMonkey;
      }

      this.inspectionCount++;

      throws.push(new Throw(worryLevel % commonFactor, monkeyId));
    });

    this.items = [];

    return throws;
  };
}
