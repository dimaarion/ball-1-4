class Animate {
  name;
  img;
  x;
  y;
  w;
  h;
  xr = 0;
  xp = 0;
  frame = 0;
  widthI = 100;
  heightI = 100;
  widthSp = 0;
  format = 0;
  rate = 1;
  orientation = 0;
  p5;
  animated = true;
  last = false;
  newArrImg = [];
  image;
  world;
  speed = 2;
  count = 0;
  arrSprite = [];
  arrAnimate = [];
  animate(name, frame) {
    this.name = name;
    this.frame = frame;
    this.animated = true;
    if (Array.isArray(name)) {
      this.arrAnimate = name.map((img, i) => loadImage(img));
      this.img = this.arrAnimate[0];
    } else {
      this.img = loadImage(this.name);
    }
  }

  animateA(name, frame, format, x, y, w, h) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.frame = frame;
    this.format = format;
    this.img = loadImage(this.name);
  }

  animateB(name, frame, x, y, w, h) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.frame = frame;
    this.img = loadImage(this.name);
  }

  animateC(name, frame, format) {
    this.name = name;
    this.frame = frame;
    this.format = format;
    this.img = loadImage(this.name);
  }
  animateD(name, frame) {
    this.name = name;
    this.frame = frame;
    this.animated = true;
    this.img = loadImage(this.name);
  }
  animateE(name) {
    this.name = name;
    this.animated = false;
    this.img = loadImage(this.name);
  }

  animateAll(name) {
    if (Array.isArray(name)) {
      this.arrAnimate = name.map((img, i) => loadImage(img));
    }
  }

  setupAnimate() {
    if (this.animated && this.img) {
      this.newArrImg = new Array(this.frame);

      this.widthI = this.img.width;
      this.heightI = this.img.height;

      if (this.orientation === 0) {
        if (this.widthSp !== 0) {
          this.img.resize(this.frame * this.widthSp, this.heightI);
        } else {
          this.widthSp = this.widthI / this.frame;
        }
      } else {
        if (this.widthSp !== 0) {
          this.img.resize(this.widthI, this.frame * this.widthSp);
        } else {
          this.widthSp = this.heightI / this.frame;
        }
      }

      for (let i = 0; i < this.newArrImg.length; i++) {
        if (this.orientation === 0) {
          this.newArrImg[i] = this.img.get(
            i * this.widthSp,
            0,
            this.widthSp,
            this.heightI
          );
        } else {
          this.newArrImg[i] = this.img.get(
            0,
            i * this.widthSp,
            this.widthI,
            this.widthSp
          );
        }
      }
    }
  }

  setupAnimateAll() {
    this.arrAnimate.map((img) => {
      console.log(img);
    });
  }

  params() {
    if (this.format === 0) {
      this.xr += 1;
      if (this.xr > this.rate) {
        this.xp = this.xp + 1;
        this.xr = 0;
      }
      if (this.xp > this.frame - 1) {
        this.xp = 0;
        this.count += 1;
      }

      if (this.count > this.arrAnimate.length - 1) {
        this.count = 0;
      }
    } else if (this.format === 1) {
      this.xr += 1;
      if (this.xr > this.rate) {
        this.xp = this.xp + 1;
        this.xr = 0;
      }
      if (this.xp > this.frame - 1) {
        this.xp = this.xp - 1;
      }
    } else if (this.format === 2) {
      this.xr += 1;

      if (this.xr > this.rate) {
        if (this.xp > 0) {
          this.xp = this.xp - 1;
        }

        this.xr = 0;
      }

      if (this.xp < this.frame - 1) {
        //this.xp = 0;
      }
    } else if (this.format === 3) {
      this.xr += 1;
      if (this.xr > this.rate) {
        this.xp = this.xp - 1;
        this.xr = 0;
      }
      if (this.xp <= 0) {
        this.xp = this.frame - 1;
      }
    }
  }

  sprite() {
    if (this.img) {
      if (this.animated) {
        if (this.arrAnimate.length > 0) {
          console.log(this.count);
          return this.arrSprite[this.count][this.xp];
        } else {
          return this.newArrImg[this.xp];
        }
      } else {
        return this.img;
      }
    }
  }

  getImage(x, y, w, h) {
    // console.log(this.newArrImg[0])
    image(this.newArrImg[0]);
  }

  spriteRect(w, h) {
    try {
      if (this.animated) {
        this.params();
        this.newArrImg[this.xp].resize(w, h);
        return this.newArrImg[this.xp];
      } else {
        this.newArrImg[0].resize(w, h);
        return this.newArrImg[0];
      }
    } catch (Exception) {
      return this.img;
    }
  }
  spriteEllipse(w) {
    try {
      if (this.animated) {
        this.params();
        this.newArrImg[this.xp].resize(w, w);
        return this.newArrImg[this.xp];
      } else {
        this.newArrImg[0].resize(w, w);
        return this.newArrImg[0];
      }
    } catch (Exception) {
      return this.img;
    }
  }

  spriteInt(w, h, i) {
    try {
      if (this.animated) {
        this.newArrImg[i].resize(w, h);
        return this.newArrImg[i];
      } else {
        this.img.resize(w, w);
        return this.img;
      }
    } catch (Exception) {
      return this.img;
    }
  }

  draw() {
    this.params();
    try {
      if (this.animated) {
        image(this.newArrImg[this.xp], this.x, this.y, this.w, this.h);
      }
    } catch (Exception) {
      console.log("error");
    }
  }
}
