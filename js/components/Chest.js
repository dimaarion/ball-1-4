class Chest extends Body {
    scena;
    imageClosed;
    imageOpen;

    constructor(props) {
        super(props);
    }

    create(engine, scena) {
        this.scena = scena;
        this.sensor = true;
        this.createRect(engine.world, scena);
        Matter.Events.on(engine,"collisionStart",(event)=>{
            let pairs = event.pairs;
            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i];
                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "chest" 
                ) {
                    
                   if(pair.bodyB.label === "chest" ){
                    pair.bodyB.activeB ++;
                    if(pair.bodyB.activeB === 1){
                        pair.bodyA.money += 100;
                    }
                    
                   }
                }
            }
        })

    }

    view() {
        this.body.map((b) => {
           
            image(b.activeB === 0?this.imageOpen.sprite():this.imageClosed.sprite(), b.position.x - b.width / 2, b.position.y - b.height / 2, b.width, b.height)
        });
    }
}