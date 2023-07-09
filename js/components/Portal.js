class Portal extends Body {
  animate = new Animate();
  animate2 = new Animate();
  scale = 8;
  constructor(props) {
    super(props);
  }
  preload() {
    this.animate.animateE("./asset/portal/portal.png");
    this.animate2.animateE("./asset/portal/portal2.png");
  }

  create(world, scena) {
    this.animate.setupAnimate();
    this.sensor = true;
    this.createRect(world, scena);

    this.body.map((b) => {});
    console.log(this.body);
  }

  view() {
    this.body
      .filter((f) => f.typeObject === "vertical")
      .map((b) =>
        image(
          this.animate.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );
    this.body
      .filter((f) => f.typeObject === "gorizontal")
      .map((b) =>
        image(
          this.animate2.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );
  }
}
