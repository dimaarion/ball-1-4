class Panel {
  level = 0;
  x = 10;
  y = 10;
  w = 80;
  h = 80;
  bg;
  window;
  tableNum;
  levelNum = [{}];
  preload() {
    this.bg = loadImage("./asset/panel/BG.png");
    this.window = loadImage("./asset/panel/Window.png");
    this.tableNum = loadImage("./asset/panel/Table_03.png");
    this.levelNum = loadJSON("./asset/panel/level.json");
  }

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
    image(this.bg, 0, 0, this.procentX(100), this.procentY(100));
    image(
      this.window,
      this.procentX(this.x),
      this.procentY(this.y),
      this.procentX(this.w),
      this.procentY(this.h)
    );
    let col = 0;
    let row = 1.6;
    let index = 0;
    Object.values(this.levelNum).map((lev) => {
      col++;
      image(
        this.tableNum,
        this.procentX((col + this.x) * 5),
        this.procentX((row + this.y) * 5),
        this.procentX(lev.w),
        this.procentX(lev.h)
      );
      textSize(25);
      // background(255);
      text(lev.id, this.procentX(col * 13.5), this.procentY(row * 13));
      rect(this.procentX(col * 12.8), this.procentY(row * 13), 10, 10);
      if (col > 5) {
        col = 0;
        row++;
      }
    });
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
