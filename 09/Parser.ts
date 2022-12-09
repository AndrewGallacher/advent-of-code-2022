import { Instruction } from "./Instruction";

export class Parser {
  parse(data: string[]): Instruction[] {
    const instructions: Instruction[] = [];

    for (let index in data.filter((item) => item !== "")) {
      const line = data[index];
      const token = line.split(" ");

      const direction = token[0];
      const length = parseInt(token[1]);
      instructions.push(new Instruction(direction, length));
    }

    return instructions;
  }
}
