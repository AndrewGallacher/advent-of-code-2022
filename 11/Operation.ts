export class Operation {
  formula: string;

  constructor(formula: string) {
    this.formula = formula;
  }

  operate = (input: number): number => {
    const rhs = this.formula.split("=")[1].trim();

    const tokens = rhs.split(" ");

    const operand1 = tokens[0] === "old" ? input : parseInt(tokens[0]);
    const operator = tokens[1];
    const operand2 = tokens[2] === "old" ? input : parseInt(tokens[2]);

    if (operator === "+") {
      return operand1 + operand2;
    }

    if (operator === "*") {
      return operand1 * operand2;
    }

    throw new Error(`Invalid operator: ${operator}`);
  };
}
