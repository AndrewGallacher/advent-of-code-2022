import { Instruction } from "./Instruction";
import { Position } from "./Position";

export function moveHead(
  startingPosition: Position,
  direction: string
): Position {
  let rowOffset = 0;
  let columnOffset = 0;

  if (direction === "U") {
    rowOffset++;
  } else if (direction === "D") {
    rowOffset--;
  } else if (direction === "L") {
    columnOffset--;
  } else if (direction === "R") {
    columnOffset++;
  } else {
    throw new Error(`Invalid instruction ${direction}`);
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

  let columnOffset = 0;
  if (columnDifference !== 0) {
    columnOffset = columnDifference > 0 ? 1 : -1;
  }

  let rowOffset = 0;
  if (rowDifference !== 0) {
    rowOffset = rowDifference > 0 ? 1 : -1;
  }

  if (absoluteValue(columnDifference) > 2) {
    throw new Error("Horizontal gap is too big");
  }

  if (absoluteValue(rowDifference) > 2) {
    throw new Error("Verical gap is too big");
  }

  // // Same row
  // if (rowDifference === 0) {
  //   return new Position(tailPosition.row, tailPosition.column + columnOffset);
  // }

  // // Same column
  // if (columnDifference === 0) {
  //   return new Position(tailPosition.row + rowOffset, tailPosition.column);
  // }

  // if (absoluteValue(rowDifference) > 1) {
  //   newColumn = headPosition.column;
  //   newRow = headPosition.row - rowDifference / absoluteValue(rowDifference);
  // } else if (absoluteValue(columnDifference) > 1) {
  //   newRow = headPosition.row;
  //   newColumn =
  //     headPosition.column - columnDifference / absoluteValue(columnDifference);
  // }

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

  // if (rowDifference > 1 && columnDifference > 1) {
  //  throw new Error("Diagonal gap too big");
  // }

  if (rowDifference > 2 || columnDifference > 2) {
    throw new Error("Any gap too big");
  }

  return rowDifference < 2 && columnDifference < 2;
}
