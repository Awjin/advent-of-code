import { execSync } from "child_process";

process.env["test"] = "true";
execSync(`npx ts-node utils/solve.ts ${process.argv.slice(2).join(" ")}`, {
  stdio: "inherit",
});
delete process.env["test"];
