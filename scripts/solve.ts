import { execSync } from "child_process";
import { dayString } from "../src/utils";

const day = dayString(process.argv[2]);
const part = process.argv[3];

execSync(`npx ts-node src/${day}/part${part}.ts`, { stdio: "inherit" });
