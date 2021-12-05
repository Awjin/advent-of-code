import { execSync } from "child_process";

const problem = process.argv[2];
const part = process.argv[3];
execSync(`npx ts-node src/${problem}/part${part}.ts`, { stdio: "inherit" });
