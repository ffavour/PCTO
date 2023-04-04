class Spartito{
    static xTaglio = 800;


    constructor(dimX, dimY, x1Via, y1Via, colore) {
        this.dimX = dimX;
        this.dimY = dimY;
        this.x1Via = x1Via;  //x
        this.y1Via = y1Via;  //y
        this.colore = colore;
        this.quadratini = [];
        this.nonSulloSpartito = [];
        this.sulloSpartito = [];
        this.inizializzaQuadratini();


    }

    //codice prova di favour
    drawRettangolini(){

    }


    gestioneQuadratini() {
        /*
            var sor;
            if(this.sorteggiabile.length == 4) {
                console.log("in gestione quadratini primo giro");
                sor = sorteggioRange(0, this.sorteggiabile.length-1 );//faccio il meno uno per passare dal numero di celle
                //all'indice della ultima cella
                //in un vettore che contiene 5 elementi non esiste l'indice 5 ma si arriva fino a 4 perche si conta da 0

                this.sorteggiabile.pop(sor);
                console.log(sor +"<-- primo, sorteggio")
                this.quadratini[sor].mooving = true;

            }else{
                //prima cotrollo chi si trova in x di taglio
                //poi controllo chi è alla fine
                for(var k=0; k<this.quadratini.length; k++){
                    if(this.quadratini[k].posX <= Spartito.xTaglio){
                        sor = sorteggioRange(0, this.sorteggiabile.length);
                        console.log("sorteggiato: "+sor);
                        console.log("range : "+this.sorteggiabile.length);
                        this.quadratini[sor].mooving = true;
                        this.sorteggiabile.pop(sor);
                    }else if(this.quadratini[k].posX < 1100);
                        this.quadratini[k].rinizializza();
                        this.sorteggiabile.push(this.quadratini[k]);
                }

            }

         */

        if (this.nonSulloSpartito.length === 4) {
            this.sulloSpartito.push(this.nonSulloSpartito.pop(sorteggioRange(0, 3)));
            this.sulloSpartito[0].mooving = true;
            console.log("1");
        } else {

            for (var k = 0; k < this.sulloSpartito.length; k++) {
                console.log(this.sulloSpartito.length);
                if (this.sulloSpartito.length<4 &&this.sulloSpartito[k].posX < Spartito.xTaglio) {
                    this.sulloSpartito.push(this.nonSulloSpartito.pop(sorteggioRange(0, this.nonSulloSpartito.length)));
                    this.nonSulloSpartito = compattaVettore(this.nonSulloSpartito);


                } else if (this.sulloSpartito[k].posX < 400) {
                    this.sulloSpartito[k].rinizializza();
                    this.nonSulloSpartito.push(this.sulloSpartito.pop(k));
                    this.sulloSpartito = compattaVettore(this.sulloSpartito);
                    console.log("3");
                }
            }

        }


    }


    inizializzaQuadratini() {
        var varianzaY = 70;
        for (var k = 0; k < 4; k++) {
            //this.quadratini.push(new Quadratini(this.x1Via, this.y1Via+varianzaY*k, 150,50, this.colore ));
            this.nonSulloSpartito.push(new Quadratini(this.x1Via, this.y1Via + varianzaY * k, 150, 50, this.colore));
        }

    }

    drawTuttiQuadratini() {
        for (var k = 0; k < this.sulloSpartito.length; k++) {
            this.sulloSpartito[k].move();
        }
    }


}