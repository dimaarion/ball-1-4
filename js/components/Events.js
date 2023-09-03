class Events {
  level = 0;
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  collideStart(engine, scena) {
    let body = new Body();
    let d = 0;
    let d2 = 0;
    let r = 0;
    let speed = 3;
    let pointIn =  body.arrayCount(100).map((el)=>"in_" + el);
    let pointEx = body.arrayCount(100).map((el)=>"ex_" + el);
    let pointLevel = [2, 3];

    function setPositionPoint(body, pair, el1, el2) {
      if (
        pair.bodyA.label === "player" &&
        pair.bodyB.typeObject === el1
      ) {
        Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", el2).position.x, y: body.getNameType(engine, "point", el2).position.y });
      }
    }
    Matter.Events.on(engine, "collisionActive", function (event) {
      var pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];







      
/*
        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "level_2"
        ) {
          this.level = 2;
          pair.bodyA.level = 2;

          // Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "start").position.x, y: body.getNameType(engine, "point", "start").position.y });
        } else if (pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "level_3") {
          this.level = 3;
          pair.bodyA.level = 3;
        }*/
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
            scena.getObjects("player").map((p) => Matter.Body.setPosition(pair.bodyA,{x:scena.size(p.x + p.width / 2, scena.scale),y: scena.size(p.y + p.width / 2, scena.scale)}))
 }
        })


        //Перемещение из in в ex
        pointIn.map((p, i) => setPositionPoint(body, pair, p, pointEx[i]));

        if (
            pair.bodyA.label === "player" &&
            pair.bodyB.label === "point" && pair.bodyB.typeObject === "0"
        ) {
          scena.getObjects("player").map((p) => Matter.Body.setPosition(pair.bodyA,{x:scena.size(p.x + p.width / 2, scena.scale),y: scena.size(p.y + p.width / 2, scena.scale)}))
          }



      }
    })
    Matter.Events.on(engine, "beforeUpdate", function (event) { });
  }
}
