class Portal extends Body {
  vertical = new Animate();
  gorizontal_restart = new Animate();
  vertical_restart = new Animate();
  gorizontal = new Animate();
  level = new Animate();
  level_vertical = new Animate();
  scale = 8;
  constructor(props) {
    super(props);
  }
  preload() {
    this.vertical.animateE("./asset/portal/portal_vertical.png");
    this.gorizontal_restart.animateE("./asset/portal/portal_restart_gorizontal.png");
    this.vertical_restart.animateE("./asset/portal/portal_restart_vertical.png")
    this.gorizontal.animateE("./asset/portal/portal_gorizontal.png");
    this.level.animateE("./asset/portal/portal_level_gorizontal.png");
    this.level_vertical.animateE("./asset/portal/portal_level_gorizontal.png");
  }

  create(world, scena) {
    this.sensor = true;
    this.createRect(world, scena);
    this.body.map((b) => {});
  }

  view() {
    this.body
      .filter((f) => f.typeObject === "vertical")
      .map((b) =>
        image(
          this.vertical.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );

    this.body
      .filter((f) => f.typeObject === "gorizontal_restart")
      .map((b) =>
        image(
          this.gorizontal_restart.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );

      this.body
      .filter((f) => f.typeObject === "restaet_vertical")
      .map((b) =>
        image(
          this.vertical_restart.sprite(),
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
          this.gorizontal.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );


      this.body
      .filter((f) => f.typeObject === "gorizontal_level")
      .map((b) =>
        image(
          this.level.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );

      this.body
      .filter((f) => f.typeObject === "vertical_level")
      .map((b) =>
        image(
          this.level_vertical.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );
  }


}
