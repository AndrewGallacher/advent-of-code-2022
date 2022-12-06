import { Day5Input } from "./Day5Input";
import { Instruction } from "./Instruction";

export function parse(data: string[]): Day5Input {
  const stack: string[] = [];

  let index = 0;

  while (!data[index].startsWith(" 1 ")) {
    stack.push(data[index]);
    index++;
  }

  const indexLine = data[index];
  const numberOfStacks = indexLine.split("  ").length;
  index++;

  const initialState: string[][] = [];
  for (let i = 0; i < numberOfStacks; i++) {
    initialState.push([]);
  }

  while (stack.length > 0) {
    const level = stack.pop();

    let startIndex = 0;
    for (let column = 0; column < numberOfStacks; column++) {
      const item = level?.substring(startIndex, startIndex + 3);

      if (item!.trim() !== "") {
        var type = item!.substr(1, 1);
        initialState[column].push(type);
      }

      startIndex = startIndex + 4;
    }
  }

  // skip the blank line
  index++;

  const instructions: Instruction[] = [];
  while (data[index].length > 0) {
    const line = data[index].split(" ");
    instructions.push(
      new Instruction(parseInt(line[1]), parseInt(line[3]), parseInt(line[5]))
    );

    index++;
  }

  return new Day5Input(initialState, instructions);
}
