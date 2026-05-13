// template.ts
import { Template, waitForURL } from "e2b";

export const template = Template()
  .fromNodeImage("25-slim")
  .setWorkdir("/home/user/gglab")
  .runCmd("npx create-next-app@latest . --yes")
  .runCmd("npx shadcn@latest init -d")
  .runCmd("npx shadcn@latest add --all")
  .runCmd("mv /home/user/gglab/* /home/user/ && rm -rf /home/user/gglab")
  .setWorkdir("/home/user")
  .setStartCmd("npx next --turbo", waitForURL("http://localhost:3000"));
