class Spartito{

    constructor(dimX, dimY, x1Via, y1Via, colore){
        this.dimX = dimX;
        this.dimY = dimY;
        this.x1Via = x1Via;
        this.y1Via = y1Via;
        this.colore = colore;
        this.quadratini = [];
        this.inizializzaQuadratini();


    }

    inizializzaQuadratini(){
        var varianzaY = 70;
        for(var k=0; k<4; k++){
            this.quadratini.push(new Quadratini(this.x1Via, this.y1Via+varianzaY*k, 150,50, this.colore ));
        }

    }

    drawTuttiQuadratini(){
        for(var k=0; k<this.quadratini.length; k++){
            this.quadratini[k].move();

        }
    }

}