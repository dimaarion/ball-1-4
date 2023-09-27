class Lightning extends Body {
    scena;
    image;
    scale = 2.5;
    scaleWidth = 5;
    interval = [];
   x = 0;
   y = 0;
    time = new Panel();
    constructor(props) {
        super(props);
    }

    create(engine, scena) {
        this.scena = scena;
        this.sensor = true;
        this.createRect(engine.world, scena);
        this.time.create();
this.body.map((b,i)=>{
this.interval[i] = round(random(3,6));

})


    }

    view() {
        this.time.updateTimer();
      push() 
        this.body.map((b,i) => {

         if(this.time.elapsedSeconds < this.interval[i]){
            b.typeObject = "0";
           
            translate(b.position.x, b.position.y)
          //  angleMode(RADIANS)
          //  rotate(b.angle)
         //   image(this.image.sprite(), - b.width / 2 ,  - b.height / 2, b.width, b.height);
          
         }else{
            b.typeObject = "1";
          //  Matter.Body.setPosition(b,{X:this.x, y: this.y});
         }
         if(this.time.elapsedSeconds > this.interval[i] * 2){
            this.time.elapsedSeconds = 0
        }
       
           
        });
        pop()
    }
}