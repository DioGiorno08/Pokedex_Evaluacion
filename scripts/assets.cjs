const sharp = require("sharp");
const fs = require("fs");
const svg = fs.readFileSync("assets/master-ball.svg", "utf8");
(async () => {
  await sharp(Buffer.from(svg)).png().toFile("assets/icon.png");
  const transparent = svg.replace(/<rect[^>]+\/>/, "");
  await sharp(Buffer.from(transparent))
    .png()
    .toFile("assets/adaptive-icon.png");
  await sharp(Buffer.from(transparent))
    .resize(512)
    .png()
    .toFile("assets/splash-icon.png");
  await sharp(Buffer.from(svg)).resize(64).png().toFile("assets/favicon.png");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
