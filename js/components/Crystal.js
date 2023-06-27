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
    this.animate.animate(
      [
        "./asset/crystall2.png",
        "./asset/crystall2.png",
        "./asset/crystall.png",
      ],
      [189, 189, 189]
    );
    // this.animate2.animateD("./asset/crystall2.png", 189);
    //  this.boxGream = loadImage("./asset/4.png");
    //  this.point.loadImage("./asset/crystall.png", 189);
    //   this.animate.img = loadImage("./asset/crystall.png");
  }

  setup(engine, world, scena) {
    // this.animate.setupAnimate();
    this.animate.setupAnimateAll();
    //  this.animate2.setupAnimate();
    //  this.point.sensor = true;
    //   this.point.createRect(world, scena);
    //   this.pointArr = world.bodies.filter((f) => f.label === "point");
    //  this.point2.sensor = true;
    //  this.point2.createRect(world, scena);
    //   this.pointArr2 = world.bodies.filter((f) => f.label === "point2");
    console.log(this.animate.arrSprite[1][0][0].image[0]);
  }

  view() {
    //  this.point.animateSprite();
    // this.animate.params();
    //  image(this.animate.arrSprite[0][0][0].arrImage[0], 300, 300, 100, 100);
    //   this.point.timer(this.pointArr.length - 1, this.t);
    //   this.point2.timer(this.pointArr2.length - 1, this.t);
    //   image(this.animate.spriteEllipse(this.pointArr[this.point.n].width), this.pointArr[this.point.n].position.x, this.pointArr[this.point.n].position.y);
    //   image(this.animate2.spriteEllipse(this.pointArr2[this.point2.n].width), this.pointArr2[this.point2.n].position.x, this.pointArr2[this.point2.n].position.y);
    //  image(this.boxGream, 150, 150,100,100);
  }
}
