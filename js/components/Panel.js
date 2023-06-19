class Panel {
  level = 0;
  x = 10;
  y = 10;
  w = 80;
  h = 80;
  constructor(x, y, w, h) {}
  preload() {}

  create() {}

  procentIn(n, p) {
    return (n / 100) * p;
  }

  procent(x, scale = 1) {
    let r = window.innerWidth * scale;
    return this.procentIn(r, x);
  }

  procentX(x) {
    let r = window.innerWidth;
    return this.procentIn(r, x);
  }
  procentY(x) {
    let r = window.innerHeight;
    return this.procentIn(r, x);
  }
  procentInv(n, p) {
    return (p * 100) / n;
  }

  collidePointRect = function (pointX, pointY, x, y, xW, yW) {
    //2d
    if (
      pointX >= x && // right of the left edge AND
      pointX <= x + xW && // left of the right edge AND
      pointY >= y && // below the top AND
      pointY <= y + yW
    ) {
      // above the bottom

      return true;
    }
    return false;
  };

  view() {
    rect(
      this.procentX(10),
      this.procentY(10),
      this.procentX(80),
      this.procentY(80)
    );
    color("blue");
    rect(
      this.procentX(10),
      this.procentY(10),
      this.procentX(10),
      this.procentY(10)
    );
  }

  pressed(e) {
    if (
      this.collidePointRect(
        mouseX,
        mouseY,
        this.procentX(10),
        this.procentY(10),
        this.procentX(10),
        this.procentY(10)
      )
    ) {
      this.level = 1;
    }
  }
}
