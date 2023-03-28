//cose per il canvas
let height = 800
let width = 1200

//varibili immagini
let sfondoPricipale

//bottoni
let bottonSettings
let bottoneStart  //o play sono la stessa cosa
let bottonePause
let bottoneHome
let bottoneStrumento

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
    sfondoPricipale_image = loadImage("images/sfondoSchermataPrincipale.png");
    bottoneImpostazini_image = loadImage("images/immagineBottoneSettings.png");


}

//inizializza i bottoni nelle posizioni
function inizializzaBottoni(){
    bottonSettings = new Bottone(0 ,0 , bottoneImpostazini_image);



}


function setup () {
    createCanvas(width, height);
    frameRate(120)
    inizializzaBottoni();
}


function draw () {
    background(sfondoPricipale);

}

function schermataPrincipale(){
    background(sfondoPricipale);
    bottonSettings.draw();

}


