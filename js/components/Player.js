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
  imageR = "./asset/Player/playerGolem.png";
  imageS = "./asset/Player/soplo.png";
  imageS2 = "./asset/Player/soplo2.png";
  playerUp = "./asset/Player/playerUp.png";
  frame = 1;
  baseY = 0;
  img = 0;
  world;
  engine;
  p5;
  time = 0;
  time2 = 0;
  direction = 0;
  speedBody = 0.08;
  speedBodyDop = 1;
  gravity = 0.06;
  header;
  header2;
  animate = new Animate();
  animateR = new Animate();
  animateL = new Animate();
  stopRight = new Animate();
  stopLeft = new Animate();
  playerUpAnimate = new Animate();
  jamp = new Animate();
  jampLeft = new Animate();
  constructor(props) {
    super(props);
  }
  loadImg() {
    this.animate.animateD(this.image, 48);
    this.animateR.animateD("./asset/Player/playerR.png", 30);
    this.animateL.animateD("./asset/Player/playerL.png", 30);
    this.playerUpAnimate.animateD(this.playerUp, 100);
    this.stopRight.animateE("./asset/Player/playerStopRight.png");
    this.stopLeft.animateE("./asset/Player/playerStopLeft.png");
    this.jamp.animateE("./asset/Player/playerJamp.png");
    this.jampLeft.animateE("./asset/Player/playerJampLeft.png");
  }

  setup(engine, world, scena) {
    this.engine = engine;
    this.scena = scena;
    this.animate.setupAnimate();
    this.animateR.setupAnimate();
    this.playerUpAnimate.setupAnimate();
    this.stopRight.setupAnimate();
    this.stopLeft.setupAnimate();
    this.animateL.setupAnimate();
    this.jamp.setupAnimate();
    this.jampLeft.setupAnimate();
    this.createEllipse(world, scena);
    // this.speedBody = scena.size(this.speedBody, scena.scale);
    this.speedBodyDop = scena.size(this.speedBodyDop, scena.scale);
    // this.gravity = 15;
    this.speedBody = scena.procent(1);
    this.gravity = scena.procent(1);
    this.animateR.rate = 0;
    this.animateL.rate = 0;
    this.body.map((b) => {
      b.speedBodyDop = this.speedBodyDop;
    });
    Matter.Events.on(engine, "collisionActive", function (event) {
      //  console.log(this.joystick.valX);
      var pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "platform_b"
        ) {
          Matter.Body.setVelocity(pair.bodyA, {
            x: pair.bodyA.jX ? pair.bodyA.jX : 0,
            y: pair.bodyA.jY ? pair.bodyA.jY : 0,
          });
          //  Matter.Body.setRotate(pair.bodyA, pair.bodyA.jX);
        }
      }
    });

    Matter.Events.on(engine, "collisionStart", function (event) {
      //  console.log(this.joystick.valX);
      var pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "platform_b"
        ) {
          Matter.Body.setVelocity(pair.bodyA, {
            x: pair.bodyA.jX ? pair.bodyA.jX : 0,
            y: pair.bodyA.jY ? pair.bodyA.jY : 0,
          });
          //  Matter.Body.setRotate(pair.bodyA, pair.bodyA.jX);
        }
      }
    });
  }

  view() {
    this.animate.animated = false;
    this.animateR.animated = false;
    this.playerUpAnimate.animated = false;
    this.animate.rate = 0.5;
    // this.animateR.rate = 2;
    if (this.speed === 1) {
      // this.setRotate(0.1);
    } else if (this.speed === 2) {
      //  this.setRotate(-0.1);
    } else {
      //  this.setRotate(0);
    }

    this.body.map((b) => {
      //  console.log(b.speed);

      b.jY = this.up != 0 ? -this.gravity : 0;
      b.jX =
        this.speed === 0
          ? 0
          : this.speed === 1
          ? this.speedBody
          : -this.speedBody;
    });

    /*
    if (this.up === 1 && this.speed === 1) {
      this.setVelosity(this.speedBody, -this.gravity);
      this.direction = 1;
    } else if (this.up === 1 && this.speed === 2) {
      this.direction = 2;
      this.setVelosity(-this.speedBody, -this.gravity);
    } else if (this.up === 1) {
      this.setVelosity(0, -this.gravity);
    } else {
      if (this.speed === 1) {
        this.setVelosity(this.speedBody, this.gravity);

        this.direction = 1;
        this.animateR.animated = true;
        this.animateR.format = 3;
      } else if (
        this.speed === 2) {
     //   this.setVelosity(-this.speedBody, this.gravity);
        this.direction = 2;
        this.animateR.animated = true;
        this.animateR.format = 0;
      } else if (this.speed === 1 && this.up === 1) {
      //  this.setVelosity(this.speedBody, -this.gravity);
      } else {
        this.description = 0;
      }
    }
*/
    /*
    if (this.joystick.valX > 0) {
      this.animate.animated = true;
      this.animate.format = 1;
      this.direction = 1;
    } else if (this.joystick.valX < 0) {
      this.direction = 2;
    }

    if (this.joystick.valY < 0) {
      this.playerUpAnimate.animated = true;
      this.playerUpAnimate.format = 1;
      this.direction === 4;
    } else {
    }

    if (this.direction === 1) {
      this.animate.animated = true;
      this.animate.format = 1;
    } else if (this.direction === 2) {
      this.animate.animated = true;
      this.animate.format = 2;
    }
*/
    /// console.log(this.joystick.valX);

    if (this.speed === 1) {
      this.animateR.animated = true;
      this.animateR.format = 0;
      this.direction = 1;
    } else if (this.speed === 2) {
      this.animateR.animated = true;
      this.animateR.format = 3;
      this.direction = 2;
    }
    if (this.direction === 1) {
      this.animate.animated = true;
      this.animate.format = 1;
    } else if (this.direction === 2) {
      this.animate.animated = true;
      this.animate.format = 2;
    }

    this.body.map((b) => {
      if (this.up == 0 && this.speed == 1) {
        image(
          this.animateR.spriteEllipse(b.width),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2
        );
      } else if (this.up == 0 && this.direction == 1) {
        image(
          this.stopRight.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2,
          b.width,
          b.width
        );
      } else if (this.up != 0 && this.direction == 1) {
        image(
          this.jamp.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2,
          b.width,
          b.width
        );
      }

      if (this.up == 0 && this.speed == 2) {
        image(
          this.animateL.spriteEllipse(b.width),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2
        );
      } else if (this.up == 0 && this.direction == 2) {
        image(
          this.stopLeft.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2,
          b.width,
          b.width
        );
      } else if (this.up != 0 && this.direction == 2) {
        image(
          this.jampLeft.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2,
          b.width,
          b.width
        );
      }
      if (this.direction == 0) {
        image(
          this.stopRight.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.width / 2,
          b.width,
          b.width
        );
      }
    });
    /*  this.body.map((b) => {
      image(
        this.animate.spriteRect(b.width, b.width / 1.7),
        b.position.x - b.width / 2,
        b.position.y - this.scena.size(1, this.scena.scale) - b.width / 2
      );
    });*/
  }
}
