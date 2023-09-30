class TileMap {
    x = 0;
    y = 0;
    width = 1250;
    height = 1250;
    name;
    img;
    image;
    scena = {};
    id = 0;
    animate = new Animate();

    constructor(scena) {
        this.scena = scena;
    }

    preload(){
        this.animate.animateE(this.name);
    }
    create() {

    }
    loadImg(s){

    }

    newArray(n){
        let a = [];
        for (let i = 0; i < n; i++){
           a[i] = i + 1;
        }
        return a;
    }
    view(id, layers, platform) {
        let col = 0;
        let row = 0;
        let index = 0;
       
        let center = {x:this.scena.scenaWidth / 2,y:this.scena.scenaHeigiht / 2}
       
        this.scena.getObjectData(layers).map((el, i) => {
            col++;
           this.x = this.scena.size(col * this.scena.scena.tilewidth, this.scena.scale) - this.scena.size(this.scena.scena.tilewidth, this.scena.scale);
           this.y = this.scena.size(row * this.scena.scena.tileheight, this.scena.scale);
          
            if (el === id && this.x > 0) {
                push() 
                rotate(platform.body[0].angle)
                   image(
                        this.animate.sprite(),
                        this.x,
                        this.y,
                        this.scena.size(this.scena.scena.tilewidth + 1, this.scena.scale),
                        this.scena.size(this.scena.scena.tileheight + 1, this.scena.scale)
                    );
                    pop()
            }
            if (col > this.scena.scena.width - 1) {
                col = 0;
                row++;
            }
        });

       // image(0,0, this.scena.size(this.scena, this.scena.scale))
    }


    imageMap(platform) {
      
  
       push() 
         rotate(platform.body[0].angle)
      // translate(500,0)
        image(
            this.animate.sprite(),
            0,
            0,
            this.scena.size(
                this.scena.scena.width * this.scena.scena.tilewidth,
                this.scena.scale
            ),
            this.scena.size(
                this.scena.scena.height * this.scena.scena.tileheight,
                this.scena.scale
            )
        );
        pop()
    }
}
