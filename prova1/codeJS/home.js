//cose per il canvas
let height = 700
let width = 1300
//cose per la videocamera
let height_init = 480
let widht_init = 630



//varibili immagini
let sfondoPricipale

//immagini bottoni
let bottoneImpostazini_image
let bottoneRepImg
let bottoneHomeImg
let bottoneinfoImg
let bottonePlayImg
let bottonePauseImg
let scorreDxImg
let scorreSxImg

//bottoni (oggetti)
let bottoneSettings
let bottoneStart  //o play sono la stessa cosa
let bottonePause
let bottoneHome
let bottoneStrumento //non credo serva
let bottoneReplay
let bottoneInfo
let bottoneScorreDX
let bottoneScorreSX

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
let debug = 1



//enumerazione degli stati :
const States = {
    Start: 0, //start
    Gioco: 1, //gioco
    GameOver: 2, //game over
    Pause: 3,
    Info: 4,
    Settings: 5,
    Strumento: 6,
    Canzone: 7,
}
let stato  =  States.Start //variabile per stati

function drawKeypoints() {

    for (let i = 0; i < predictions.length; i += 1) {
        const prediction = predictions[i];
        for (let j = 0; j < prediction.landmarks.length; j += 1) {
            const keypoint = prediction.landmarks[j];
            fill(0, 255, 0);
            noStroke();
            keypoint[0] = keypoint[0]*width/widht_init;
            keypoint[1] = keypoint[1]*height/height_init;
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
    sfondoSecondario = loadImage("images/sfondoBlur.jpg");

    bottoneImpostazini_image = loadImage("images/immagineBottoneSettings.png");
    bottoneRepImg = loadImage("images/immagineButtonReplay.png");
    bottoneHomeImg = loadImage("images/immagineBottoneHome.png");
    bottoneinfoImg = loadImage("images/immagineBottoneInfo.png");
    bottonePlayImg = loadImage("images/immagineBottonePlay.png");
    bottonePauseImg = loadImage("images/immagineBottonePause.png");
    bottoneStartImg = loadImage("images/immagineBottoneStart.png");
    scorreDxImg = loadImage("images/scorreDX.png");
    scorreSxImg = loadImage("images/scorreSX.png");
}

//inizializza i bottoni nelle posizioni
function inizializzaBottoni(){
    bottoneSettings = new Bottone(10, 10, bottoneImpostazini_image, 75, 75);
    bottoneReplay = new Bottone(50, 50, bottoneRepImg, 75, 75);
    bottoneHome = new Bottone(80, 80, bottoneHomeImg, 75, 75);
    bottonePause = new Bottone(180, 80, bottonePauseImg, 75, 75);
    bottoneInfo = new Bottone((width - 90), 10, bottoneinfoImg, 75, 75);
    bottoneStart = new Bottone((width/2 - (200/2)), height-200, bottoneStartImg, 200,80);
    bottoneHome = new Bottone(width - 90, height - 85, bottoneHomeImg, 75, 75);
    bottoneScorreSX = new Bottone((width/2 - (75/2) - 300), (height/2 - (75/2)), scorreSxImg, 75, 80);
    bottoneScorreDX = new Bottone((width/2 - (75/2) + 300), (height/2 - (75/2)), scorreDxImg, 75, 80);
}


function setup () {

    // per la fotocamera
    createCanvas(width, height);
    video = createCapture(VIDEO);
    video.size(width, height);

    handpose = ml5.handpose(video, modelReady);

    // This sets up an event that fills the global variable "predictions"
    // with an array every time new hand poses are detected
    handpose.on("predict", results => {
        predictions = results;
    });

    // Hide the video element, and just show the canvas
    video.hide();
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
    }else if (stato === States.Canzone){
        drawschermataCanzone();
    }


}

//start gioco
function drawSchermataPrincipale(){
    //image(sfondoPricipale, 0,0, width, height);
    //background(video);

    // background(sfondoPricipale);
    bottoneSettings.draw();
    bottoneInfo.draw();
    bottoneStart.draw();
    //bottoneReplay.draw();  //è di prova (va in game over)
    image(video, 0, 0, width, height); //per la fotocamera
    drawKeypoints();
    bottoneStartPremuto();

}

function drawschermataStrumento(){
    background(sfondoSecondario);
    bottoneSettings.draw();
    bottoneInfo.draw();
    bottoneHome.draw();
    bottoneScorreSX.draw();
    bottoneScorreDX.draw();
}

function drawschermataCanzone(){
    background(sfondoSecondario);
    bottoneSettings.draw();
    bottoneInfo.draw();
    bottoneHome.draw();
    bottoneScorreSX.draw();
    bottoneScorreDX.draw();
}

function mousePressed(){
    /*if(stato === States.Start && mouseIsPressed &&
        mouseX >= ((width/2 - (200/2)) - 100) &&
        mouseX <= ((width/2 - (200/2)) + 10+ùù+0) &&
        mouseY >= (height-200 - 40) &&
        mouseY <= height-200 + 40){
        stato = States.Strumento;
    }*/

    //if(stato == States.Start)
}

function bottoneStartPremuto(){
    if(mouseIsPressed){
        var d = dist(mouseX, mouseY, bottoneStart.getPosX()+100, bottoneStart.getPosY()-50);
        if(d < 100){
            stato = States.Strumento;
        }
    }
}


function drawSchermataPausa(){

}

function drawSchermataSettings(){

}

function drawSchermataGameOver(){

}



function drawSchermataGioco(){

}

function drawSchermataInfo(){

}