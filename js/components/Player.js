class Player extends Body {
  body = {};
  scena = {};
  m = {};
  x = 100;
  y = 100;
  joystick;
  static = false;
  width = 50;
  height = 50;
  radius = 50;
  left = 0;
  right = 0;
  up = 0;
  down = 6;
  mass = 1;
  speed = 0;
  friction = 1;
  getObj;
  image = "./asset/Player/playerHeader.png";
  imageR = "./asset/Player/player.png";
  imageS = "./asset/Player/soplo.png";
  imageS2 = "./asset/Player/soplo2.png";
  playerUp = "./asset/Player/playerUp.png";
  frame = 1;
  baseY = 0;
  img = 0;
  world;
  p5;
  time = 0;
  time2 = 0;
  direction = 0;
  speedBody = 1;
  speedBodyDop = 2;
  gravity = 1;
  header;
  header2;
  animate = new Animate();
  animateR = new Animate();
  playerUpAnimate = new Animate();
  constructor(props) {
    super(props);
  }
  loadImg() {
    this.animate.setup();
    this.animate.animateD(this.image, 48);
    this.animateR.setup();
    this.animateR.animateD(this.imageR, 32);
    this.playerUpAnimate.setup();
    this.playerUpAnimate.animateD(this.playerUp, 100);
  }

  setup(engine, world, scena) {
    this.scena = scena;
    this.animate.setupAnimate();
    this.animateR.setupAnimate();
    this.playerUpAnimate.setupAnimate();

    this.createEllipse(world, scena);
    this.speedBody = scena.size(this.speedBody, scena.scale);
    this.speedBodyDop = scena.size(this.speedBodyDop, scena.scale);
    this.gravity = scena.size(this.gravity, scena.scale);
  }

  view() {
    this.animate.animated = false;
    this.animateR.animated = false;
    this.playerUpAnimate.animated = false;
    this.animate.rate = 0.5;

    this.body.map((b) =>
      Matter.Body.setVelocity(b, {
        x: this.joystick.valX * this.speedBodyDop,
        y:
          this.joystick.valY === 0
            ? this.gravity
            : this.joystick.valY * this.speedBodyDop,
      })
    );
    this.body.map((b) => {});

    if (this.joystick.valX > 0) {
      this.direction = 1;
    } else if (this.joystick.valX < 0) {
      this.direction = 2;
    }
    if (this.up === 1 && this.speed === 1) {
      this.setVelosity(this.speedBody, -this.gravity);
      this.direction = 1;
    } else if (this.up === 1 && this.speed === 2) {
      this.direction = 2;
      this.setVelosity(-this.speedBody, -this.gravity);
    } else if (this.up === 1) {
      this.setVelosity(0, -this.gravity);
    } else {
      if (
        this.speed === 1 ||
        (this.joystick.valX > 0 && this.joystick.valY >= 0)
      ) {
        this.setVelosity(this.speedBody, this.gravity);

        this.direction = 1;
        this.animateR.animated = true;
        this.animateR.format = 3;
      } else if (
        this.speed === 2 ||
        (this.joystick.valX < 0 && this.joystick.valY >= 0)
      ) {
        this.setVelosity(-this.speedBody, this.gravity);

        this.direction = 2;
        this.animateR.animated = true;
        this.animateR.format = 0;
      } else if (this.speed === 1 && this.up === 1) {
        this.setVelosity(this.speedBody, -this.gravity);
      } else {
        this.description = 0;
      }
    }

    if (this.joystick.valY < 0) {
      this.playerUpAnimate.animated = true;
      this.playerUpAnimate.format = 1;
      this.direction === 4;
    } else {
    }
    print(this.joystick.valY);

    if (this.direction === 1) {
      this.animate.animated = true;
      this.animate.format = 1;
    } else if (this.direction === 2) {
      this.animate.animated = true;
      this.animate.format = 2;
    }

    this.body.map((b) => {
      if (this.joystick.valY < 0) {
        image(
          this.playerUpAnimate.spriteEllipse(b.width),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2
        );
      } else {
        image(
          this.animateR.spriteEllipse(b.width),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2
        );
      }
    });
    this.body.map((b) => {
      image(
        this.animate.spriteRect(b.width, b.width / 1.7),
        b.position.x - b.width / 2,
        b.position.y - this.scena.size(1, this.scena.scale) - b.width / 2
      );
    });
  }
}
