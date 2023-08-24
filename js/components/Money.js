class Money extends Body{
    constructor(props) {
        super(props);
    }

    create(world, scena) {
        this.sensor = true;
        this.createRect(world, scena);
        this.body.map((b) => {});
    }

    view(){

    }
}