class Bottone{

    constructor(posX, posY, img, dim){
        this.posX = posX;
        this.posY = posY;
        this.img = img;
        this.dim = dim;
    }

    draw(){
        image(this.img,this.posX, this.posY, this.dim, this.dim);
    }

}