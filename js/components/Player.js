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
  rotate = 0;
  header;
  header2;
  animate = new Animate();
  animateR = new Animate();
  animateL = new Animate();
  stopRight = new Animate();
  stopLeft = new Animate();
  playerUpAnimate = new Animate();
  jamp = new Animate();
  jampBR = new Animate();
  jampLeft = new Animate();
  ball = new Animate();
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
    this.jamp.animateD("./asset/Player/jampAnimate.png", 20);
    this.jampBR.animateD("./asset/Player/jampBRAnimate.png", 12);
    this.jampLeft.animateE("./asset/Player/playerJampLeft.png");
    this.ball.animateE("./asset/Player/ball.png");
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
    this.jampBR.setupAnimate();
    this.jampLeft.setupAnimate();
    this.fric = 1;
    this.createEllipse(world, scena);
    // this.speedBody = scena.size(this.speedBody, scena.scale);
    this.speedBodyDop = scena.size(this.speedBodyDop, scena.scale);
    // this.gravity = 15;
    this.speedBody = scena.procentXY(0.5);
    this.gravity = scena.procentXY(0.5);
    this.animateR.rate = 0;
    this.animateL.rate = 0;
    this.jamp.rate = 0
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

          pair.bodyA.activeB = 1;

          // this.jamp.format = 2
          //  Matter.Body.setRotate(pair.bodyA, pair.bodyA.jX);
        }
      }
    });

    Matter.Events.on(engine, "collisionEnd", function (event) {
      //  console.log(this.joystick.valX);
      var pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "platform_b"
        ) {


          pair.bodyA.activeB = 0;
          // this.jamp.format = 2
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
          pair.bodyA.activeB = 1;
          //  Matter.Body.setRotate(pair.bodyA, pair.bodyA.jX);
        } else {

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
      //  console.log(b.activeB);

      b.jY = this.up != 0 ? -this.gravity : 0;
      b.jX =
        this.speed === 0
          ? 0
          : this.speed === 1
            ? this.up != 0 ? this.speedBody : 0
            : this.up != 0 ? -this.speedBody : 0;


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

    /// console.log(this.getVelocity()[0].y)

    if (this.speed == 1 && this.up == 0 && this.body[0].activeB == 1) {
      this.setVelosity(this.speedBody, 0)
    } else if (this.speed == 1 && this.up != 0 && this.body[0].activeB == 1) {
      this.setVelosity(this.speedBody, -this.gravity)
    }
    if (this.speed == 2 && this.up == 0 && this.body[0].activeB == 1) {
      this.setVelosity(-this.speedBody, 0)
    } else if (this.speed == 2 && this.up != 0 && this.body[0].activeB == 1) {
      this.setVelosity(-this.speedBody, -this.gravity)
    } else if (this.speed != 1 && this.speed != 2 && this.up != 0 && this.body[0].activeB == 1) {
      this.setVelosity(0, -this.gravity)
    }

    this.body.map((b) => {
      push();
      translate(b.position.x, b.position.y)
      rotate(b.angle)
      image(
        this.ball.sprite(),
        - b.width / 2,
        - b.width / 2,
        b.width,
        b.width
      );
      pop();
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
