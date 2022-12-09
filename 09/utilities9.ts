import { Instruction } from "./Instruction";
import { Position } from "./Position";

export function moveHead(
  startingPosition: Position,
  instruction: Instruction
): Position {
  let rowOffset = 0;
  let columnOffset = 0;

  if (instruction.direction === "U") {
    rowOffset += instruction.length;
  } else if (instruction.direction === "D") {
    rowOffset -= instruction.length;
  } else if (instruction.direction === "L") {
    columnOffset -= instruction.length;
  } else if (instruction.direction === "R") {
    columnOffset += instruction.length;
  } else {
    throw new Error(`Invalid instruction ${instruction}`);
  }

  return new Position(
    startingPosition.row + rowOffset,
    startingPosition.column + columnOffset
  );
}

export function absoluteValue(value: number): number {
  if (value < 0) {
    return 0 - value;
  }

  return value;
}

export function moveTail(
  headPosition: Position,
  tailPosition: Position
): Position {
  let newRow = tailPosition.row;
  let newColumn = tailPosition.column;

  const rowDifference = headPosition.row - tailPosition.row;
  const columnDifference = headPosition.column - tailPosition.column;

  if (absoluteValue(rowDifference) > 1) {
    newColumn = headPosition.column;
    newRow += rowDifference / absoluteValue(rowDifference);
  } else if (absoluteValue(columnDifference) > 1) {
    newRow = headPosition.row;
    newColumn += columnDifference / absoluteValue(columnDifference);
  }

  return new Position(newRow, newColumn);
}

export function isAdjacent(
  headPosition: Position,
  tailPosition: Position
): boolean {
  const rowDifference = absoluteValue(headPosition.row - tailPosition.row);
  const columnDifference = absoluteValue(
    headPosition.column - tailPosition.column
  );

  return rowDifference < 2 && columnDifference < 2;
}
