import { Sandbox } from "e2b";
import { inngest } from "./client";
import { gemini, createAgent, openai } from "@inngest/agent-kit";

export const codeAgent = inngest.createFunction(
  {
    id: "code-agent",
    triggers: { event: "code-agent/code.requested" },
    retries: 3,
    timeouts: { finish: "5m" },
  },

  async ({ event, step }) => {
    console.log(event.data.description);
    // sandbox boot can take a while, so we run it as a step to ensure we have proper timeouts and logging
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("gokulgandhi2301/gg-lab", {
        timeoutMs: 300_000,
        apiKey: process.env.E2B_API_KEY,
      });
      return sandbox.sandboxId;
    });

    // Create an agent and run it to process the task. We can create multiple steps within the same function to break up the execution and have better logging and error handling.

    const agent = createAgent({
      name: "Code Agent",
      description: "Processes code-related tasks created in the app",
      system:
        "You are a helpful assistant that processes code-related tasks created in the app.",
      model: openai({
        model: "openrouter/free",
        baseUrl: "https://openrouter.ai/api/v1",
        apiKey: process.env.OPENROUTER_API_KEY,
      }),
    });

    const { output } = await agent.run("Code Agent");

    const sandboxurl = await step.run("get-sandbox-url", async () => {
      const sandbox = await Sandbox.connect(sandboxId);
      const host = sandbox.getHost(3000);
      return `http://${host}`;
    });

    return { message: output, sandboxurl };
  },
);
