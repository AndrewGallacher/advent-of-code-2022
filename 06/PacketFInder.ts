export class PacketFinder {
  packetLength: number;

  constructor(packetLength: number) {
    this.packetLength = packetLength;
  }

  find(data: string[]): number {
    return 0;
  }
}
