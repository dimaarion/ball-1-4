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
  frame = 1;
  baseY = 0;
  img = 0;
  world;
  p5;
  time = 0;
  time2 = 0;
  direction = 0;
  soploX = 2;
  soploX2 = 2;
  speedBody = 1;
  speedBodyDop = 1;
  animate = new Animate();
  animateR = new Animate();
  soplo = new Animate();
  soplo2 = new Animate();
  constructor(props) {
    super(props);
  }
  loadImg() {
    this.animate.setup();
    this.animate.animateD(this.image, 48);
    this.animateR.setup();
    this.animateR.animateD(this.imageR, 32);
    // this.animateR.setup();
    // this.animateR.animateD(this.imageR, 13);
    //  this.soplo.setup();
    //  this.soplo.animateD(this.imageS, 29);
    // this.soplo2.setup();
    // this.soplo2.animateD(this.imageS2, 29);
  }

  setup(engine, world, scena) {
    this.scena = scena;
    this.animate.setupAnimate();
    this.animateR.setupAnimate();
    // this.animateR.setupAnimate();
    // this.soplo.setupAnimate();
    //  this.soplo2.setupAnimate();
    this.createEllipse(world, scena);
    this.speedBody = scena.size(this.speedBody, scena.scale);
    this.speedBodyDop = scena.size(this.speedBodyDop, scena.scale);
    this.gravity = scena.size(this.gravity, scena.scale);
    print(this.joystick)
  }

  view() {
    this.body.map((b) => {
      //   Matter.Body.setVelocity(b,{x:1,y:5})
    });

    this.animate.animated = false;
    this.animateR.animated = false;
    this.animate.rate = 0.5;

    this.body.map((b) => Matter.Body.setVelocity(b, { x: this.joystick.valX * this.speedBodyDop, y: this.joystick.valY * this.speedBodyDop }));
    this.body.map((b) => {

    });

    if (this.joystick.valX > 0) {
      this.direction = 1;
    } else if(this.joystick.valX < 0) {
      this.direction = 2;
    }
    if (this.up === 1 && this.speed === 1) {
      this.setVelosity(4, -4);
      this.direction = 1;
    } else if (this.up === 1 && this.speed === 2) {
      this.direction = 2;
      this.setVelosity(-4, -4);
    } else if (this.up === 1) {
      this.setVelosity(0, -4);
    }

    else {
      if (this.speed === 1 || this.joystick.valX > 0 && this.joystick.valY >= 0) {
        this.setVelosity(this.speedBody, this.gravity);
        // this.setRotate(0.2);
        this.direction = 1;
        this.animateR.animated = true;
        this.animateR.format = 3;
      } else if (this.speed === 2 || this.joystick.valX < 0 && this.joystick.valY >= 0) {
        this.setVelosity(-this.speedBody, this.gravity);
        //this.setRotate(-0.2);
        this.direction = 2;
        this.animateR.animated = true;
        this.animateR.format = 0;
      } else if (this.speed === 1 && this.up === 1) {
        this.setVelosity(this.speedBody, -4);
      } else {
        this.description = 0;
        // this.setRotate(0);
        //  this.setVelosity(0, this.gravity);
      }
    }

    if (this.direction === 1) {
      this.animate.animated = true;
      this.animate.format = 1;
    } else if (this.direction === 2) {
      this.animate.animated = true;
      this.animate.format = 2;
    }

    if (this.speed === 5) {
      //   this.soploX = (this.animate.xp + 1) * 1.21;
    } else {
      //    this.soploX = (this.animate.xp + 1) * 1.3;
    }

    if (this.speed === -5) {
      //   this.soploX2 = -(this.animate.xp + 1) * 20;
    } else {
      //    this.soploX2 = -(this.animate.xp + 1) * 1.5;
    }

    //this.body.map((b) => image(this.soplo2.spriteEllipse(b.width / 1.2), b.position.x + b.width / this.soploX2 + this.scena.size(0.8, this.scena.scale), b.position.y - b.width / 2.4))
    //this.body.map((b) => image(this.soplo.spriteEllipse(b.width / 1.2), b.position.x - b.width / this.soploX - this.scena.size(1.5, this.scena.scale), b.position.y - b.width / 2.4))

    //  translate(this.body[0].position.x, this.body[0].position.y);
    // rotate(this.body[0].angle);

    this.body.map((b) =>
      image(
        this.animateR.spriteEllipse(b.width),
        b.position.x - b.width / 2,
        b.position.y - b.width / 2
      )
    );
    this.body.map((b) =>
      image(
        this.animate.spriteRect(b.width, b.width / 1.7),
        b.position.x - b.width / 2,
        b.position.y - this.scena.size(5, this.scena.scale) - b.width / 2
      )
    );
  }
}
