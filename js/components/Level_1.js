class Level_1 {
  scena = new Scena("./js/scena/scena.json");
  player = new Player("player");
  animate = new Animate();
  mapPlatform = new TileMap(this.scena);
  mapPlatformF = new TileMap(this.scena);
  mapPlatformF2 = new TileMap(this.scena);
  mapPlatformF3 = new TileMap(this.scena);
  mapPlatformF4 = new TileMap(this.scena);
  mapPlatformF5 = new TileMap(this.scena);
  map3 = new TileMap(this.scena);
  map8_1 = new TileMap(this.scena);
  map8_3 = new TileMap(this.scena);
  map9 = new TileMap(this.scena);
  map9_1 = new TileMap(this.scena);
  map9_2 = new TileMap(this.scena);
  map9_3 = new TileMap(this.scena);
  bg = new TileMap(this.scena);
  platform = new Body("platform");
  platform_b = new Body("platform_b");
  events = new Events();
  portal = new Portal("portal");
  crystal = new Crystal();

  preload() {
    this.scena.preload();
    this.player.loadImg();
    this.animate.animateE("./asset/level1/f1.jpg");
    this.mapPlatform.loadImg("./asset/level1/Tiles/1.png");
    this.mapPlatformF.loadImg("./asset/level1/Tiles/2.png");
    this.mapPlatformF2.loadImg("./asset/level1/Tiles/4.png");
    this.mapPlatformF3.loadImg("./asset/level1/Tiles/7.png");
    this.mapPlatformF4.loadImg("./asset/level1/Tiles/8.png");
    this.mapPlatformF5.loadImg("./asset/level1/Tiles/7.1.png");
    this.map3.loadImg("./asset/level1/Tiles/3.png");
    this.map8_1.loadImg("./asset/level1/Tiles/8.1.png");
    this.map8_3.loadImg("./asset/level1/Tiles/8.3.png");
    this.map9.loadImg("./asset/level1/Tiles/9.png");
    this.map9_1.loadImg("./asset/level1/Tiles/9.1.png");
    this.map9_2.loadImg("./asset/level1/Tiles/9.2.png");
    this.map9_3.loadImg("./asset/level1/Tiles/9.3.png");
    this.bg.loadImg("./asset/level1/bg.png");

    this.portal.preload();
    this.crystal.preload();
  }

  create(engine, world) {
    this.scena.create();
    this.player.setup(engine, world, this.scena);
    this.platform.createRect(world, this.scena);
    this.platform_b.createRect(world, this.scena);
    this.events.collideStart(engine, this.scena);
    this.portal.create(world, this.scena);
    this.crystal.setup(engine, world, this.scena);
  }

  view() {
    background(102, 98, 97);
    rectMode(p5.CENTER);
    this.player.translates();
    image(
      this.animate.sprite(),
      -window.innerWidth / 2,
      -window.innerHeight / 2,
      this.scena.size(this.scena.scenaWidth, this.scena.scale) +
        window.innerWidth,
      this.scena.size(this.scena.scenaHeigiht, this.scena.scale) +
        window.innerHeight
    );

    this.mapPlatformF.view(2, "level 1");

    // this.bg.imageMap();
    this.player.view();
    this.map3.view(3, "wall");
    this.map8_1.view(23, "wall");
    this.map8_3.view(20, "wall");
    this.mapPlatformF5.view(6, "wall");
    this.map9.view(28, "wall");
    this.map9_1.view(25, "wall");
    this.map9_2.view(26, "wall");
    this.map9_3.view(27, "wall");
    this.mapPlatformF4.view(19, "wall");
    this.mapPlatformF3.view(7, "wall");
    this.mapPlatformF2.view(4, "wall");
    this.mapPlatform.view(1, "level 1");
    this.portal.view();
    this.crystal.view();
  }

  pressedM() {
    if (mouseX > windowWidth / 2) {
      // console.log(this.player.body[0].position.x)
      //  this.player.speed = 1;
    } else {
      // this.player.speed = 2;
    }
  }

  relassedM(e) {
    this.player.speed = 0;
  }

  pressed(e) {
    if (e.key === "ArrowRight") {
      this.player.speed = 1;
    } else if (e.key === "ArrowLeft") {
      this.player.speed = 2;
    }
    if (e.key === "ArrowUp") {
      this.player.up = 1;
    } else if (e.key === "ArrowDown") {
      //   this.player.up = 2;
    }
  }

  rePressed(e) {
    if (e.key === "ArrowRight") {
      this.player.speed = 0;
    } else if (e.key === "ArrowLeft") {
      this.player.speed = 0;
    }
    if (e.key === "ArrowUp") {
      this.player.up = 0;
    } else if (e.key === "ArrowDown") {
      //     this.player.up = 0;
    }
  }
}
