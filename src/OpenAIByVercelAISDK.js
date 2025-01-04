import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";
const { text } = await generateText({
  model: openai("gpt-4o-mini-2024-07-18"),
  prompt: "What is love?",
});
console.log(text);
