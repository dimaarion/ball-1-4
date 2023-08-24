class Crystal {
  animate = new Animate();
  animate2 = new Animate();
  point = new Body("point");
  point2 = new Body("point2");
  pointArr = [{}];
  pointArr2 = [{}];
  boxGream;
  t = 1000;
  count = 0;
  preload() {
  /*  this.animate.animate("./asset/crystall.png", 189);
    this.animate2.animateD("./asset/crystall2.png", 189);
    this.boxGream = loadImage("./asset/4.png");
    this.point.loadImage("./asset/crystall.png", 189);
    this.point2.loadImage("./asset/crystall2.png", 189);*/
  }

  setup(engine, world, scena) {
    //  this.animate.setupAnimate();
    //  this.animate.setupAnimate();
    //  this.animate2.setupAnimate();
   // this.point.sensor = true;
  //  this.point.createRect(world, scena);
    //  this.pointArr = world.bodies.filter((f) => f.label === "point");
    //  this.animate.position = this.pointArr.map((e) => e.position);
  //  this.point2.sensor = true;
   // this.point2.createRect(world, scena);
    //  this.pointArr2 = world.bodies.filter((f) => f.label === "point2");
  }

  view() {
   // this.point.animateSprite();
  //  this.point2.animateSprite();
    //this.animate.params();
    // this.point.timer(this.point.body.length - 1, this.t);
    // this.point2.timer(this.point2.body.length - 1, this.t);
    /* image(
      this.animate.spriteEllipse(this.point.body[this.point.n].width),
      this.point.body[this.point.n].position.x,
      this.point.body[this.point.n].position.y
    );
    image(
      this.animate2.spriteEllipse(this.point.body[this.point2.n].width),
      this.point2.body[this.point2.n].position.x,
      this.point2.body[this.point2.n].position.y
    );*/
    //  image(this.boxGream, 150, 150,100,100);
  }
}
