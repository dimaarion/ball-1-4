class Money extends Body {
    scena;

    constructor(props) {
        super(props);
    }

    create(engine, scena) {
        this.scena = scena;
        this.sensor = true;
        this.createRect(engine.world, scena);
        Matter.Events.on(engine, "collisionStart", function (event) {
            //  console.log(this.joystick.valX);
            var pairs = event.pairs;
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];

                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "point" && pair.bodyB.typeObject === "start"
                ) {
                //    scena.getObjects("money").map((p,i) =>{ Matter.Body.setPosition(this.body[i],{x:scena.size(p.x + p.width / 2, scena.scale),y: scena.size(p.y + p.width / 2, scena.scale)})})
                  //  scena.getObjects("money").map((p,i) =>this.setPosition(this.body[i], Matter.Body.setPosition(pair.bodyA,{x:scena.size(p.x + p.width / 2, scena.scale),y: scena.size(p.y + p.width / 2, scena.scale)}))


                }


            }

        });


    }

    view(img) {
        //
        img.params()
      //  this.viewRect()
        this.body.map((b) => {
            image(img.sprite(), b.position.x - b.width / 2, b.position.y - b.width / 2, b.width, b.width)
        });
    }
}