class Money extends Body {
    scena;
    image;

    constructor(props) {
        super(props);
    }

    create(engine, scena) {
        this.scena = scena;
        this.sensor = true;
        this.createRect(engine.world, scena);

    }

    view() {
        this.body.filter((f)=>f.removeMoney === false).map((b) => {
            image(this.image.sprite(), b.position.x - b.width / 2, b.position.y - b.width / 2, b.width, b.width)
        });
    }
}