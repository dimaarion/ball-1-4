/* eslint-disable no-undef, no-unused-vars */
let Engine = Matter.Engine;
let engine, world;
let level_1 = new Level_1();
let panel = new Panel();
let gui;
let b;
let j;
let x, y, velX, velY;
let joystickDot1;
let joystickDot2;
function preload() {
  scena1 = loadJSON("./scena/scena.json");
}
function preload() {
  panel.preload();
  panel.button(95, 0, 5, 5, "./asset/panel/Settings_BTN.png");
  level_1.preload();
  joystickDot1 = loadImage("./asset/panel/Dot_1.png");
  joystickDot2 = loadImage("./asset/panel/Dot_2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  gui = createGui();
  engine = Engine.create();
  engine.gravity.y = 10;
  world = engine.world;
  Engine.run(engine);
  panel.create();
  if(windowWidth > windowHeight){
     j = createJoystick("Joystick", panel.procentX(70), panel.procentY(50) , panel.procentX(20), panel.procentX(20), -1, 1, 1, -1);
  }else{
     j = createJoystick("Joystick", panel.procentX(70), panel.procentY(80) , panel.procentX(20), panel.procentX(20), -1, 1, 1, -1);
  }
 print(j)

  level_1.player.joystick = j;
  level_1.create(engine, world);
}

function draw() {
  
  if (panel.level === 1) {
    push();
    level_1.view();
    pop();
  //  drawGui();
  } else {
    panel.view();
  }
  if (panel.level != 0) {
    panel.buttonView();
    image(joystickDot1,j.x,j.y,j.w,j.h);
    image(joystickDot2,j.x + j.valX * panel.procentX(7),j.y + j.valY * panel.procentX(7),j.w,j.h);
    print(j.valX)
  }else{
     
  }

 
 
}

function mousePressed(e) {
  panel.pressed(e);
  level_1.pressedM(e);
}

function mouseReleased(e) {
  level_1.relassedM(e);
}

function keyPressed(e) {
  level_1.pressed(e);
}

function touchMoved() {
  // do some stuff
  return false;
}

function keyReleased(e) {
  level_1.rePressed(e);
}
