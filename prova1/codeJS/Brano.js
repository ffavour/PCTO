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
        textSize(50);
        textAlign(CENTER);
        fill('white');
        textFont(fontBrani);
        text(this.titolo + " - " + this.autore, 650, 500);
        /*
        textSize(16);
textAlign(RIGHT);
text('ABCD', 50, 30);
textAlign(CENTER);
text('EFGH', 50, 50);
textAlign(LEFT);
text('IJKL', 50, 70);
describe(`Letters ABCD displayed at top left, EFGH at center, and
  IJKL at bottom right.`);
         */
    }

}