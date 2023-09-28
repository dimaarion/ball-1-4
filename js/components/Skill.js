class Scill extends Body {
    size = 5;
    xoff = 0.0;
    xincrement = 0.01;
    speed = 3;
    dir = [];
    theta = [];
    r = [];
    n = 50;
    c = [];
    x = 0;
    y = 0;
    rdir = [];
    w = 0;
    constructor(props) {
        super(props);
    }

    create(engine, scena) {
        this.scena = scena;
        this.static = true;
        this.sensor = true;
        this.createEllipse(engine.world, scena);
        this.speed = scena.size(this.speed, scena.scale);
      //  drawingContext.shadowOffsetX = 0;
     //   drawingContext.shadowOffsetY = 10;
      //  drawingContext.shadowBlur = 20;
        
        this.body.map((b)=>{
              for (let i = 0; i < this.n; i++) {
           this.theta.push(random(0, 2 * PI));
           this.rdir.push(1);
           this.r.push(random(b.width / 2,b.width * 2));
           this.dir.push(1);
           this.c.push(createVector(0, 0));
           this.w = b.width * 2;
        }
        })
      
    }


    checkr(rdir,r, w) {
        if (rdir === 1 && r > w) {
            rdir = -1;
        }
        if (rdir === -1 && r < 0) {
            rdir = 1;
        }
        return rdir;
    }

    view() {
        push();
      //   fill(220,220,220,100);
         strokeWeight(this.scena.size(this.size,this.scena.scale));
         stroke(46,198,27);
        // drawingContext.shadowOffsetX = 0;
        // drawingContext.shadowOffsetY = 0;
         drawingContext.shadowBlur = 30;
         drawingContext.shadowColor = '#ccc';
         
         for (let i = 0; i < this.n; i++) {
            this.theta[i] = this.theta[i] + PI / 100 * this.dir[i] ;
            this.rdir[i] = this.checkr(this.rdir[i],this.r[i], this.w / 3);
            this.r[i] = this.r[i] + this.rdir[i]; 
         //   this.x = this.c[i].x + this.r[i] * cos(this.theta[i]);
         //   this.y = this.c[i].y + this.r[i] * sin(this.theta[i]);
       //     noFill()
            
         //  circle(this.c[i].x + b.position.x,this.c[i].y + b.position.y, 2 * this.r[i]);
          // strokeWeight(20);
         //   point(this.x + b.position.x, this.y + b.position.y);
           }
        this.body.map((b) => { 
           // ellipse(b.position.x, b.position.y, b.width, b.width)
            if (Matter.Body.getSpeed(b) === 0) {
                b.activeB = b.activeB + 1
                if (b.activeB > 2) {
                    b.activeB = 0;
                }
            }
            if (b.activeB === 1) {
            //    Matter.Body.setVelocity(b, { x: this.speed, y: this.speed })
            } else if (b.activeB === 2) {
           //     Matter.Body.setVelocity(b, { x: -this.speed, y: this.speed })
            } else {
          //      Matter.Body.setVelocity(b, { x: -this.speed, y: this.speed })
            }

            for (let i = 0; i < this.n; i++) {
              //  this.theta[i] = this.theta[i] + PI / 100 * this.dir[i] ;
              //  this.rdir[i] = this.checkr(this.rdir[i],this.r[i], b.width / 2);
              //  this.r[i] = this.r[i] + this.rdir[i]; 
                this.x = this.c[i].x + this.r[i] * cos(this.theta[i]);
                this.y = this.c[i].y + this.r[i] * sin(this.theta[i]);
           //     noFill()
                
             //  circle(this.c[i].x + b.position.x,this.c[i].y + b.position.y, 2 * this.r[i]);
              // strokeWeight(20);
                point(this.x + b.position.x, this.y + b.position.y);
               }
          //  ellipse(b.position.x, b.position.y, b.width, b.width);
        })
        
        /*
        angleMode(DEGREES);
        stroke("red");
        fill("red");
       // noFill()
        drawingContext.shadowOffsetX = 5;
        drawingContext.shadowOffsetY = 5;
        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = 'red';
        this.body.map((b) => {
            translate(b.position.x, b.position.y)
            beginShape();
            for (let i = 0; i < 359; i++) {
                let s = b.width / 15;
                let r1Min = map(sin(frameCount), -1, 1, s, s);
                let r1Max = map(sin(frameCount * 2), -1, 1, s, s / 2);

                let r2Min = map(sin(frameCount / 2), -1, 1, s, s);
                let r2Max = map(sin(frameCount), -1, 1, s / 2, s);

                let r1 = map(sin(i * 3), -1, 1, r1Min, r1Max);
                let r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
                let r = r1 * r2;
                let x = r * cos(i)
                let y = r * sin(i);
                vertex(x + 10, y);
            }
            endShape(CLOSE)

            rect(b.position.x, b.position.y, b.width, b.height)
        });*/

        pop();
    }

}