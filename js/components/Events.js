class Events {
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
          pair.bodyB.typeObject === "point"
        ) {
          
        }
      }
    });

    Matter.Events.on(engine, "beforeUpdate", function (event) {});
  }
}
