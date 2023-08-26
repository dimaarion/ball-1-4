/* eslint-disable no-undef, no-unused-vars */
let Engine = Matter.Engine;
let engine, world;

let level_1 = new Level_1("/js/scena/scena.json", 1);
let level_2 = new Level_1("./js/scena/scena2.json", 2);
let level_3 = new Level_1("./js/scena/scena3.json", 3);
let panel = new Panel();
let levelStep_1 = new Panel();


let gui;
let b;
let j;
let x, y, velX, velY;
let joystickDot1;
let joystickDot2;
let body = new Body();
let md;
let test = 0;
let playerImage;
let tile_2;
let playRight = new Panel();
let playLeft = new Panel();
let playUp = new Panel();
let restart = new Panel();

let tilesImage = new Animate();
let portalImage = new Animate();
let money = new Animate();

let moneyBank = 0

let scena_1_level_1 = new TileMap(level_1.scena);
let scena_1_wall = new TileMap(level_1.scena);

let scena_2_level_1 = new TileMap(level_2.scena);
let scena_2_wall = new TileMap(level_2.scena);

let scena_3_level_1 = new TileMap(level_3.scena);
let scena_3_wall = new TileMap(level_3.scena);

function preload() {
    tilesImage.animateD("./asset/level1/Tiles/tilesD.png", 28);
    portalImage.animateD("./asset/level1/Tiles/portalD.png", 12);
    playerImage = loadImage("./asset/Player/ball.png");
    money.animateD("./asset/level1/Tiles/money.png", 100);

    scena_1_level_1.preload("./js/scena/scena1.png");
    scena_1_wall.preload("./js/scena/wall1.png");

    scena_2_level_1.preload("./js/scena/scena2.png");
    scena_2_wall.preload("./js/scena/wall2.png");

    scena_3_level_1.preload("./js/scena/scena3.png");
    scena_3_wall.preload("./js/scena/wall3.png");


    panel.preload();
    if (deviceOrientation === LANDSCAPE) {
        panel.button(95, 0, 5, 5, "./asset/panel/Settings_BTN.png", 0);
        playRight.button(30, 75, 8, 8, "./asset/panel/PlayRight_BTN.png", 1);
        playUp.button(70, 75, 8, 8, "./asset/panel/PlayUp_BTN.png", 1);
        playLeft.button(10, 75, 8, 8, "./asset/panel/PlayLeft_BTN.png", 2);
        restart.button(89, 0, 5, 5, "./asset/panel/restart_level.png", "restart");
    } else {
        panel.button(92, 0, 5, 5, "./asset/panel/Settings_BTN.png", 0);
        playRight.button(30, 85, 8, 8, "./asset/panel/PlayRight_BTN.png", 1);
        playUp.button(70, 85, 8, 8, "./asset/panel/PlayUp_BTN.png", 1);
        playLeft.button(10, 85, 8, 8, "./asset/panel/PlayLeft_BTN.png", 2);
        restart.button(85, 0, 5, 5, "./asset/panel/restart_level.png", "restart");

    }
    levelStep_1.button(60, 60, 8, 8, "./asset/panel/step_level.png", 2);
    level_1.preload();
    level_2.preload();
    level_3.preload();

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    gui = createGui();
    md = new MobileDetect(window.navigator.userAgent);
    tilesImage.setupAnimate();
    money.setupAnimate();
    panel.create();
    let images = {
        playerImage: playerImage,
        tiles: tilesImage,
        portalImage: portalImage,
        playRight: playRight,
        playLeft: playLeft,
        restart: restart,
        playUp: playUp,
        money: money,

    };
    // level 1

    level_1.create(images);
    // level 2
    level_2.create(images);
    // level 3

    level_3.create(images);

}

function draw() {

    if (panel.level === 1) {
        push();
        level_1.level_1_img = scena_1_level_1;
        level_1.wall_img = scena_1_wall;
        level_1.view(panel);
        pop();
        panel.headBar({moneyImg:money,money:level_1.player.body[0].money});
    } else if (panel.level === 2) {
        push();
        level_2.level_1_img = scena_2_level_1;
        level_2.wall_img = scena_2_wall;
        level_2.view(panel);
        pop();
        panel.headBar({moneyImg:money,money:level_1.player.body[0].money + level_2.player.body[0].money});
    } else if (panel.level === 3) {
        push();
        level_3.level_1_img = scena_3_level_1;
        level_3.wall_img = scena_3_wall;
        level_3.view(panel);
        pop();
        panel.headBar({moneyImg:money,money:level_1.player.body[0].money + level_2.player.body[0].money + level_3.player.body[0].money});
    } else {
        panel.levelPanel();
    }
    moneyBank = level_1.player.body[0].money + level_2.player.body[0].money;

    if (panel.level !== 0) {
        panel.buttonView();
        if (md.mobile()) {
        }
    } else {
    }
    if (panel.buttonActive == 0) {
        level_1.player.body[0].level = 0;
        level_2.player.body[0].level = 0;
        level_3.player.body[0].level = 0;
        panel.level = 0;
    }
    // panel.levelEnd();
}

function mousePressed(e) {
    panel.pressed(e);

    level_1.pressedM(e);
    level_2.pressedM(e);
    level_3.pressedM(e);
    levelStep_1.pressed(e);

}

function mouseReleased(e) {
    level_1.relassedM(e);
    level_2.relassedM(e);
    level_3.relassedM(e);

    levelStep_1.rePressed(e);
}

function keyPressed(e) {
    level_1.pressed(e);
    level_2.pressed(e);
    level_3.pressed(e);
}

function touchMoved() {
    // do some stuff
    return false;
}

function keyReleased(e) {
    level_1.rePressed(e);
    level_2.rePressed(e);
    level_3.rePressed(e);
}
