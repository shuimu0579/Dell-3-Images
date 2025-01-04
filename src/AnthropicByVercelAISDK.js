import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
const { text } = await generateText({
  model: anthropic("claude-3-opus-20240229"),
  prompt: "What is love?",
});
console.log(text);
