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
let bottoneStart  //o play sono la stessa cosa
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

//gestione della videocamera

let video ;
let handpose; //<-- per la mano
let predictions = []



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

function drawKeypoints() { //disegna la posizione delle mani
    for (let i = 0; i < predictions.length; i += 1) {
        const prediction = predictions[i];
        for (let j = 0; j < prediction.landmarks.length; j += 1) {
            const keypoint = prediction.landmarks[j];
            fill(0, 255, 0);
            noStroke();
            ellipse(keypoint[0], keypoint[1], 10, 10);
        }
    }
}
function modelReady() {
    console.log("Model ready!");
}


// Setup code
function preload(){
    sfondoPricipale = loadImage("images/sfondoSchermataPrincipale.png");
    bottoneImpostazini_image = loadImage("images/immagineBottoneSettings.png");
    bottoneRepImg = loadImage("images/immagineButtonReplay.png");
    bottoneHomeImg = loadImage("images/immagineBottoneHome.png");
    bottoneinfoImg = loadImage("images/immagineBottoneInfo.png");
    bottonePlayImg = loadImage("images/immagineBottonePlay.png");
    bottonePauseImg = loadImage("images/immagineBottonePause.png");
    bottoneStartImg = loadImage("images/immagineBottoneStart.png");
}

//inizializza i bottoni nelle posizioni
function inizializzaBottoni(){
    bottonSettings = new Bottone(10, 10, bottoneImpostazini_image, 75,-1);
    bottoneReplay = new Bottone(50, 50, bottoneRepImg, 75,-1);
    bottoneHome = new Bottone(80, 80, bottoneHomeImg, 75,-1);
    bottonePause = new Bottone(180, 80, bottonePauseImg, 75,-1);
    bottoneInfo = new Bottone((width - 90), 10, bottoneinfoImg, 75,-1);
    bottoneStart = new Bottone((width/2 - (200/2)), height-200, bottoneStartImg, 200,80);
}


function setup () {
    createCanvas(width, height);
    video = createCapture(VIDEO);
    video.size(width, height);
    video.hide();
    frameRate(120);
    handpose = ml5.handpose(video, modelReady);

    // This sets up an event that fills the global variable "predictions"
    // with an array every time new hand poses are detected
    handpose.on("predict", results => {
        predictions = results;
    });
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
    image(video, 0, 0, width, height);
    drawKeypoints();
    //image(sfondoPricipale, 0,0, width, height);
    //background(sfondoSchermataPrincipale);
    //background(video);
    //non usare i background non funziano bene
    bottonSettings.draw();
    bottoneInfo.draw();
    bottoneStart.draw();
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




