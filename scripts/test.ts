import { execSync } from "child_process";

const day = process.argv[2];
const part = process.argv[3];

process.env["aoc-test"] = "set";
execSync(`npx ts-node src/${day}/part${part}.ts`, { stdio: "inherit" });
delete process.env["aoc-test"];
