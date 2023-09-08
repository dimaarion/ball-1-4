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
this.interval[i] = random(5,30);
console.log(this.scena.size(this.scena.getObjects(this.name)[i].x, this.scena.scale) + "/" + (b.position.x - b.width / 2))
})


    }

    view() {
        this.time.updateTimer();
       
        this.body.map((b,i) => {
this.x = this.scena.size(this.scena.getObjects(this.name)[i].x, this.scena.scale);
this.y = this.scena.size(this.scena.getObjects(this.name)[i].y, this.scena.scale);

         if(this.time.elapsedSeconds < this.interval[i]){
            b.activeB = 1;
            Matter.Body.setPosition(b,{X:this.x, y:this.y});
            image(this.image.sprite(), b.position.x - b.width * this.scaleWidth / 2, b.position.y - b.height / 2, b.width * this.scaleWidth, b.height);
          
         }else{
            b.activeB = 0;
          //  Matter.Body.setPosition(b,{X:this.x, y: this.y});
         }
         if(this.time.elapsedSeconds > this.interval[i] * 2){
            this.time.elapsedSeconds = 0
        }
           
        });
    }
}