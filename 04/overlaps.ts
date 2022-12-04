export function fullOverlaps(assignmentPair: number[][]): boolean {
  if (
    assignmentPair[0][0] <= assignmentPair[1][0] &&
    assignmentPair[0][1] >= assignmentPair[1][1]
  ) {
    return true;
  }

  if (
    assignmentPair[1][0] <= assignmentPair[0][0] &&
    assignmentPair[1][1] >= assignmentPair[0][1]
  ) {
    return true;
  }

  return false;
}

export function partialOverlaps(assignmentPair: number[][]): boolean {
  if (
    assignmentPair[0][0] >= assignmentPair[1][0] &&
    assignmentPair[0][0] <= assignmentPair[1][1]
  ) {
    return true;
  }

  if (
    assignmentPair[0][1] >= assignmentPair[1][0] &&
    assignmentPair[0][1] <= assignmentPair[1][1]
  ) {
    return true;
  }

  if (
    assignmentPair[1][0] >= assignmentPair[0][0] &&
    assignmentPair[1][0] <= assignmentPair[0][1]
  ) {
    return true;
  }

  if (
    assignmentPair[1][1] >= assignmentPair[0][0] &&
    assignmentPair[1][1] <= assignmentPair[0][1]
  ) {
    return true;
  }

  return false;
}
