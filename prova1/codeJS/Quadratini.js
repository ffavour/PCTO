class Quadratini{

    static xSpeed = 30;

    constructor(posX, posY, widthQuad, heightQuad, colore) {
        this.posX = posX;
        this.posY = posY;
        this.widthQuad = widthQuad;
        this.heightQuad = heightQuad;
        this.colore = colore;
        this.vivo = true;


    }

    killa(){
        this.vivo = false;

    }

    draw(){
        fill(this.colore);
        rect(this.posX, this.posY, this.widthQuad, this.heightQuad);
    }

    move(){

        if(this.posX - Quadratini.xSpeed >= width/2)
        this.posX = this.posX- Quadratini.xSpeed;
        else
            this.posX = width;


        
        // aggiorna posizione della figura
        /*if(this.posX - Quadratini.xSpeed < width/2)
        this.posX = this.posX - Quadratini.xSpeed;*/
        //this.draw();
        rect(this.posX, this.posY, this.widthQuad, this.heightQuad);

    }


}