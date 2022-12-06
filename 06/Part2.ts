// Day 6 (Part 2)
import { IPuzzle } from "../src/IPuzzle";

export class Day06Part2 implements IPuzzle<number> {
  solve(data: string[]): number {
    const stream = data[0].split("");

    let markerLength = 14;

    let currentIndex =  markerLength - 1;
    while (currentIndex < stream.length) {
      let isStartOfPacket = true;
      let packet: string[] = [stream[currentIndex]];
      for (let offset = (1 - markerLength); offset < 0; offset++) {
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
