export class Parser {
  parse(data: string[]): number[][] {
    const wood: number[][] = [];

    data.forEach((line) => {
      if (line !== "") {
        const row = line.split("").map((tree) => parseInt(tree));
        wood.push(row);
      }
    });

    return wood;
  }
}
