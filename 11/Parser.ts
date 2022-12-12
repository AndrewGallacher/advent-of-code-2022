import { Monkey } from "./Monkey";
import { Operation } from "./Operation";
import { Test } from "./Test";

export class Parser {
  worryReductionFactor: number;

  constructor(worryReductionFactor: number) {
    this.worryReductionFactor = worryReductionFactor;
  }

  parse = (data: string[]): Monkey[] => {
    const monkeys: Monkey[] = [];

    let i: number = 0;

    while (i < data.length) {
      let line = data[i];

      // Expect "Monkey" header
      if (line.startsWith("Monkey ")) {
        line = data[++i];
      } else {
        throw new Error(`Expected monkey header: ${line}`);
      }

      // Expect items
      const items: number[] = [];
      if (line.startsWith("  Starting items:")) {
        line
          .substring("  Starting items:".length)
          .split(",")
          .map((item) => parseInt(item))
          .forEach((item) => {
            items.push(item);
          });
        line = data[++i];
      } else {
        throw new Error(`Expected starting items: ${line}`);
      }

      // Operation
      let operation: Operation;
      if (line.startsWith("  Operation")) {
        operation = new Operation(line.substring("  Operation:".length));
        line = data[++i];
      } else {
        throw new Error(`Expected operation: ${line}`);
      }

      // Test
      let test: Test;

      let divisor: number;
      if (line.startsWith("  Test: ")) {
        divisor = parseInt(line.split(" ").pop() ?? "#");
        line = data[++i];
      } else {
        throw new Error(`Expected test: ${line}`);
      }

      let trueMonkey: number;
      if (line.startsWith("    If true: ")) {
        trueMonkey = parseInt(line.split(" ").pop() ?? "#");
        line = data[++i];
      } else {
        throw new Error(`Expected true part: ${line}`);
      }

      let falseMonkey: number;
      if (line.startsWith("    If false: ")) {
        falseMonkey = parseInt(line.split(" ").pop() ?? "#");
        line = data[++i];
      } else {
        throw new Error(`Expected false part: ${line}`);
      }

      if (line === "") {
        line = data[++i];
      } else {
        throw new Error(`Expected blank line: ${line}`);
      }

      test = new Test(divisor, trueMonkey, falseMonkey);

      monkeys.push(
        new Monkey(items, operation, test, this.worryReductionFactor)
      );
    }

    return monkeys;
  };
}
