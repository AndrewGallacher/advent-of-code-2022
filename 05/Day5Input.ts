import { Instruction } from "./Instruction";

export class Day5Input {
  initialState: string[][];
  instructions: Instruction[];

  constructor(initialState: string[][], instructions: Instruction[]) {
    this.initialState = initialState;
    this.instructions = instructions;
  }
}
