import { read } from "../../utils/input";

export class Packet {
  readonly version: number;
  readonly type: number;
  readonly value: number;
  readonly subPackets: Packet[] = [];

  constructor(protected remainingBits: string) {
    this.version = this.consumeNum(3);
    this.type = this.consumeNum(3);

    if (this.type === 4) {
      this.value = this.consumeLiteral();
      return;
    }

    const lengthType = this.consumeNum(1);
    this.subPackets =
      lengthType === 0
        ? this.consumeSubPacketsByLength()
        : this.consumeSubPacketsByCount();

    switch (this.type) {
      case 0:
        this.value = this.subPackets.reduce((a, b) => a + b.value, 0);
        break;
      case 1:
        this.value = this.subPackets.reduce((a, b) => a * b.value, 1);
        break;
      case 2:
        this.value = this.subPackets.sort((a, b) => a.value - b.value)[0].value;
        break;
      case 3:
        this.value = this.subPackets.sort((a, b) => b.value - a.value)[0].value;
        break;
      case 5:
        this.value =
          this.subPackets[0].value > this.subPackets[1].value ? 1 : 0;
        break;
      case 6:
        this.value =
          this.subPackets[0].value < this.subPackets[1].value ? 1 : 0;
        break;
      case 7:
        this.value =
          this.subPackets[0].value === this.subPackets[1].value ? 1 : 0;
        break;
      default:
        throw Error("Invalid packet type.");
    }
  }

  private consumeNum(length: number): number {
    return parseInt(this.consumeString(length), 2);
  }

  private consumeString(length: number): string {
    const string = this.remainingBits.slice(0, length);
    this.remainingBits = this.remainingBits.slice(length);
    return string;
  }

  private consumeLiteral(): number {
    let bits = "";
    let go = true;
    while (go) {
      go = this.consumeNum(1) === 1;
      bits += this.consumeString(4);
    }
    return parseInt(bits, 2);
  }

  private consumeSubPacketsByLength(): Packet[] {
    const packets = [];
    const limit = this.consumeNum(15);
    let packetBits = this.remainingBits.slice(0, limit);
    this.remainingBits = this.remainingBits.slice(limit);
    while (packetBits) {
      const packet = new Packet(packetBits);
      packets.push(packet);
      packetBits = packet.remainingBits;
    }
    return packets;
  }

  private consumeSubPacketsByCount(): Packet[] {
    const packets = [];
    const limit = this.consumeNum(11);
    while (packets.length < limit) {
      const packet = new Packet(this.remainingBits);
      packets.push(packet);
      this.remainingBits = packet.remainingBits;
    }
    return packets;
  }
}

export function getData(): string {
  const hex = read(2021, 16)[0][0];
  let bits = "";
  for (const char of hex) {
    bits += parseInt(char, 16).toString(2).padStart(4, "0");
  }
  return bits;
}
