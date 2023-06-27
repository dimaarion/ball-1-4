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
  platform = new Body("platform");
  events = new Events();
  portal = new Portal("portal");
  crystal = new Crystal();

  preload() {
    this.scena.preload();
    this.player.loadImg();
    this.animate.animateE("./asset/level1/f1.jpg");
    this.mapPlatform.loadImg("./asset/level1/1.png");
    this.mapPlatformF.loadImg("./asset/portal/tiled.png");
    this.mapPlatformF2.loadImg("./asset/portal/tiled2.png");
    this.mapPlatformF3.loadImg("./asset/portal/tiled3.png");
    this.mapPlatformF4.loadImg("./asset/portal/tiled5.png");
    this.mapPlatformF5.loadImg("./asset/portal/tiled4.png");
    this.portal.preload();
    this.crystal.preload();
  }

  create(engine, world) {
    this.scena.create();
    this.player.setup(engine, world, this.scena);
    this.platform.createRect(world, this.scena);
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

    this.mapPlatformF4.view(6);
    this.mapPlatformF.view(1);
    this.mapPlatformF2.view(2);

    this.mapPlatformF3.view(3);
    this.mapPlatformF5.view(5);
    this.player.view();
    this.mapPlatform.view(4);
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
