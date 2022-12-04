export function parse(data: string[]): number[][][] {
  const assignmentPairs: number[][][] = [];

  data
    .filter((item) => item !== "")
    .forEach((item) => {
      const assignment = item.split(",");
      if (assignment.length !== 2) {
        throw new Error(`Invalid assignment pair: ${item}`);
      }

      const elf1 = assignment[0].split("-");
      const elf2 = assignment[1].split("-");

      const assignmentPair: number[][] = [];
      assignmentPair.push([parseInt(elf1[0]), parseInt(elf1[1])]);
      assignmentPair.push([parseInt(elf2[0]), parseInt(elf2[1])]);

      assignmentPairs.push(assignmentPair);
    });

  return assignmentPairs;
}
