import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Assets,
  Sprite,
  Container,
} from "pixi.js";

import { initDevtools } from "@pixi/devtools";

(async () => {
  const app = new Application();

  await app.init({
    resizeTo: window,
    backgroundAlpha: 0.5,
    backgroundColor: 0xffea00,
  });

  initDevtools({ app });

  // offset extra scroll due to matching window size
  app.canvas.style.position = "absolute";

  // LEARN always adding canvas
  document.body.appendChild(app.canvas);

  // GRAPHICS
  // LEARN different shapes
  // const rectangle = new Graphics()
  //   .rect(200, 200, 200, 180)
  //   .fill(0xff0000)
  //   .stroke({
  //     width: 10,
  //     color: 0x00ff00,
  //   });
  // app.stage.addChild(rectangle);

  //   const line = new Graphics().moveTo(100, 700).lineTo(1200, 600).stroke({
  //     width: 5,
  //     color: 0x55faff,
  //   });
  //   app.stage.addChild(line);

  //   const triangle = new Graphics()
  //     .poly([600, 50, 720, 400, 69, 420])
  //     .fill(0x8f5ff2);
  //   app.stage.addChild(triangle);

  //   const star = new Graphics().star(1000, 250, 25, 80, 20).fill(0x8f5ff2);
  //   app.stage.addChild(star);

  // TEXT & TEXTSTYLE
  //   const style = new TextStyle({
  //     fontSize: 12,
  //     fontStyle: "italic",
  //   });

  //   const text = new Text({
  //     text: "Hello hi",
  //     style,
  //   });

  //   app.stage.addChild(text);

  // SPRITES
  //   const asset = await Assets.load("/images/aries.png");
  //   const sprite = Sprite.from(asset);

  //   // rotation

  //   sprite.anchor.set(0.5);

  //   // translation

  //   sprite.x = app.canvas.width / 2;
  //   sprite.y = app.canvas.height / 2;

  // sizing

  // absolute
  //   sprite.width = 200;
  //   sprite.height = 400;

  // relative
  //   sprite.scale.set(0.1, 0.1);

  //   app.stage.addChild(sprite);

  // EVENTS AND INTERACTIVITY
  //   sprite.eventMode = "static";
  //   sprite.cursor = "pointer";

  //   sprite.on("mousedown", () => {
  //     sprite.position.x -= 10;
  //   });

  // TICKER
  //   app.ticker.add(() => {
  //     const snow = new Graphics()
  //       .circle(
  //         Math.random() * app.screen.width,
  //         Math.random() * app.screen.height,
  //         Math.random() * 20
  //       )
  //       .fill("ffffff");

  //     app.stage.addChild(snow);
  //   });

  // CONTAINER
  // const parent = new Container();
  // app.stage.addChild(parent);

  // const rect1 = new Graphics().rect(200, 150, 300, 300).fill(0x8f5ff2);
  // const rect2 = new Graphics().rect(800, 250, 110, 80).fill(0x8f5ff2);

  // parent.addChild(rect1);
  // parent.addChild(rect2);

  // ASSETS
  //   const asset = await Assets.load("/images/aries.png");
  //   const sprite = Sprite.from(asset);

  // OR

  // const assetPromise = Assets.load("/images/aries.png");
  // assetPromise.then((resolvedAsset) => {
  //   const sprite = Sprite.from(resolvedAsset);
  //   app.stage.addChild(sprite);

  //   sprite.width = 200;
  //   sprite.height = 200;
  // });

  // bundles
  // Assets.addBundle("memes", {
  //   duck: "/images/duck.jpg",
  //   banana: "images/banana.png",
  // });

  // Assets.addBundle("pretty", {
  //   aries: "images/aries.png",
  // });

  // const memes = await Assets.loadBundle("memes");
  // const pretties = await Assets.loadBundle("pretty");

  // const sprite_1 = Sprite.from(memes.duck);
  // const sprite_2 = Sprite.from(memes.banana);
  // const sprite_3 = Sprite.from(pretties.aries);

  // sprite_3.height = 200;
  // sprite_3.width = 200;

  // app.stage.addChild(sprite_1);
  // app.stage.addChild(sprite_2);
  // app.stage.addChild(sprite_3);

  // LEARN
  // manifest.json

  // await Assets.init({ manifest: "/manifest.json" });

  // const memeAssets = await Assets.loadBundle("memes");

  // const sprite = Sprite.from(memeAssets.duck);
  // app.stage.addChild(sprite);

  // const sprite1 = Sprite.from(memeAssets.banana);
  // app.stage.addChild(sprite1);
})();
