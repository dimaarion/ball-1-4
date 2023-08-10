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
    Matter.Events.on(engine, "collisionActive", function (event) {
      var pairs = event.pairs;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "0"
        ) {
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "start").position.x, y: body.getNameType(engine, "point", "start").position.y });
        }

        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "1"
        ) {
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "2").position.x, y: body.getNameType(engine, "point", "2").position.y });
        }

        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "3"
        ) {
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "4").position.x, y: body.getNameType(engine, "point", "4").position.y });
        }

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
        }
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

        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "level_2"
        ) {
          pair.bodyA.level = 2;
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "start").position.x, y: body.getNameType(engine, "point", "start").position.y });
        } else if (pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "level_3") {
          pair.bodyA.level = 3;
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "start").position.x, y: body.getNameType(engine, "point", "start").position.y });

        }

        //Перемещение из in в ex
        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "in_1"
        ) {
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "ex_1").position.x, y: body.getNameType(engine, "point", "ex_1").position.y });
        }
        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "in_2"
        ) {
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "ex_2").position.x, y: body.getNameType(engine, "point", "ex_2").position.y });
        }

        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "in_3"
        ) {
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "ex_3").position.x, y: body.getNameType(engine, "point", "ex_3").position.y });
        }

        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "in_4"
        ) {
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "ex_4").position.x, y: body.getNameType(engine, "point", "ex_4").position.y });
        }


        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "in_5"
        ) {
          Matter.Body.setPosition(pair.bodyA, { x: body.getNameType(engine, "point", "ex_5").position.x, y: body.getNameType(engine, "point", "ex_5").position.y });
        }
        //

        if (
          pair.bodyA.label === "player" &&
          pair.bodyB.label === "point" && pair.bodyB.typeObject === "start"
        ) {
          //  pair.bodyA.level = 0;
        }
      }
    })
    Matter.Events.on(engine, "beforeUpdate", function (event) { });
  }
}
