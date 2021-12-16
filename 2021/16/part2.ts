import { getData, Packet } from "./utils";

const bits = getData();
const packet = new Packet(bits);

console.log(packet.value);
