class Bottone{

    constructor(posX, posY, img, dimX, dimY){
        this.posX = posX;
        this.posY = posY;
        this.img = img;
        this.dimX = dimX;
        this.dimY = dimY
    }

    draw(){

        /*if(this.dimY == -1 || this.dimX == -1){ //un bel filtrino AHAHAHHAHA - tolto perche c'era immagine che dava fastidio
            if(this.dimY == -1){
                image(this.img,this.posX, this.posY, this.dimX, this.dimX);
            }else{
                image(this.img,this.posX, this.posY, this.dimY, this.dimY);
            }
        }else{
            image(this.img,this.posX, this.posY, this.dimX, this.dimY);
        }*/


         image(this.img, this.posX, this.posY, this.dimX, this.dimY);
    }

    getPosX(){
        return this.posY;
    }

    getPosY(){
        return this.posX;
    }



}