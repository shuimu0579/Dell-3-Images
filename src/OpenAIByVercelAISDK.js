import { openai } from "@ai-sdk/openai";
import { ask } from "./lib/ask.js";

const prompt = `What is love?`;
const model = "gpt-4o-mini-2024-07-18";

const openaiResult = await ask(prompt, openai(model));
console.log(openaiResult);
