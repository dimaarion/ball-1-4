class Panel {
  level = 0;
  x = 10;
  y = 10;
  w = 1500;
  h = 2000;
  bg;
  window;
  tableNum;
  tableNumX = 100;
  tableNumY = 150;
  tableNumYDop = 100;
  tableNumXDop;
  tableNumSize;
  textX = 0;
  textY = 90;
  textSizes = 10;
  levelNum = [{}];
  preload() {
    this.bg = loadImage("./asset/panel/BG.png");
    this.window = loadImage("./asset/panel/Window.png");
    this.tableNum = loadImage("./asset/panel/Table_03.png");
    this.levelNum = loadJSON("./asset/panel/level.json");
  }

  create() {
    this.tableNumYDop = this.tableNumYDop;
    this.tableNumSize = this.tableNumX;
  }

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
    //  this.y = windowWidth / 15;
    this.textY = windowWidth / 5.4;
    this.tableNumYDop = windowWidth / 7;
    this.tableNumX = windowWidth / 15;
    this.tableNumY = this.tableNumX;
    this.tableNumSize = this.tableNumX;
    this.textSizes = this.tableNumSize / 2;
    this.w = windowWidth / 2;
    this.h = this.w * 1.5;
    this.tableNumXDop = windowWidth / 2 - this.tableNumX * 5 + this.tableNumX;

    image(this.bg, 0, 0, this.procentX(100), this.procentY(100));
    image(this.window, windowWidth / 2 - this.w / 2, this.y, this.w, this.h);
    let col = 0;
    let row = 0;
    let index = 0;
    Object.values(this.levelNum).map((lev, i) => {
      col++;
      if (i < 9) {
        this.textX = windowWidth / 1.91 - this.tableNumX * 5 + this.tableNumX;
      } else {
        this.textX = windowWidth / 1.95 - this.tableNumX * 5 + this.tableNumX;
      }
      image(
        this.tableNum,
        col * this.tableNumX + this.tableNumXDop,
        row * this.tableNumY + this.tableNumYDop,
        this.tableNumSize,
        this.tableNumSize
      );
      textSize(this.textSizes);
      fill(255);

      text(
        lev.id,
        col * this.tableNumX + this.textX,
        row * this.tableNumY + this.textY
      );

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
        this.tableNumX,
        this.procentY(10),
        this.procentX(10),
        this.procentY(10)
      )
    ) {
      this.level = 1;
    }
  }
}
