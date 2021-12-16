import { getData, Packet } from "./utils";

const bits = getData();
const packet = new Packet(bits);
const version = calcVersion(packet);

console.log(version);

function calcVersion(packet: Packet): number {
  return packet.subPackets.reduce((a, b) => a + calcVersion(b), packet.version);
}
