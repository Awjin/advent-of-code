import { execSync } from "child_process";

import { dayString } from "./input";

const year = process.argv[2];
const day = dayString(process.argv[3]);
const part = process.argv[4];

execSync(`npx ts-node ${year}/${day}/part${part}.ts`, { stdio: "inherit" });
