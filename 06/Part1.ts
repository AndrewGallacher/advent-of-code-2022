// Day 6 (Part 1)
import { IPuzzle } from "../src/IPuzzle";

export class Day06Part1 implements IPuzzle<number> {
  solve(data: string[]): number {
    const stream = data[0].split("");

    let currentIndex = 3;
    while (currentIndex < stream.length) {
      let isStartOfPacket = true;
      let packet: string[] = [stream[currentIndex]];
      for (let offset = -3; offset < 0; offset++) {
        if (packet.includes(stream[currentIndex + offset])) {
          isStartOfPacket = false;
        } else {
          packet.push(stream[currentIndex + offset]);
        }
      }

      currentIndex++;
      if (isStartOfPacket) {
        return currentIndex;
      }
    }

    return -1;
  }
}
