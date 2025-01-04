import { generateText } from "ai";

export const ask = async (prompt, model) => {
  const { text } = await generateText({
    model,
    prompt,
  });
  return text;
};
