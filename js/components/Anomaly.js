class Anomaly extends Body {
    size = 15;
    xoff = 0.0;
    xincrement = 0.01;
    speed = 3;
    constructor(props) {
        super(props);
    }

    create(engine, scena) {
        this.scena = scena;
        this.static = false;
        this.sensor = false;
        this.createEllipse(engine.world, scena);
        this.speed =  scena.size(this.speed, scena.scale);

    }

    view() {
        push();




       // console.log(v1.x * 5)


        this.body.map((b) => {
            if(Matter.Body.getSpeed(b) === 0){
                b.activeB = b.activeB + 1
                if(b.activeB > 2){
                    b.activeB = 0;
                }
            }
            if(b.activeB === 1){
                Matter.Body.setVelocity(b, { x: this.speed, y: this.speed })
            }else if(b.activeB === 2){
                Matter.Body.setVelocity(b, { x: -this.speed, y: this.speed })
            }else {
                Matter.Body.setVelocity(b, { x: -this.speed, y: this.speed })
            }

            fill("red");
            ellipse(b.position.x, b.position.y, b.width, b.width);
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