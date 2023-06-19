/* eslint-disable no-undef, no-unused-vars */
let Engine = Matter.Engine;
let engine, world;
let level_1 = new Level_1();
let panel = new Panel();
function preload() {
  scena1 = loadJSON("./scena/scena.json");
}
function preload() {
  panel.preload();
  panel.button(90, 0, 10, 10, "./asset/panel/Settings_BTN.png");
  level_1.preload();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  engine.gravity.y = 0;
  world = engine.world;
  Engine.run(engine);
  panel.create();
  level_1.create(engine, world);
}

function draw() {
  if (panel.level === 1) {
    push();
    level_1.view();
    pop();
  } else {
    panel.view();
    textSize(20);
    fill(255);
    text(panel.level, 200, 300);
  }
  // panel.level = panel.buttonView(0, panel.level);
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

function keyReleased(e) {
  level_1.rePressed(e);
}
