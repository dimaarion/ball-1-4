/* eslint-disable no-undef, no-unused-vars */
let Engine = Matter.Engine;
let engine, world;
let level_1 = new Level_1();
let panel = new Panel();
let gui;
let b;
let j;
let x, y, velX, velY;
function preload() {
  scena1 = loadJSON("./scena/scena.json");
}
function preload() {
  panel.preload();
  panel.button(95, 0, 5, 5, "./asset/panel/Settings_BTN.png");
  level_1.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight); 
  gui = createGui();
  engine = Engine.create();
  engine.gravity.y = 10;
  world = engine.world;
  Engine.run(engine);
  panel.create();
  level_1.create(engine, world);
  j = createJoystick("Joystick", panel.procentX(80), panel.procentY(60) , panel.procentX(20), panel.procentX(20), -1, 1, 1, -1);
  b = createButton("Button", 50, 50);

}

function draw() {
  
  if (panel.level === 1) {
    push();
    level_1.view();
    level_1.player.body.map((b)=>Matter.Body.setVelocity(b,{x:j.valX * 5,y:j.valY * 5}));
    pop();
  } else {
    panel.view();
    textSize(20);
    fill(255);
    text(panel.level, 200, 300);
  }
  if (panel.level != 0) {
    panel.buttonView();
  }
  drawGui();
  if(b.isPressed) {
    print(b);
  }
  if (j.isChanged) {
    // Print a message when Slider 1 is changed
    // that displays its value.
    print(j.label + " = {" + j.valX + ", " + j.valY + "}");
    
  }
  
  // Use Joystick's output to change velocity
 
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
