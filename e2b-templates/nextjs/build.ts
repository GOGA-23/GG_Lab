import "dotenv/config";
import { Template, defaultBuildLogger } from "e2b";
import { template as nextJSTemplate } from "./template";

async function build() {
  await Template.build(nextJSTemplate, "gg-lab", {
    cpuCount: 4,
    memoryMB: 4096,
    onBuildLogs: defaultBuildLogger(),
  });
}

build().catch((error) => {
  console.error("Build failed:", error);
  process.exit(1);
});
