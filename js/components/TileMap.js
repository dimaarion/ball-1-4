class TileMap {
    x = 0;
    y = 0;
    width = 1250;
    height = 1250;
    name;
    img;
    image;
    scena = {};
    animate = new Animate();

    constructor(scena) {
        this.scena = scena;
    }

    preload(name){
        this.animate.animateE(name);
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
    view(id, layers) {
        let col = 0;
        let row = 0;
        let index = 0;

        this.scena.getObjectData(layers).map((x, i) => {
            col++;
            if (x === id) {
                if (this.image) {
/*
                   image(
                        this.image[x - 1],
                        this.scena.size(col * this.scena.scena.tilewidth, this.scena.scale) -
                        this.scena.size(this.scena.scena.tilewidth, this.scena.scale),
                        this.scena.size(row * this.scena.scena.tileheight, this.scena.scale),
                        this.scena.size(this.scena.scena.tilewidth, this.scena.scale),
                        this.scena.size(this.scena.scena.tileheight, this.scena.scale)
                    );*/


                }else {

                   /* image(
                        this.image[x],
                        this.scena.size(col * this.scena.scena.tilewidth, this.scena.scale) -
                        this.scena.size(this.scena.scena.tilewidth, this.scena.scale),
                        this.scena.size(row * this.scena.scena.tileheight, this.scena.scale),
                        this.scena.size(this.scena.scena.tilewidth, this.scena.scale),
                        this.scena.size(this.scena.scena.tileheight, this.scena.scale)
                    );*/
                }

            }
            if (col > this.scena.scena.width - 1) {
                col = 0;
                row++;
            }
        });

        image(0,0, this.scena.size(this.scena, this.scena.scale))
    }

    view2(images) {
        let col = 0;
        let row = 0;
        let index = 0;
        this.scena.getObjectData(layers).map((x, i) => {
            col++;
            if (x === id) {
                if (images.length > 0) {
                    image(
                        images[x],
                        this.scena.size(col * this.scena.scena.tilewidth, this.scena.scale) -
                        this.scena.size(this.scena.scena.tilewidth, this.scena.scale),
                        this.scena.size(row * this.scena.scena.tileheight, this.scena.scale),
                        this.scena.size(this.scena.scena.tilewidth, this.scena.scale),
                        this.scena.size(this.scena.scena.tileheight, this.scena.scale)
                    );
                }

            }
            if (col > this.scena.scena.width - 1) {
                col = 0;
                row++;
            }
        });
    }
    imageMap() {
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
    }
}
