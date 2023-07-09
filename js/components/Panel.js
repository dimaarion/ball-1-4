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
  openPanel;
  bx;
  by;
  bw;
  bh;
  bImg;
  buttons;
  statsBar;
  clock;
  timer;
  elapsedSeconds = 0;
  elapsedMinutes = 0;
  elapsedHour = 0;
  zero = "";
  zero2 = "";
  zero3 = "";
  crystal = new Animate();
  crystal2 = new Animate();
  preload() {
    this.bg = loadImage("./asset/panel/BG.png");
    this.window = loadImage("./asset/panel/Window.png");
    this.tableNum = loadImage("./asset/panel/Table_03.png");
    this.levelNum = loadJSON("./asset/panel/level.json");
    this.statsBar = loadImage("./asset/panel/Stats_Bar.png");
    this.clock = loadImage("./asset/panel/Clock_Icon.png");
    this.crystal.animateD("./asset/crystall.png", 189);
    this.crystal2.animateD("./asset/crystall2.png", 189);
  }

  button(bx, by, bw, bh, bImg = "") {
    this.bx = bx;
    this.by = by;
    this.bw = bw;
    this.bh = bh;
    this.bImg = bImg;
    if (this.bImg != "") {
      this.bImg = loadImage(bImg);
    }
  }
  buttonView() {
    if (this.bImg != "") {
      image(
        this.bImg,
        this.procentX(this.bx),
        this.procentY(this.by),
        this.procentX(this.bw),
        this.procentX(this.bh)
      );
    }
  }

  create() {
    this.tableNumYDop = this.tableNumYDop;
    this.tableNumSize = this.tableNumX;
    this.timer = new Timer(1000);
    this.timer.start();
    this.crystal.setupAnimate();
    this.crystal2.setupAnimate();
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

  levelPanel() {
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

  headBar() {
    image(
      this.statsBar,
      this.procentX(0),
      this.procentY(0),
      this.procentX(30),
      this.procentX(3)
    );
    image(
      this.clock,
      this.procentX(1),
      this.procentX(0.5),
      this.procentX(2),
      this.procentX(2)
    );
    textSize(this.procentX(1.5));
    fill(255);
    this.updateTimer();
    if (this.elapsedSeconds < 10) {
      this.zero = "0";
    } else {
      this.zero = "";
    }
    if (this.elapsedMinutes < 10) {
      this.zero2 = "0";
    } else {
      this.zero2 = "";
    }
    if (this.elapsedHour < 10) {
      this.zero3 = "0";
    } else {
      this.zero3 = "";
    }
    text(
      this.zero3 +
        this.elapsedHour +
        ":" +
        this.zero2 +
        this.elapsedMinutes +
        ":" +
        this.zero +
        this.elapsedSeconds,
      this.procentX(3.5),
      this.procentX(1.9)
    );
    image(
      this.crystal.sprite(),
      this.procentX(10),
      this.procentX(0.6),
      this.procentX(2.5),
      this.procentX(2.5)
    );
    image(
      this.crystal2.sprite(),
      this.procentX(13.5),
      this.procentX(0.6),
      this.procentX(2.5),
      this.procentX(2.5)
    );
    text("x", this.procentX(12), this.procentX(2));
    text("1", this.procentX(12.9), this.procentX(2));
  }
  view() {
    this.levelPanel();
  }
  updateTimer() {
    if (this.timer.expired()) {
      this.elapsedSeconds++;
      if (this.elapsedSeconds > 60) {
        this.elapsedSeconds = 0;
        this.elapsedMinutes++;
      }
      if (this.elapsedMinutes > 60) {
        this.elapsedMinutes = 0;
        this.elapsedHour++;
      }
      if (this.elapsedHour > 99) {
        this.elapsedHour = 0;
      }
      this.timer.start();
    }
  }
  pressed(e) {
    // Выбор уровней
    if (this.level === 0) {
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

        if (
          this.collidePointRect(
            mouseX,
            mouseY,
            col * this.tableNumX + this.tableNumXDop,
            row * this.tableNumY + this.tableNumYDop,
            this.tableNumSize,
            this.tableNumSize
          )
        ) {
          this.level = lev.id;
        }

        if (col > 5) {
          col = 0;
          row++;
        }
      });
    }

    // Кнопка вызова панели уровней
    if (
      this.collidePointRect(
        mouseX,
        mouseY,
        this.procentX(this.bx),
        this.procentY(this.by),
        this.procentX(this.bw),
        this.procentX(this.bh)
      )
    ) {
      this.level = 0;
    }
  }
}