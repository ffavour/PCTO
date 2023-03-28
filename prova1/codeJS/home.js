//cose per il canvas
let height = 700
let width = 1300

//varibili immagini
let sfondoPricipale

//immagini bottoni
let bottoneImpostazini_image

//bottoni (oggetti)
let bottonSettings
let bottoneStart  //o play sono la stessa cosa
let bottonePause
let bottoneHome
let bottoneStrumento
let bottoneReplay

//schermate
let schermataPrincipale
let schermataGioco
let schermataPausa
let schermataSettings
let schermataGameOver
let schermataStrumento

//enumerazione degli stati :
const States = {
    Initial: 0,
    Gaming: 1,
    Ending: 2,
    Pause: 3,
    Info: 4,
}


// Setup code
function preload(){
    sfondoPricipale = loadImage("images/sfondoSchermataPrincipale.png");
    bottoneImpostazini_image = loadImage("images/immagineBottoneSettings.png");
    bottoneRepImg = loadImage("images/immagineButtonReplay.png");


}

//inizializza i bottoni nelle posizioni
function inizializzaBottoni(){
    bottonSettings = new Bottone(10, 10, bottoneImpostazini_image, 75);
    bottoneReplay = new Bottone(50, 50, bottoneRepImg, 75);
}


function setup () {
    createCanvas(width, height);
    frameRate(120)
    inizializzaBottoni();
}


function draw () {
    drawSchermataPrincipale();
}

function drawSchermataPrincipale(){
    background(sfondoPricipale);
    bottonSettings.draw();
    //bottoneReplay.draw();  //è di prova
}


