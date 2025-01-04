import { anthropic } from "@ai-sdk/anthropic";
import { ask } from "./lib/ask.js";

const prompt = `What is love?`;
const model = "claude-3-5-sonnet-latest";

const anthropicResult = await ask(prompt, anthropic(model));
console.log(anthropicResult);
