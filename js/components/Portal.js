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
        this.createRect(world, scena);
        console.log(this.body)
    }

    view(){
       this.body.map((b)=> image(this.animate.sprite(),b.position.x - b.width * this.scale / 2,b.position.y - b.height * this.scale / 2,b.width * this.scale,b.height * this.scale))
       
    }

}