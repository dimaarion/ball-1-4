/* eslint-disable no-undef, no-unused-vars */
let Engine = Matter.Engine;
let engine, world;
let engine2, world2;
let scena1 = new Scena("./js/scena/scena.json");
let level_1 = new Level_1("./js/scena/scena.json");
let level_2 = new Level_1("./js/scena/scena2.json");
//let level_2 = new Level_2();
let panel = new Panel();

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
  panel.button(92, 0, 8, 8, "./asset/panel/Settings_BTN.png", 0);
  level_1.preload();
  level_2.preload();
  joystickDot1 = loadImage("./asset/panel/Dot_1.png");
  joystickDot2 = loadImage("./asset/panel/Dot_2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  md = new MobileDetect(window.navigator.userAgent);
  if (deviceOrientation === LANDSCAPE) {
    j = createJoystick(
      "Joystick",
      panel.procentX(70),
      panel.procentY(50),
      panel.procentX(20),
      panel.procentX(20),
      -1,
      1,
      1,
      -1
    );
  } else {
    j = createJoystick(
      "Joystick",
      panel.procentX(70),
      panel.procentY(80),
      panel.procentX(20),
      panel.procentX(20),
      -1,
      1,
      1,
      -1
    );
  }

  level_1.player.joystick = j;
  level_1.create(panel);
  level_2.player.joystick = j;
  level_2.create(panel);
}

function draw() {
  console.log(panel.level);
  if (panel.level === 1) {
    push();
    level_1.view(panel);
    pop();
    panel.headBar();
    //  drawGui();
  } else if (panel.level === 2) {
    push();
    level_2.view(panel);
    pop();
    panel.headBar();
    // drawGui();
  } else {
    panel.view();
  }
  // panel.level = panel.buttonActive;
  if (panel.level !== 0) {
    panel.buttonView();
    if (md.mobile()) {
      image(joystickDot1, j.x, j.y, j.w, j.h);
      image(
        joystickDot2,
        j.x + j.valX * panel.procentX(7),
        j.y + j.valY * panel.procentX(7),
        j.w,
        j.h
      );
    }
  } else {
  }
}

function mousePressed(e) {
  if (panel.buttonActive == 0) {
    panel.level = 0;
  }
  panel.pressed(e);
  test++;

  level_1.pressedM(e);
  level_2.pressedM(e);
}

function mouseReleased(e) {
  level_1.relassedM(e);
  level_2.relassedM(e);
}

function keyPressed(e) {
  level_1.pressed(e);
  level_2.pressed(e);
}

function touchMoved() {
  // do some stuff
  return false;
}

function keyReleased(e) {
  level_1.rePressed(e);
  level_2.rePressed(e);
}
