 
export class Instruction {
  direction: string;

  length: number;

  constructor(direction: string, length: number) {
    this.direction = direction;
    this.length = length;
  }
}
