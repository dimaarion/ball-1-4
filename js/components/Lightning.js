class Lightning extends Body {
    scena;
    image;
    scale = 2.5;
    scaleWidth = 5;
    interval = [];

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
})
    }

    view() {
        this.time.updateTimer();
       
        this.body.map((b,i) => {
         if(this.time.elapsedSeconds < this.interval[i]){
            b.activeB = 1;
            image(this.image.sprite(), b.position.x - b.width * this.scaleWidth / 2, b.position.y - b.height / 2, b.width * this.scaleWidth, b.height)
            
         }else{
            b.activeB = 0;
         }
         if(this.time.elapsedSeconds > this.interval[i] * 2){
            this.time.elapsedSeconds = 0
        }
            console.log(this.interval[i])
        });
    }
}