class Quadratini{
    constructor(posX, posY, widthQuad, heightQuad, colore) {
        this.posX = posX;
        this.posY = posY;
        this.widthQuad = widthQuad;
        this.heightQuad = heightQuad;
        this.colore = colore;
    }

    draw(){
        fill(this.colore);
        rect(this.posX, this.posY, this.widthQuad, this.heightQuad);
    }


}