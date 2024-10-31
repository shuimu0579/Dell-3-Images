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

// 新建 openai 对象
import OpenAI from "openai";
const openai = new OpenAI();

// 验证网络连接
console.log("Testing connection...");
try {
  const response = await fetch("https://api.openai.com/v1/models");
  console.log("Connection status:", response.status);
} catch (e) {
  console.error("Connection error:", e);
}

// 图片生成响应
var prompt = `
One bright morning, a curious girl named Emma found a shiny pair of binoculars in her backyard. “Wow! I can see far away!” she said, her eyes sparkling with excitement. She couldn’t wait to explore!

Emma grabbed her backpack, filled it with snacks, and set off for an adventure in the nearby woods. With her binoculars hanging around her neck, she walked among the tall trees. “What will I find?” she wondered.

As she hiked, Emma spotted a beautiful bird perched on a branch. She lifted her binoculars and looked closely. “Look at its bright blue feathers!” she exclaimed. The bird chirped happily, as if saying hello!

Next, Emma heard a rustling sound in the bushes. She quickly raised her binoculars and saw a little squirrel scampering up a tree, its fluffy tail bouncing. “You’re so silly!” she laughed, watching it hide behind a big leaf.

Suddenly, Emma saw something sparkling in the sunlight. She hurried over and found a tiny stream filled with shiny pebbles. “This is amazing!” she shouted, feeling the cool water splash on her toes.

After a fun-filled day of exploring, Emma headed home, her heart full of joy. “I can’t wait for my next adventure with my binoculars!” she said, dreaming of all the wonders yet to discover.
`;

const response = await openai.images.generate({
  model: "dall-e-3",
  quality: "hd",
  style: "natural", // natural or vivid
  prompt,
  n: 1,
  // size: "1024x1024",
  // size: "1024x1792",
  size: "1792x1024",
});
const image_url = response.data[0].url;

console.log(image_url);
