class Portal extends Body {
  portal_vertical_l = new Animate();
  portal_vertical_r = new Animate();
  gorizontal_restart = new Animate();
  gorizontal_restart_up = new Animate();
  vertical_restart = new Animate();
  gorizontal = new Animate();
  gorizontal_up = new Animate();
  portal_level_t = new Animate();
  level_vertical = new Animate();
  portal_level_b = new Animate();
  portal_restart_vertical_l = new Animate();
  portal_restart_vertical_r = new Animate();
  scale = 8;
  angle = 0;
  activeRight;
  constructor(props) {
    super(props);
  }
  preload() {

  }

  create(world, scena) {
    this.sensor = true;
    this.createRect(world, scena);

    
  }

  view() {
   /*
 this.activeRight.params()
    this.body
      .filter((f) => f.typeObject === "activeRight")
      .map((b) => {
              image(
                  this.activeRight.sprite(),
                  b.position.x -  b.width / 2,
                  b.position.y - b.height / 2,
                  b.width,
                  b.height
              )
          }
      );



      this.body
      .filter((f) => f.typeObject === "portal_vertical_r")
      .map((b) =>
        image(
          this.portal_vertical_r.sprite(),
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
      .filter((f) => f.typeObject === "portal_restart_vertical_l")
      .map((b) =>
        image(
          this.portal_restart_vertical_l.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );

      this.body
      .filter((f) => f.typeObject === "portal_restart_vertical_r")
      .map((b) =>
        image(
          this.portal_restart_vertical_r.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );

      this.body
      .filter((f) => f.typeObject === "gorizontal_restart_up")
      .map((b) =>
        image(
          this.gorizontal_restart_up.sprite(),
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
      .filter((f) => f.typeObject === "gorizontal_up")
      .map((b) =>
        image(
          this.gorizontal_up.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );


      this.body
      .filter((f) => f.typeObject === "portal_level_t")
      .map((b) =>
        image(
          this.portal_level_t.sprite(),
          b.position.x - b.width / 2,
          b.position.y - b.height / 2,
          b.width,
          b.height
        )
      );
      this.body
      .filter((f) => f.typeObject === "portal_level_b")
      .map((b) =>
        image(
          this.portal_level_b.sprite(),
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
      );*/
  }


}
