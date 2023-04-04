class Quadratini{

    static xSpeed = 30;

    constructor(posX, posY, widthQuad, heightQuad, colore) {
        this.posXinit = posX;
        this.posYinit = posY;
        this.posX = posX;
        this.posY = posY;
        this.widthQuad = widthQuad;
        this.heightQuad = heightQuad;
        this.colore = colore;
        this.mooving = false;

    }

    draw(){
        fill(this.colore);
        rect(this.posX, this.posY, this.widthQuad, this.heightQuad);
    }

    move(){

        if(this.posX - Quadratini.xSpeed >= width/2 && this.mooving) {
            this.posX = this.posX - Quadratini.xSpeed;
            rect(this.posX, this.posY, this.widthQuad, this.heightQuad);
        }

        // aggiorna posizione della figura
        /*if(this.posX - Quadratini.xSpeed < width/2)
        this.posX = this.posX - Quadratini.xSpeed;*/
        //this.draw();
    }

    rinizializza(){
        this.posX = this.posXinit;
        this.posY = this.posYinit;
    }
}