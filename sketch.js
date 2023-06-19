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
  push();
  if (panel.level === 1) {
    level_1.view();
  } else {
    panel.view();
    textSize(20);
    fill(255);
    text(panel.level, 200, 300);
  }

  pop();
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
