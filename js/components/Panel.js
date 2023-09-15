class Panel {
    level = 0;
    x = 10;
    y = 10;
    w = 1900;
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
    money = new Animate();
    crystal2 = new Animate();
    body = new Body();
    world;
    buttonActive = NaN;
    active;
    display = "start";
    scena = new Scena();
    bank = 0;
    atanActive = 0;
    countMoney = 0;
    atanMoney = 0;
    
    preload() {

        this.window = loadImage("./asset/panel/Window.png");
        this.tableNum = loadImage("./asset/panel/Table_03.png");
        this.levelNum = loadJSON("./asset/panel/level.json");
        this.statsBar = loadImage("./asset/panel/Stats_Bar.png");
        this.clock = loadImage("./asset/panel/Clock_Icon.png");
        this.money.animateLoad("./asset/money/moneyStatic.png");

    }

    button(bx, by, bw, bh, bImg = "", active) {
        this.active = active;
        this.bx = bx;
        this.by = by;
        this.bw = bw;
        this.bh = bh;
        this.bImg = bImg;
        if (this.bImg !== "") {
            this.bImg = loadImage(bImg);
        }
    }

    buttonView() {
        if (this.bImg !== "") {
            image(
                this.bImg,
                this.scena.procentX(this.bx),
                this.scena.procentY(this.by),
                this.scena.procentXY(this.bw),
                this.scena.procentXY(this.bh)
            );
        }
    }

    create() {

        this.tableNumYDop = this.tableNumYDop;
        this.tableNumSize = this.tableNumX;
        this.timer = new Timer(1000);
        this.timer.start();

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
        return pointX >= x && // right of the left edge AND
            pointX <= x + xW && // left of the right edge AND
            pointY >= y && // below the top AND
            pointY <= y + yW;

    };

    levelEnd() {
        image(
            this.window,
            this.procentX(25),
            this.procentY(10),
            this.procentX(50),
            this.procentY(80)
        );
    }

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
        // image(this.bg, 0, 0, this.procentX(100), this.procentY(100));
        background("#F39986");
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

    headBar(props) {
        image(
            this.statsBar,
            this.scena.procentXY(0),
            this.scena.procentXY(0),
            this.scena.procentXY(25),
            this.scena.procentXY(5)
        );
        image(
            this.clock,
            this.scena.procentXY(1),
            this.scena.procentXY(1),
            this.scena.procentXY(3),
            this.scena.procentXY(3)
        );
        textSize(this.scena.procentXY(2));
        fill(255);
        // this.updateTimer();
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
            this.scena.procentXY(5),
            this.scena.procentXY(3.3)
        );

        image(
            this.money.sprite(),
            this.scena.procentXY(15),
            this.scena.procentXY(2),
            this.scena.procentXY(1.2),
            this.scena.procentXY(1.2)
        );


        let n = 0;
        this.bank.filter((f) => f !== undefined).map((x) => {
            n += x;
        })



        this.atanActive = props.player.active;

            n = n - this.countMoney

this.atanMoney = n;
        text(n, this.scena.procentXY(16.5), this.scena.procentXY(3.3));
        this.updateTimer();
    }

    reset() {
        this.timer.reset()
    }

    updateTimer() {
        if (this.timer.expired()) {
            this.elapsedSeconds++;
            if (this.elapsedSeconds > 59) {
                this.elapsedSeconds = 0;
                this.elapsedMinutes++;
            }
            if (this.elapsedMinutes > 59) {
                this.elapsedMinutes = 0;
                this.elapsedHour++;
            }
            if (this.elapsedHour > 99) {
                this.elapsedHour = 0;
            }
            this.timer.start();
        }
    }

    pressed() {
        // Выбор уровней



        if (this.level === 0) {
            let col = 0;
            let row = 0;

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
                    this.display = "start";
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
                this.scena.procentX(this.bx),
                this.scena.procentY(this.by),
                this.scena.procentXY(this.bw),
                this.scena.procentXY(this.bh)
            )
        ) {
            //  this.level = 0;
            // this.body.getName(this.world, "player").level = 0;
            this.buttonActive = this.active;
        } else {
            this.buttonActive = NaN;
        }
    }

    rePressed() {

        if (
            this.collidePointRect(
                mouseX,
                mouseY,
                this.scena.procentX(this.bx),
                this.scena.procentY(this.by),
                this.scena.procentXY(this.bw),
                this.scena.procentXY(this.bh)
            )
        ) {
            this.buttonActive = 0;
        } else {
            this.buttonActive = NaN;
        }

    }
}
