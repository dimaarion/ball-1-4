class Money extends Body {
    scena;

    constructor(props) {
        super(props);
    }

    create(world, scena) {
        this.scena = scena;
        this.sensor = true;
        this.createRect(world, scena);
        Matter.Events.on(engine, "collisionStart", (event) => {

        })

    }

    view(img) {
        //
        img.params()
        this.viewRect()
        this.body.map((b) => {
            image(img.sprite(), b.position.x - b.width / 2, b.position.y - b.width / 2, b.width, b.width)
        });
    }
}