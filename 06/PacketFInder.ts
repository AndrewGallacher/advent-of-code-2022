export class PacketFinder {
  markerLength: number;

  constructor(markerLength: number) {
    this.markerLength = markerLength;
  }

  find(stream: string[]): number {
    let currentIndex = this.markerLength - 1;
    while (currentIndex < stream.length) {
      let isStartOfPacket = true;
      let packet: string[] = [stream[currentIndex]];
      for (let offset = 1 - this.markerLength; offset < 0; offset++) {
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
