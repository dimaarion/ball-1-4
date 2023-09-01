/* eslint-disable no-undef, no-unused-vars */
let Engine = Matter.Engine;
let engine, world;

let level_1 = new Level_1("./js/scena/scena.json", 1);
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
let mapScale = new Panel();
let atanIcon = new Panel();

let bank = new Bank();

let tilesImage = new Animate();
let portalImage = new Animate();
let money = new Animate();
let activeRight = new Animate();

let atan = new Animate();

let moneyBank = 0

let scena_1_level_1 = new TileMap(level_1.scena);
let scena_1_wall = new TileMap(level_1.scena);

let scena_2_level_1 = new TileMap(level_2.scena);
let scena_2_wall = new TileMap(level_2.scena);

let scena_3_level_1 = new TileMap(level_3.scena);
let scena_3_wall = new TileMap(level_3.scena);
let levelArr =  [level_1,level_2,level_3];
function preload() {
    tilesImage.animateD("./asset/level1/Tiles/tilesD.png", 28);
    portalImage.animateD("./asset/level1/Tiles/portalD.png", 12);
    playerImage = loadImage("./asset/Player/ball.png");
    money.animateD("./asset/money/money.png", 189);
    activeRight.animateD("./asset/objects/right.png", 50);
    atan.animateE("./asset/Player/atan.png");

    scena_1_level_1.preload("./js/scena/scena1.png");
    scena_1_wall.preload("./js/scena/wall1.png");

    scena_2_level_1.preload("./js/scena/scena2.png");
    scena_2_wall.preload("./js/scena/wall2.png");

    scena_3_level_1.preload("./js/scena/scena3.png");
    scena_3_wall.preload("./js/scena/wall3.png");

    panel.preload();

    if (deviceOrientation === LANDSCAPE) {
        panel.button(92, 0, 5, 5, "./asset/panel/Settings_BTN.png", 0);
        restart.button(82, 0, 5, 5, "./asset/panel/restart_level.png", "restart");
        atanIcon.button(82, 20, 5, 5, "./asset/panel/atan_icon.png", "atan");
        playRight.button(30, 70, 8, 8, "./asset/panel/PlayRight_BTN.png", 1);
        playUp.button(70, 70, 8, 8, "./asset/panel/PlayUp_BTN.png", 1);
        playLeft.button(10, 70, 8, 8, "./asset/panel/PlayLeft_BTN.png", 2);

    } else {
        panel.button(82, 0, 5, 5, "./asset/panel/Settings_BTN.png", 0);
        restart.button(82, 9, 5, 5, "./asset/panel/restart_level.png", "restart");
        playRight.button(30, 85, 8, 8, "./asset/panel/PlayRight_BTN.png", 1);
        playUp.button(70, 85, 8, 8, "./asset/panel/PlayUp_BTN.png", 1);
        playLeft.button(10, 85, 8, 8, "./asset/panel/PlayLeft_BTN.png", 2);


    }
    levelStep_1.button(60, 60, 8, 8, "./asset/panel/step_level.png", 2);
    levelArr.map((lev,i)=>{
        lev.preload();
    })


}

function setup() {
    createCanvas(windowWidth, windowHeight);
    gui = createGui();
    md = new MobileDetect(window.navigator.userAgent);
    tilesImage.setupAnimate();
    money.setupAnimate();
    activeRight.setupAnimate();
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
        atanImg: atan,
        atanIcon: atanIcon,
        activeRight:activeRight

    };
    // level 1
    //level_1.scena.scale = 5
    levelArr.map((lev,i)=>{
        lev.create(images);
    })

    level_1.level_1_img = scena_1_level_1;
    level_1.wall_img = scena_1_wall;

    // level 2

    level_2.level_1_img = scena_2_level_1;
    level_2.wall_img = scena_2_wall;
    // level 3

    level_3.level_1_img = scena_3_level_1;
    level_3.wall_img = scena_3_wall;


}

function level(obj,panel) {
    push();
    obj.view();
    pop();
    panel.headBar({player:obj.player});
    obj.player.money = panel.bank;
}



function draw() {
    panel.bank = levelArr.map((lev)=>lev.player.body[0].money);
    levelArr.map((lev, i)=>{
        if (panel.level === i + 1) {
            level(lev,panel);
        }
    })
     if(panel.level === 0) {
        panel.levelPanel();
    }
   // window.localStorage.setItem("money", moneyBank);

    if (panel.level !== 0) {

        panel.buttonView();
        atanIcon.buttonView();
        if (md.mobile()) {
        }
    } else {
    }
    if (panel.buttonActive == 0) {
        levelArr.map((lev)=>{
            lev.player.body[0].level = 0;
        })
        panel.level = 0;
    }
    // panel.levelEnd();
}

function mousePressed(e) {
    panel.pressed(e);
levelArr.map((lev)=>{
    lev.pressedM(e);
})

    levelStep_1.pressed(e);
if(panel.atanActive === 0 && panel.atanMoney >= 10){
    atanIcon.pressed(e);
    if(atanIcon.buttonActive == "atan"){
        panel.countMoney = panel.countMoney + 10
    }


}

    console.log(atanIcon.buttonActive)

}

function mouseReleased(e) {
    levelArr.map((lev)=>{
        lev.relassedM(e);
    })

    atanIcon.rePressed(e);
    levelStep_1.rePressed(e);


}

function keyPressed(e) {
    levelArr.map((lev)=>{
        lev.pressed(e);
    })

}

function touchMoved() {
    // do some stuff
    return false;
}

function keyReleased(e) {
    levelArr.map((lev)=>{
        lev.rePressed(e);
    })
}
