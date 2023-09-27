class Level_1 {
    engine;
    world;
    render;
    scena = new Scena();
    nameScene = "./js/scena/scena.json";
    player = new Player("player");

    images = [];

    platform = new Body("platform");
    platform_b = new Body("platform_b");
    events = new Events();
    portal = new Portal("portal");
    point = new Body("point");
    crystal = new Crystal();
    money = new Money("money");
    anomaly = new Anomaly("anomaly");
    chest = new Chest("chest");
    lightning = new Lightning("lightning");
    stone = new Stone("stone");

    props;
    playRight;
    playLeft;
    restart;
    playUp;
    level = 0;




    constructor(nameScene, level) {
        this.nameScene = nameScene;
        this.level = level;
    }

    preload() {
        this.scena.preload(this.nameScene);
        this.portal.preload();
        this.crystal.preload();
    }

    create() {
        this.engine = Engine.create();
        this.render = Matter.Render,
        this.world = this.engine.world;

        this.scena.create();
        this.player.setup(this.engine, this.world, this.scena);
        this.platform.createRect(this.world, this.scena);
        this.platform_b.createRect(this.world, this.scena);
        this.events.collideStart(this.engine, this.scena);
        this.portal.create(this.world, this.scena);
        this.crystal.setup(this.engine, this.world, this.scena);
        this.player.body[0].level = this.level;
        this.point.sensor = true;
        this.point.createRect(this.world, this.scena);
        this.money.create(this.engine, this.scena);
        this.chest.create(this.engine, this.scena);
        this.anomaly.create(this.engine,this.scena);
        this.lightning.create(this.engine,this.scena);
        this.stone.create(this.engine, this.scena);
        
        // this.point.sensor = true
        Engine.run(this.engine);
        console.log(this.world)

    }

    view() {
        background("#0d0b1a");
        rectMode(CENTER);
        push();
     //  angleMode(DEGREES)
       // rotate(frameCount % 360)
      //  translate(this.scena.size(-(this.scena.scenaWidth / 2)  + windowWidth  ),this.scena.size(-(this.scena.scenaHeigiht / 2)))
        this.player.translates();
       // Matter.Composite.translate(this.world,{x:100,y:100})

        this.images.map((el)=>el.imageMap(this.platform));
        this.stone.view();
        this.portal.view();
        this.anomaly.view();
        this.money.view();
        this.chest.view();
        this.lightning.view();
        this.player.view();
      //  this.platform.viewRect()
     //   this.platform_b.viewRect()
      
       
        pop();
        this.restart.buttonView();

        if (this.player.body[0].level === this.level + 1) {
            panel.level = this.player.body[0].level;
        }
        if (this.restart.buttonActive === "restart") {
            this.world.bodies.filter((f)=>f.typeObject === "start").map((p) => this.player.setPosition(p.position.x,p.position.y ))
        }


        if (md.mobile()) {
            if (this.playRight.buttonActive === 1) {
                this.player.speed = this.playRight.buttonActive;
            }
            if (this.playLeft.buttonActive === 2) {
                this.player.speed = this.playLeft.buttonActive;
            }
            if (this.playUp.buttonActive === 1) {
                this.player.up = this.playUp.buttonActive;
            } else {
                this.player.up = 0;
            }

            this.playRight.buttonView();
            this.playLeft.buttonView();
            this.playUp.buttonView();

            if (touches.length === 1) {
                this.playRight.pressed();
                this.playLeft.pressed();
                this.playUp.pressed();

            }
            if (touches.length === 2) {
                this.player.up = 1;
            } else {

            }
        }
        if(this.player.speed === 1){
             Matter.Composite.rotate(this.engine.world,0.01,{x:0,y:0}) 
        }else if(this.player.speed === 2){
            Matter.Composite.rotate(this.engine.world,-0.01,{x:0,y:0}) 
        }
       
      
    }

    pressedM(e) {
if(this.restart !== undefined){
    this.restart.pressed(e);
  // Matter.Composite.rotate(this.world,0.1,{x:0,y:0})  
}


    }

    relassedM(e) {
        this.player.speed = 0;
        if(this.restart !== undefined) {
            this.restart.rePressed(e);
        }
        this.playRight.rePressed(e);
        this.playLeft.rePressed(e);
        this.playUp.rePressed(e);
        if (md.mobile()) {
            this.player.up = 0;
        }
            this.player.rePressed();


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
        //
    }
}
