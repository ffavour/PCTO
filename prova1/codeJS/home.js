//cose per il canvas
let height = 700
let width = 1300

//varibili immagini
let sfondoPricipale

//immagini bottoni
let bottoneImpostazini_image
let bottoneRepImg
let bottoneHomeImg
let bottoneinfoImg
let bottonePlayImg
let bottonePauseImg

//bottoni (oggetti)
let bottonSettings
let bottoneStart  //o play sono la stessa cosa (forse non serve)
let bottonePause
let bottoneHome
let bottoneStrumento //non credo serva
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
    bottoneinfoImg = loadImage("images/immagineButtoneInfo.png");
    bottonePlayImg = loadImage("images/immagineButtonePlay.png");
    bottonePauseImg = loadImage("images/immagineButtonePause.png");
}

//inizializza i bottoni nelle posizioni
function inizializzaBottoni(){
    bottonSettings = new Bottone(10, 10, bottoneImpostazini_image, 75);
    bottoneReplay = new Bottone(50, 50, bottoneRepImg, 75);
    bottoneHome = new Bottone(80, 80, bottoneHomeImg, 75);
    bottonePause = new Bottone(180, 80, bottonePauseImg, 75);
    bottoneInfo = new Bottone(120, 80, bottoneinfoImg, 75);
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
    image(sfondoPricipale, 0,0);
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


