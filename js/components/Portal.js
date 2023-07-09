class Portal extends Body {
    animate = new Animate();
    scale = 8;
    constructor(props){
        super(props)
    }
    preload() {
        this.animate.animateE("./asset/portal/portal.png");
    }

    create(world, scena) {
        this.animate.setupAnimate();
        this.sensor = true;
        this.createRect(world, scena);

        this.body.map((b)=>{
           
        })
        console.log(this.body)
    }

    view(){
       this.body.map((b)=> image(this.animate.sprite(),b.position.x - b.width / 2,b.position.y - b.height / 2,b.width,b.height))
       
    }

}