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
let bottoneInfo

//schermate
let schermataPrincipale
let schermataGioco
let schermataPausa
let schermataSettings
let schermataGameOver
let schermataStrumento
let schermataInfo

//enumerazione degli stati :
const States = {
    Start: 0, //start
    Gioco: 1, //gioco
    GameOver: 2, //game over
    Pause: 3,
    Info: 4,
    Settings: 5,
    Strumento: 6,
}
let stato  =  States.Start //variabile per stati


// Setup code
function preload(){
    sfondoPricipale = loadImage("images/sfondoSchermataPrincipale.png");
    bottoneImpostazini_image = loadImage("images/immagineBottoneSettings.png");
    bottoneRepImg = loadImage("images/immagineButtonReplay.png");
    bottoneHomeImg = loadImage("images/immagineBottoneHome.png");


}

//inizializza i bottoni nelle posizioni
function inizializzaBottoni(){
    bottonSettings = new Bottone(10, 10, bottoneImpostazini_image, 75);
    bottoneReplay = new Bottone(50, 50, bottoneRepImg, 75);
    bottoneHome = new Bottone(80, 80, bottoneHomeImg, 75);
}


function setup () {
    createCanvas(width, height);
    frameRate(120)
    inizializzaBottoni();
}


function draw () {
    drawSchermataPrincipale();

    if(stato === States.Gioco){
        drawSchermataGioco();
    }else if(stato === States.Pause){
        drawSchermataPausa();
    }else if(stato === States.Info){
        drawSchermataInfo();
    }else if(stato === States.Start){
        drawSchermataPrincipale();
    }else if (stato === States.GameOver){
        drawSchermataGameOver();
    }else if(stato === States.Strumento){
        drawschermataStrumento();
    }else if (stato === States.Settings){
        drawSchermataSettings();
    }
}

//start gioco
function drawSchermataPrincipale(){
    background(sfondoPricipale);
    bottonSettings.draw();
    //bottoneReplay.draw();  //è di prova
}


function drawSchermataPausa(){

}

function drawSchermataSettings(){

}

function drawSchermataGameOver(){

}

function drawschermataStrumento(){

}

function drawSchermataGioco(){

}

function drawSchermataInfo(){

}


