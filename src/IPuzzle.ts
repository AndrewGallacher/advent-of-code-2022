export interface IPuzzle<T> {
  solve(data: string[]): T;
}
