import { Instruction } from "./Instruction";
import { Position } from "./Position";

export function moveHead(
  startingPosition: Position,
  direction: string
): Position {
  let row = startingPosition.row;
  let column = startingPosition.column;

  if (direction === "U") {
    row++;
  } else if (direction === "D") {
    row--;
  } else if (direction === "L") {
    column--;
  } else if (direction === "R") {
    column++;
  } else {
    throw new Error(`Invalid instruction ${direction}`);
  }

  return new Position(row, column);
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

  if (absoluteValue(columnDifference) > 2) {
    throw new Error("Horizontal gap is too big");
  }

  if (absoluteValue(rowDifference) > 2) {
    throw new Error("Verical gap is too big");
  }

  let columnOffset = 0;
  if (columnDifference !== 0) {
    columnOffset = columnDifference > 0 ? 1 : -1;
  }

  let rowOffset = 0;
  if (rowDifference !== 0) {
    rowOffset = rowDifference > 0 ? 1 : -1;
  }

  return new Position(newRow + rowOffset, newColumn + columnOffset);
}

export function isAdjacent(
  headPosition: Position,
  tailPosition: Position
): boolean {
  const rowDifference = absoluteValue(headPosition.row - tailPosition.row);
  const columnDifference = absoluteValue(
    headPosition.column - tailPosition.column
  );

  if (rowDifference > 2 || columnDifference > 2) {
    throw new Error("Gap too big");
  }

  return rowDifference < 2 && columnDifference < 2;
}
