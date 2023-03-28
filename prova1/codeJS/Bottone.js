class Bottone{

    constructor(posX, posY, img){
        this.posX = posX;
        this.posY = posY;
        this.img = img;
    }

    draw(){
        image(this.img,this.posX, this.posY);
    }

}