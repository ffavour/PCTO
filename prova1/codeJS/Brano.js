class Brano{
    constructor(brano, img, titolo, autore, dim, posX, posY) {
        this.brano = brano; //ogetto contenente il brano.mp3
        this.img = img;     //copertina brano
        this.titolo = titolo; //titolo brano
        this.autore = autore;
        this.dim = dim;       //dim immagine copertina
        this.posX = posX;
        this.posY = posY;
    }

    play(){
        brano.play();
    }

    pause(){
        brano.pause();
    }

    draw(){
        image(this.img, this.posX, this.posY, this.dim, this.dim);
    }

}