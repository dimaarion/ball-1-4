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
    img;
    world;
    engine;
    p5;
    time = 0;
    timeAtan = 0;
    direction = 0;
    speedBody = 0.08;
    speedBodyDop = 1;
    gravity = 0.06;
    rotate = 0;
    header;
    header2;
    velocity = 10;
    atanImg;
    atanIcon;
    money;
    active = 0;
    timer = new Panel();
    elapsedSeconds = 0;
    elapsedMinutes = 0;
    elapsedHour = 0;

    constructor(props) {
        super(props);
    }

    atan() {

        if (this.atanIcon.buttonActive === "atan" ) {
            this.active = 1;
            this.timer.elapsedSeconds = 0
//window.localStorage.setItem("active", this.active.toString());
        }

        if (this.timer.elapsedSeconds > 30) {
            this.timer.elapsedSeconds = 6
            this.active = 0;
            //window.localStorage.setItem("active", this.active.toString());
        }


        if (this.active === 1) {

            this.timer.updateTimer();
            push();
            this.body.map((b) => {

                translate(b.position.x, b.position.y);

                let a = atan2(this.getType(this.engine, "exit").position.y - b.position.y, this.getType(this.engine, "exit").position.x - b.position.x);

                rotate(a - 1);
                image(this.atanImg.sprite(),
                    -(b.width + this.scena.size(5, this.scena.scale)) / 2,
                    -(b.width + this.scena.size(5, this.scena.scale)) / 2,
                    b.width + this.scena.size(5, this.scena.scale),
                    b.width + this.scena.size(5, this.scena.scale)
                )
            });
            pop();
        }

    }

    rePressed(){

          if(this.active === 1){
            // this.body[0].money -= 5;

          }
    }

    setup(engine, world, scena) {

        this.engine = engine;
        this.scena = scena;

        this.timer.create();
        this.fric = 1;
        push()
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 20;
        drawingContext.shadowColor = 'red';
        this.createEllipse(world, scena);
        pop()
        // this.speedBody = scena.size(this.speedBody, scena.scale);
        this.speedBodyDop = scena.size(this.speedBodyDop, scena.scale);
        // this.gravity = 15;
        if (md.mobile()) {
            this.speedBody = scena.size(this.velocity, scena.scale);
            this.gravity = scena.size(this.velocity , scena.scale);
        } else {
            this.speedBody = scena.size(this.velocity - 2, scena.scale);
            this.gravity = scena.size(this.velocity - 4, scena.scale);
        }


        this.body.map((b) => {
            b.speedBodyDop = this.speedBodyDop;
        });
        Matter.Events.on(engine, "collisionActive", function (event) {
            //  console.log(this.joystick.valX);
            let pairs = event.pairs;
            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i];
                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "platform_b"
                ) {
                    pair.bodyA.activeB = 1;

                }
                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "portal"
                ) {
                    pair.bodyA.activeB = 1;
                }
            }
        });

        Matter.Events.on(engine, "collisionEnd", function (event) {

            let pairs = event.pairs;
            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i];
                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "platform_b"
                ) {
                    pair.bodyA.activeB = 0;
                }

                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "portal"
                ) {
                    pair.bodyA.activeB = 0;
                }
            }
        });


        Matter.Events.on(engine, "collisionStart", function (event) {

            let pairs = event.pairs;
            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i];

                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "platform_b"
                ) {
                    pair.bodyA.activeB = 1;
                }
                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "portal"
                ) {
                    pair.bodyA.activeB = 1;
                }

                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "money"
                ) {
                    Matter.Body.setPosition(pair.bodyB, {x: -1000, y: -1000});
                    pair.bodyA.money += 1;

                }
            }

        });
    }

    view() {
    
        if (this.speed === 1) {

            this.direction = 1;
        } else if (this.speed === 2) {

            this.direction = 2;
        }
        if (this.direction === 1) {

        } else if (this.direction === 2) {

        }


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


        this.atan()

        this.body.map((b) => {
            push();
            translate(b.position.x, b.position.y)
            angleMode(RADIANS)
            rotate(b.angle)
            image(
                this.img,
                -b.width / 2,
                -b.width / 2,
                b.width,
                b.width
            );
            pop();
        });


    }
}
