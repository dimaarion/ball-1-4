class Stone extends Body{
    scena;
    image;

    constructor(props) {
        super(props);
    }

    create(engine, scena) {
        this.scena = scena;
        this.sensor = false;
        this.static = false;
        this.fric = 0.1;
        this.createEllipse(engine.world, scena);
        
        
        console.log(this.body)
    }

    view() {
        this.setMass(5000);
        this.body.map((b) => {
            push();
            translate(b.position.x, b.position.y);
            angleMode(RADIANS);
            rotate(b.angle);
            image(
                this.image.sprite(),
                -b.width / 2,
                -b.width / 2,
                b.width,
                b.width
            );
            pop();
        });
    }
}