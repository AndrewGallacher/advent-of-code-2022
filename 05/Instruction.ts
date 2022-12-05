export class Instruction {
  count: number;
  from: number;
  to: number;

  constructor(count: number, from: number, to: number) {
    this.count = count;
    this.from = from;
    this.to = to;
  }
}
