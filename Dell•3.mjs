import OpenAI from "openai";
const openai = new OpenAI();
/**
 *
 * Must be one of 1024x1024, 1792x1024, or 1024x1792 for DALL·E-3 models.
 *
 *
 */
const response = await openai.images.generate({
  model: "dall-e-3",
  prompt: "a white siamese cat",
  n: 1,
  // size: "1024x1024",
  // size: "1792x1024",
  size: "1024x1792",
});
const image_url = response.data[0].url;

console.log(image_url);
