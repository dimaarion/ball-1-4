class Events {
    level = 0;
    levelCount = 0

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    collideStart(engine, scena) {
        let body = new Body();
        let player = new Player();
        let d = 0;
        let d2 = 0;
        let r = 0;
        let speed = 3;
        let pointIn = body.arrayCount(100).map((el) => "in_" + el);
        let pointEx = body.arrayCount(100).map((el) => "ex_" + el);
        let pointLevel = body.arrayCount(this.levelCount);

        function setPositionPoint(body, pair, el1, el2) {
            if (
                pair.bodyA.label === "player" &&
                pair.bodyB.typeObject === el1
            ) {
                Matter.Body.setPosition(pair.bodyA, {
                    x: body.getNameType(engine, "point", el2).position.x,
                    y: body.getNameType(engine, "point", el2).position.y
                });
            }
        }

       
        function collideAnomalyPositionPoint(pair,scena, pointEx, body,name) {
            if (pair.bodyB.label === "anomaly") {
                let point = scena.getObjects("point").filter((f)=>f.type.match("ex_"));
                let r = round(random(point.length - 1))
                point.filter((f,i)=>i === r).map((p) => Matter.Body.setPosition(pair.bodyB, {
                    x: scena.size(p.x + p.width / 2, scena.scale),
                    y: scena.size(p.y + p.width / 2, scena.scale)
                }))

            }
        }


        Matter.Events.on(engine, "collisionActive", function (event) {
            var pairs = event.pairs;
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];
                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "point" && pair.bodyB.typeObject === "start"
                ) {
                    // pair.bodyA.level = 0;
                }
            }
        });

        Matter.Events.on(engine, "collisionStart", function (event) {
            var pairs = event.pairs;
            for (var i = 0; i < pairs.length; i++) {
                var pair = pairs[i];

                pointLevel.map((lev) => {
                    if (
                        pair.bodyA.label === "player" &&
                        pair.bodyB.label === "point" && pair.bodyB.typeObject === "level_" + lev
                    ) {
                        this.level = lev;
                        pair.bodyA.level = lev;
                        scena.getObjects("player").map((p) => Matter.Body.setPosition(pair.bodyA, {
                            x: scena.size(p.x + p.width / 2, scena.scale),
                            y: scena.size(p.y + p.width / 2, scena.scale)
                        }))
                    }
                })


                //Перемещение из in в ex
                pointIn.map((p, i) => setPositionPoint(body, pair, p, pointEx[i]));

                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "point" && pair.bodyB.typeObject === "0"
                ) {
                    scena.getObjects("player").map((p) => Matter.Body.setPosition(pair.bodyA, {
                        x: scena.size(p.x + p.width / 2, scena.scale),
                        y: scena.size(p.y + p.width / 2, scena.scale)
                    }))
                }

                if (
                    pair.bodyA.label === "player" &&
                    pair.bodyB.label === "anomaly"
                ) {
                    if( pair.bodyA.label === "player"){
                        scena.getObjects("player").map((p) => Matter.Body.setPosition(pair.bodyA,{x:scena.size(p.x + p.width / 2, scena.scale),y: scena.size(p.y + p.width / 2, scena.scale)}))
                    }

                }


                if ( pair.bodyA.label === "platform" && pair.bodyB.label === "anomaly") {
                    if (pair.bodyB.label === "anomaly") {
                        pair.bodyB.activeB += 1
                        if(pair.bodyB.activeB > 2){
                            pair.bodyB.activeB = 0;
                        }
                    }
                }



                if ( pair.bodyA.typeObject === "0" && pair.bodyB.label === "anomaly") {
                    collideAnomalyPositionPoint(pair,scena,pointEx,body,"point");
                }
                pointIn.map((el)=>{
                    if ( pair.bodyA.typeObject === el && pair.bodyB.label === "anomaly") {
                        collideAnomalyPositionPoint(pair,scena,pointEx,body,"point");
                    }
                })
                pointLevel.map((el)=>{
                    if ( pair.bodyA.typeObject === "level_" + el && pair.bodyB.label === "anomaly") {
                        collideAnomalyPositionPoint(pair,scena,pointEx,body,"point");
                    }
                })

                if (
                    pair.bodyA.label === "anomaly" &&
                    pair.bodyB.label === "anomaly"
                ) {
                    collideAnomalyPositionPoint(pair,scena,pointEx,body,"point");
                    //   Matter.Body.setVelocity(pair.bodyB,{x:1,y:0})
                    //  scena.getObjects("player").map((p) => Matter.Body.setPosition(pair.bodyA,{x:scena.size(p.x + p.width / 2, scena.scale),y: scena.size(p.y + p.width / 2, scena.scale)}))

                }




            }
        })
        Matter.Events.on(engine, "collisionEnd", function (event) {
            let pairs = event.pairs;
            for (let i = 0; i < pairs.length; i++) {
                let pair = pairs[i];

                if ( pair.bodyA.label === "platform" && pair.bodyB.label === "anomaly") {
                    if (pair.bodyB.label === "anomaly") {

                    }
                }
            }
        });
    }
}
