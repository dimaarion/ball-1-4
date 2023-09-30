/* eslint-disable no-undef, no-unused-vars */
let Engine = Matter.Engine;
let engine, world;

let arrSprites = [{ img: { name: "", frame: 0 } }]
function getArrImages(dir,n) {
    let a = [];
    let count = 1
    for (let index = 1; index < n + 1 ; index++) {
        count = index;
        if(index < 10){
            index = "0" + index;
        }
        a[count] = {id:count,name:dir + "/Tile_" + index  + ".png"}
        }
        return a;
}


let setLevels = [
    {
        level: new Level_1("./js/scena/scena.json", 1), img:getArrImages("./asset/maze/1 Tiles",81)
    },
    { level: new Level_1("./js/scena/scena2.json", 2), img: [{ id: 1, name: "./js/scena/scena.png" }] },
    { level: new Level_1("./js/scena/scena3.json", 3), img: [{ id: 1, name: "./js/scena/scena.png" }] },
    { level: new Level_1("./js/scena/scena4.json", 4), img: [{ id: 1, name: "./js/scena/scena.png" }] },
    { level: new Level_1("./js/scena/scena4.json", 5), img: [{ id: 1, name: "./js/scena/scena.png" }] },
]

let panel = new Panel();
let levelStep_1 = new Panel();


let gui;
let b;
let j;
let x, y, velX, velY;

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


let portalImage = new Animate();
let money = new Animate();
let closedСhest = new Animate();
let openСhest = new Animate();

let activeRight = new Animate();
let atan = new Animate();
let lightningImage = new Animate();
let stone = new Animate();

let moneyBank = 0


setImagesBg = setLevels.map((lev) => {
    lev.level.images = lev.img.map((img) => {
        let s = new TileMap(lev.level.scena);
        s.name = img.name;
        s.id = img.id;
        return s;
    })

})

let levelArr = setLevels.map((lev) => lev.level);

let props;

let loading = new Loading();
loading.load = 0;
function preload() {

    playerImage = loadImage("./asset/Player/ball.png");
    money.animateLoad("./asset/money/money.png", 63);
    closedСhest.animateLoad("./asset/objects/Chest_0.png");
    openСhest.animateLoad("./asset/objects/Chest_1.png");
    activeRight.animateD("./asset/objects/right.png", 50);
    atan.animateE("./asset/Player/atan.png");
    lightningImage.animateLoad("./asset/objects/lightning.png", 20);
    stone.animateLoad("./asset/objects/stone.png");
    levelArr.map((lev) => lev.images.map((img) => img.preload()))

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
    levelArr.map((lev, i) => {
        lev.preload();
    })


}

function setup() {
    createCanvas(windowWidth, windowHeight);

    gui = createGui();
    md = new MobileDetect(window.navigator.userAgent);

    money.setupAnimate();
    activeRight.setupAnimate();
    lightningImage.setupAnimate();
    panel.create();

    levelArr.map((lev) => {
        lev.player.img = playerImage;
        lev.player.atanImg = atan;
        lev.player.atanIcon = atanIcon;
        lev.money.image = money;
        lev.playRight = playRight;
        lev.playLeft = playLeft;
        lev.restart = restart;
        lev.playUp = playUp;
        lev.portal.activeRight = activeRight;
        lev.events.levelCount = levelArr.length;
        lev.chest.imageClosed = closedСhest;
        lev.chest.imageOpen = openСhest;
        lev.lightning.image = lightningImage;
        lev.stone.image = stone;

    })

    levelArr.map((lev, i) => {
        lev.create();
    });



    loading.load = 1;
}

function level(obj, panel) {
    push();
    obj.view();
    pop();
    panel.headBar({ player: obj.player });
    obj.player.money = panel.bank;
}



function draw() {
    panel.bank = levelArr.map((lev) => lev.player.body[0].money);
    levelArr.map((lev, i) => {
        if (panel.level === i + 1) {
            level(lev, panel);
        }
    })
    if (panel.level === 0) {
        panel.levelPanel();
    }


    if (panel.level !== 0) {

        panel.buttonView();
        atanIcon.buttonView();
        if (md.mobile()) {
        }
    } else {
    }
    if (panel.buttonActive === 0) {
        levelArr.map((lev) => {
            lev.player.body[0].level = 0;
        })
        panel.level = 0;
    }
    // panel.levelEnd();

}

function mousePressed(e) {
    panel.pressed(e);
    levelArr.map((lev) => {
        lev.pressedM(e);
    })

    levelStep_1.pressed(e);
    if (panel.atanActive === 0 && panel.atanMoney >= 10) {
        atanIcon.pressed(e);
        if (atanIcon.buttonActive === "atan") {
            panel.countMoney = panel.countMoney + 10
        }


    }



}

function mouseReleased(e) {
    levelArr.map((lev) => {
        lev.relassedM(e);
    })

    atanIcon.rePressed(e);
    levelStep_1.rePressed(e);


}

function keyPressed(e) {
    levelArr.map((lev) => {
        lev.pressed(e);
    })

}

function touchMoved() {
    // do some stuff
    return false;
}

function keyReleased(e) {
    levelArr.map((lev) => {
        lev.rePressed(e);
    })
}



loading.render();
