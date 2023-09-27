class Scill extends Body {
image;
engine;
    constructor(props) {
        super(props)
    }

    create(engine,scena){
        this.engine = engine;
        this.createRect(engine.world,scena);
    }


    view(){
        this.viewRect();

    }

}