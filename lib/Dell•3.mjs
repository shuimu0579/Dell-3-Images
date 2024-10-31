/**
 *
 * style(‘natural’ or ‘vivid’):, Defaults to ‘vivid’.
 * The style of the generated images. Must be one of vivid or natural. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images.
 *
 * size: Must be one of 1024x1024, 1792x1024, or 1024x1792 for DALL·E-3 models.
 *
 * quality (‘standard’ or ‘hd’): Defaults to ‘standard’.
 * The quality of the image that will be generated. ‘hd’ creates images with finer details and greater consistency across the image. Defaults to ‘standard’.
 *
 *
 *
 */

import OpenAI from "openai";
const openai = new OpenAI();
// const openai = new OpenAI({
//   apiKey: "you-api_key",
// });

const response = await openai.images.generate({
  model: "dall-e-3",
  // quality: "hd",
  // style: "natural", // natural or vivid
  prompt: "a white siamese cat",
  n: 1,
  size: "1024x1024",
  // size: "1024x1792",
  // size: "1792x1024",
});

const image_url = response.data[0].url;
console.log(image_url);
