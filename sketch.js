/* eslint-disable no-undef, no-unused-vars */
let Engine = Matter.Engine;
let engine, world;
let engine2, world2;
let scena1 = new Scena("./js/scena/scena.json");
let level_1 = new Level_1("./js/scena/scena.json", 1);
let level_2 = new Level_1("./js/scena/scena2.json", 2);
let level_3 = new Level_1("./js/scena/scena3.json", 3);
//let level_2 = new Level_2();
let panel = new Panel();
let playRight = new Panel();
let playLeft = new Panel();
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

function preload() {
  panel.preload();
  if (deviceOrientation === LANDSCAPE) {
    panel.button(95, 0, 5, 5, "./asset/panel/Settings_BTN.png", 0);
    playRight.button(30, 75, 8, 8, "./asset/panel/PlayRight_BTN.png", 1);
    playLeft.button(10, 75, 8, 8, "./asset/panel/PlayLeft_BTN.png", 2);
  } else {
    panel.button(92, 0, 8, 8, "./asset/panel/Settings_BTN.png", 0);
    playRight.button(30, 85, 8, 8, "./asset/panel/PlayRight_BTN.png", 1);
    playLeft.button(10, 85, 8, 8, "./asset/panel/PlayLeft_BTN.png", 2);

  }
  levelStep_1.button(60, 60, 8, 8, "./asset/panel/step_level.png", 2);
  level_1.preload();
  level_2.preload();
  level_3.preload();
  joystickDot1 = loadImage("./asset/panel/Dot_1.png");
  joystickDot2 = loadImage("./asset/panel/Dot_2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  md = new MobileDetect(window.navigator.userAgent);
  level_1.scena.scale = 2;

  level_1.player.joystick = j;
  level_1.create(panel);
  level_2.player.joystick = j;
  level_2.scena.scale = 2;
  level_2.create(panel);
  level_3.scena.scale = 10;
  level_3.create(panel);

}

function draw() {

  if (panel.level === 1) {
    push();
    level_1.view(panel);
    if (playRight.buttonActive === 1) {
      level_1.player.speed = playRight.buttonActive;
    }
    if (playLeft.buttonActive === 2) {
      level_1.player.speed = playLeft.buttonActive;
    }
    if (level_1.player.body[0].level == 2) {
   //   panel.level = level_1.player.body[0].level;
    }

    pop();
    panel.headBar();
    playRight.buttonView();
    playLeft.buttonView();
    if (level_1.player.body[0].level === 2 && panel.display !== "start") {
      panel.levelEnd();
      levelStep_1.buttonView();
      if (levelStep_1.buttonActive === 2) {
        panel.level = 2;
      }

    }
    //  drawGui();
  } else if (panel.level === 2) {
    push();
    level_2.view(panel);
    if (playRight.buttonActive === 1) {
      level_2.player.speed = playRight.buttonActive;
    }
    if (playLeft.buttonActive === 2) {
      level_2.player.speed = playLeft.buttonActive;
    }
    pop();
    panel.headBar();
    playRight.buttonView();
    playLeft.buttonView();
    if (level_2.player.body[0].level === 3 && panel.display !== "start") {
      //  panel.levelEnd();
    }
    // drawGui();
  } else if (panel.level === 3) {
    push();
    level_3.view(panel);
    if (playRight.buttonActive === 1) {
      level_3.player.speed = playRight.buttonActive;
    }
    if (playLeft.buttonActive === 2) {
      level_3.player.speed = playLeft.buttonActive;
    }
    pop();
    panel.headBar();
    playRight.buttonView();
    playLeft.buttonView();
    if (level_3.player.body[0].level === 3 && panel.display !== "start") {
      //panel.levelEnd();
    }
    // drawGui();
  } else {
    panel.levelPanel();
  }
  // panel.level = panel.buttonActive;

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
  playRight.pressed(e);
  playLeft.pressed(e);
  level_1.pressedM(e);
  level_2.pressedM(e);
  level_3.pressedM(e);
  levelStep_1.pressed(e);

}

function mouseReleased(e) {
  level_1.relassedM(e);
  level_2.relassedM(e);
  level_3.relassedM(e);
  playRight.rePressed(e);
  playLeft.rePressed(e);
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
