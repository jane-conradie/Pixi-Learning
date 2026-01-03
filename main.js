import {
  Application,
  Graphics,
  Text,
  TextStyle,
  Assets,
  Sprite,
  Container,
  Spritesheet,
  AnimatedSprite,
  TilingSprite,
  BlurFilter,
  NoiseFilter,
} from "pixi.js";

import { Howl } from "howler";

import { initDevtools } from "@pixi/devtools";

(async () => {
  const app = new Application();

  await app.init({
    resizeTo: window,
    // backgroundAlpha: 0.5,
    // backgroundColor: 0xffea00,
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
  // const asset = await Assets.load("/images/aries.png");
  // const sprite = Sprite.from(asset);

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

  // ANIMATION AND SPRITE SHEETS
  // const sheetData = {
  //   frames: {
  //     cry1: {
  //       frame: { x: 0, y: 0, w: 64, h: 64 },
  //       sourceSize: { w: 64, h: 64 },
  //       spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 },
  //     },
  //     cry2: {
  //       frame: { x: 64, y: 0, w: 64, h: 64 },
  //       sourceSize: { w: 64, h: 64 },
  //       spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 },
  //     },
  //     cry3: {
  //       frame: { x: 128, y: 0, w: 64, h: 64 },
  //       sourceSize: { w: 64, h: 64 },
  //       spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 },
  //     },
  //     cry4: {
  //       frame: { x: 192, y: 0, w: 64, h: 64 },
  //       sourceSize: { w: 64, h: 64 },
  //       spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 },
  //     },
  //     shock1: {
  //       frame: { x: 0, y: 64, w: 64, h: 64 },
  //       sourceSize: { w: 64, h: 64 },
  //       spriteSourceSize: { x: 0, y: 64, w: 64, h: 64 },
  //     },
  //     shock2: {
  //       frame: { x: 64, y: 64, w: 64, h: 64 },
  //       sourceSize: { w: 64, h: 64 },
  //       spriteSourceSize: { x: 0, y: 64, w: 64, h: 64 },
  //     },
  //     sleep1: {
  //       frame: { x: 0, y: 108, w: 64, h: 86 },
  //       sourceSize: { w: 64, h: 86 },
  //       spriteSourceSize: { x: 0, y: 108, w: 64, h: 86 },
  //     },
  //     sleep2: {
  //       frame: { x: 64, y: 108, w: 64, h: 86 },
  //       sourceSize: { w: 64, h: 86 },
  //       spriteSourceSize: { x: 0, y: 108, w: 64, h: 86 },
  //     },
  //     sleep3: {
  //       frame: { x: 128, y: 108, w: 64, h: 86 },
  //       sourceSize: { w: 64, h: 86 },
  //       spriteSourceSize: { x: 0, y: 108, w: 64, h: 86 },
  //     },
  //     sleep4: {
  //       frame: { x: 192, y: 108, w: 64, h: 86 },
  //       sourceSize: { w: 64, h: 86 },
  //       spriteSourceSize: { x: 0, y: 108, w: 64, h: 86 },
  //     },
  //   },
  //   meta: {
  //     image: "/public/spritesheets/FreeSprites.png",
  //     size: { w: 256, h: 435 },
  //   },
  //   animations: {
  //     cry: ["cry1", "cry2", "cry3", "cry4"],
  //     shock: ["shock1", "shock2"],
  //     sleep: ["sleep1", "sleep2", "sleep3", "sleep4"],
  //   },
  // };

  // load sheet image as texture
  //const sheetTexture = await Assets.load(sheetData.meta.image);

  // create sprite sheet with texture and sheet data
  //const sheet = new Spritesheet(sheetTexture, sheetData);

  // apply configurations
  //await sheet.parse();

  // display sprite from sheet
  // const crying = new AnimatedSprite(sheet.animations.cry);

  // const shock = new AnimatedSprite(sheet.animations.shock);

  // const sleep = new AnimatedSprite(sheet.animations.sleep);

  // app.stage.addChild(crying);
  // app.stage.addChild(shock);
  // app.stage.addChild(sleep);

  // play animations
  // crying.play();
  // shock.play();
  // sleep.play();

  // tweak animations
  // crying.animationSpeed = 0.13;
  // shock.animationSpeed = 0.06;
  // sleep.animationSpeed = 0.05;

  // TILING SPRITES
  const bg = await Assets.load("https://i.imgur.com/LBTK8dw.png");

  const bgTile = new TilingSprite({
    texture: bg,
    width: app.screen.width,
    height: app.screen.height,
  });

  app.stage.addChild(bgTile);

  app.ticker.add(function () {
    bgTile.tilePosition.x -= 1;
  });

  // FILTERS
  bgTile.filters = [new BlurFilter({ strength: 5 })];

  // AUDIO - not built-in, use howler
  const mainTheme = new Howl({
    src: ["/public/audio/Witch Theme.wav"],
    volume: 0.2,
    loop: true,
  });

  mainTheme.play();
})();
