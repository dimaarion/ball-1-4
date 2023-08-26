class Level_1 {
    engine;
    world;
    scena = new Scena();
    nameScena = "./js/scena/scena.json";
    player = new Player("player");

    mapPlatform = new TileMap(this.scena);
    mapTileImages = new TileMap(this.scena);
    mapPortalImages = new TileMap(this.scena);

    bg = new TileMap(this.scena);
    platform = new Body("platform");
    platform_b = new Body("platform_b");
    events = new Events();
    portal = new Portal("portal");
    point = new Body("point");
    crystal = new Crystal();
    money = new Money("money")

    playRight;
    playLeft;
    restart;
    playUp;

    tilesImage;
    level = 0;
    level_1_img;
    portal_img;
    wall_img;

    constructor(nameScena, level) {
        this.nameScena = nameScena;
        this.level = level;
    }

    preload() {
        this.scena.preload(this.nameScena);

        this.portal.preload();
        this.crystal.preload();
    }

    create(panel, props) {

        this.playRight = props.playRight;
        this.playLeft = props.playLeft;
        this.restart = props.restart;
        this.playUp = props.playUp;

        this.player.img = props.playerImage;
        this.mapTileImages.image = props.tiles.newArrImg;
        this.mapPortalImages.image = props.portalImage.newArrImg;
        this.engine = Engine.create();
        this.world = this.engine.world;
        Engine.run(this.engine);
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
        this.money.create(this.world, this.scena)
        // this.point.sensor = true
        panel.create(this.world);

    }

    view(panel) {
        background(102, 98, 97);
        rectMode(p5.CENTER);
        push();
        this.player.translates();

        //  this.mapTileImages.newArray(28).map((x) => this.mapTileImages.view(x, "wall"))


        //  this.mapTileImages.newArray(28).map((x) => this.mapTileImages.view(x, "level 1"))
        //  this.mapTileImages.newArray(28).map((x) => this.mapTileImages.view(x, "portal"))
        this.wall_img.imageMap();
        this.money.view();
        this.player.view();
        this.level_1_img.imageMap();


        this.portal.view();
        pop();

        if (this.player.body[0].level == this.level + 1) {
            panel.level = this.player.body[0].level;
        }
        if (this.restart.buttonActive === "restart") {
            this.scena.getObjects("player").map((p) => this.player.setPosition(this.scena.size(p.x + p.width / 2, this.scena.scale), this.scena.size(p.y + p.width / 2, this.scena.scale)))
        }
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
        if (md.mobile()) {
            this.playRight.buttonView();
            this.playLeft.buttonView();
            this.playUp.buttonView();

        }
        this.restart.buttonView();

        let display = touches.length + ' touches';
        textSize(20)
        text(display, 105, 100);
        if (touches.length == 1) {
            this.playRight.pressed();
            this.playLeft.pressed();
            this.playUp.pressed();

        }
        if (touches.length == 2) {
            this.player.up = 1;
        } else {

        }
    }

    pressedM(e) {

        this.restart.pressed(e);


    }

    relassedM(e) {
        this.player.speed = 0;
        this.restart.rePressed(e);
        this.playRight.rePressed(e);
        this.playLeft.rePressed(e);
        this.playUp.rePressed(e);
        this.player.up = 0;
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
