//cose per il canvas
let height = 700
let width = 1300
//cose per la videocamera
let height_init = 480
let widht_init = 640



//varibili immagini
let sfondoPricipale
let sfondoSecondario
let sfondoCanzone
let sfondoStrumento
let sfondoInfo;
let sfondoSettings
let sfondoGioco

//immagini bottoni
let bottoneImpostazini_image
let bottoneRepImg
let bottoneHomeImg
let bottoneinfoImg
let bottonePlayImg
let bottonePauseImg
let scorreDxImg
let scorreSxImg
let bottoneStartImg
let bottoneAvantiImg
let bottoneIndietroImg

//cursori
let cursorePremuto;
let cursoreRilasciato;

let rettangoloLateralePremuto;
let rettangoloLateraleRilasciato;

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
let bottoneIndietro
let bottoneAvanti

//schermate
let schermataPrincipale
let schermataGioco
let schermataPausa
let schermataSettings
let schermataGameOver
let schermataStrumento
let schermataInfo


//oggettiSchermate

let sStart
let sGioco
let sGameOver
let sPause
let sInfo
let sSettings
let sStrumento
let sCanzone


//gestione della videocamera
let video;
let handpose; //<-- per la mano
let predictions = []
let debug = 0;
let flippedVideoM //per specchiare la sorgente video

let suono;

//cose per il suono/brani
let nomeBrani = ["As_it_was","BarbieGirl","Bitzcochito_rosalia","ciao","Guasto_Damore","hall_of_fame","Laurea_ad_honorem","Lingerie","Mademoiselle","replay","stereo_hearts","waka_waka","wrecked"];
let autori = ["HarryStyles","Aqua","Rosalia","Thasupreme","Bresh","TheScript","Marracash","Tedua","SferaEbbasta","Iyaz","GimClassHeroes","Shakira","ImagineDragons"];
let fontBrani;

//oggetti Brano
let vettoreBrani = [];

let frecciaPremuta = false;

let game;

let immagineSpartito;
let immagineSfumaturaSpartito;

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
let stato = States.Start //variabile per stati

//per animazione di caricamento
let caricamento = true;
let immaginiCaricamento = [];
let immagineCaricamentoAttuale = 0;



/*
*NOTA:
* pulsante scorreSx da guardare */

// Preload code
function preload(){
    sfondoPricipale = loadImage("images/sfondoSchermataPrincipale.png");
    sfondoSecondario = loadImage("images/sfondoBlur.jpg");
    sfondoCanzone = loadImage("images/sfondoBlurCanzone.jpg");
    sfondoStrumento = loadImage("images/sfondoBlurStrumento.jpg");
    sfondoSettings = loadImage("images/sfondoBlurSettings.png");
    sfondoInfo = loadImage("images/sfondoBlurInfo.png");
    sfondoGioco = loadImage("images/sfondoGioco.png");

    bottoneImpostazini_image = loadImage("images/immagineBottoneSettings.png");
    bottoneRepImg = loadImage("images/immagineButtonReplay.png");
    bottoneHomeImg = loadImage("images/immagineBottoneHome.png");
    bottoneinfoImg = loadImage("images/immagineBottoneInfo.png");
    bottonePlayImg = loadImage("images/immagineBottonePlay.png");
    bottonePauseImg = loadImage("images/immagineBottonePause.png");
    bottoneStartImg = loadImage("images/immagineBottoneStart.png");
    bottoneAvantiImg = loadImage("images/immagineBottoneAvanti.png");
    bottoneIndietroImg = loadImage("images/immagineBottoneIndietro.png");
    immagineSpartito = loadImage("images/spartitoMusicale.png");
    immagineSfumaturaSpartito = loadImage("images/ulterioreSfumatureCentroGioco.png");

    scorreDxImg = loadImage("images/scorreDX.png");
    scorreSxImg = loadImage("images/scorreSX.png");

    cursorePremuto = loadImage("images/pallaCursorePremuto.png");
    cursoreRilasciato = loadImage("images/pallaCursoreRilasciato.png");

    rettangoloLateraleRilasciato = loadImage("images/rettangoloGiocoLateraleNonPremuto.png");
    rettangoloLateralePremuto = loadImage("images/rettangoloGiocoLateralePremuto.png");

    soundFormats('mp3', 'ogg');
    //suono = loadSound('canzoni/bizcocito.mp3');

    fontBrani = loadFont("font/Wheat Smile.ttf");
    caricaImgCaricamento();

}

function setup() {

    //quadratoProva = new Quadratini(width, 117, 120, 50, 'yellow');

    spartitoProva = new Spartito(width/2, 300, width, 117, 'yellow');

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
    inizializzaSchermate();

    inizializzaBrani();
}

function delay(ms) {
    let start = Date.now();

    while (Date.now() < start + ms) {
        // Attendi
    }
}

function inizializzaBrani(){
    var k = 0;
    var branoTemp;
    var copertinaTemp;

    try {


        for (k = 0; k < nomeBrani.length; k++) {

            branoTemp = loadSound("canzoni/" + nomeBrani[k] + ".mp3");
            copertinaTemp = loadImage("images/copertineCanzoni/" + nomeBrani[k] + ".jpeg");
            console.log("canzoni/" + nomeBrani[k] + ".mp3");
            console.log("images/copertineCanzoni/" + nomeBrani[k] + ".png");
            //images/copertineCanzoni/WhereThemGirlsAt_DavidGuetta.jpeg
            //C:\Users\Andrea\Desktop\cartelle\pcto_quarta\PCTO\prova1\images\copertineCanzoni
            vettoreBrani.push(new Brano(branoTemp, copertinaTemp, nomeBrani[k], autori[k], 200, width / 2 - 100, 250));

        }
    }catch{
        location.reload();
    }
}

function puntoMedio(p1X, p1Y, p2x, p2y){
    const x = (p1X + p2x) / 2;
    const y = (p1Y + p2y) / 2;
    return { x, y};
}

function drawKeypoints() { // la punta dell'indice ha valore 12 ed è quindi il dito indice per il limite sotto invece è 0

    if (debug) { //fino alla 74 solo per fare i vari calcoli della mano
        var posYmin = 100000; //--> corrisponde al dito piu altro (solo in fase di test)
        var posYmax = 0; //--> corrisponde alla parte piu bassa del palmo
        var valueMax;
        var valueMin;
    }else {

        noStroke();

        for (let i = 0; i < predictions.length; i += 1) {
            const prediction = predictions[i];
            //i valori importanti sono quelli del 12 e del 0
            //occore fare una media tra i due per trovare un punto centrale
            //e poi disegnare il cursore
            const keypoint1 = prediction.landmarks[0];
            const keypoint2 = prediction.landmarks[12];
            var premuto = false;

            var midd = puntoMedio(keypoint1[0] * (1300 / 640), keypoint1[1] * (700 / 480), keypoint2[0] * (1300 / 640), keypoint2[1] * (700 / 480));

            var d  = dist(keypoint1[0] * (1300 / 640), keypoint1[1] * (700 / 480), keypoint2[0] * (1300 / 640), keypoint2[1] * (700 / 480));
            if(d < 100){
                premuto = true;
            }


            console.log(midd);
            if(premuto){
                image(cursorePremuto,midd.x = width - midd.x, midd.y, 100, 100);
            }else{
                image(cursoreRilasciato,midd.x = width - midd.x, midd.y, 100, 100)
            }
            var x1 = midd.x = width - midd.x;
            var y1 = midd.y;

            if (debug) {
                for (let j = 0; j < prediction.landmarks.length; j += 1) {
                    const keypoint = prediction.landmarks[j];
                    fill(0, 255, 0);

                    // Adatta le coordinate dei punti chiave alla scala della finestra
                    const x = keypoint[0] * (1300 / 640);
                    const y = keypoint[1] * (700 / 480);
                    const x_magica = width - x;
                    if (debug) {

                        if (y < posYmin) {
                            posYmin = y;
                            valueMin = j;
                            console.log(y);
                        } else if (y > posYmax) {
                            valueMax = j;
                            posYmax = y
                            console.log(y);
                        }
                    }
                    if (j == 12) {
                        fill(255, 0, 0);
                        ellipse(x_magica, y, 10, 10);
                    } else if (j == 0) {
                        fill(200, 50, 255);
                        ellipse(x_magica, y, 10, 10);
                    } else {
                        ellipse(x_magica, y, 10, 10);
                    }
                }
            }
        }
    }
    if (debug) {
        console.log("posizione dell'indice (piu in alto) " + valueMin);
        console.log("posizione del palmo (piu in basso)" + valueMin);
    }
    return ({x1,y1,premuto});
}

function modelReady() {
    console.log("Model ready!");
    caricamento = !caricamento;
}

//inizializza i bottoni nelle posizioni
function inizializzaBottoni() {
    bottoneSettings = new Bottone(60, 70, bottoneImpostazini_image, 75, 75, "settings");
    bottoneReplay = new Bottone(50, 50, bottoneRepImg, 75, 75,"replay");
    bottoneAvanti = new Bottone(100, height-100, bottoneAvantiImg, 75,74,"avanti");
    bottonePause = new Bottone(180, 80, bottonePauseImg, 75, 75, "pause");
    bottoneInfo = new Bottone((width - 150), 70, bottoneinfoImg, 75, 75, "info");
    bottoneStart = new Bottone((width / 2 - (200 / 2)), height - 150, bottoneStartImg, 200, 80, "start");
    bottoneHome = new Bottone(width - 90, height - 85, bottoneHomeImg, 75, 75, "home");
    bottoneScorreSX = new Bottone((width / 2 - (75 / 2) - 300), (height / 2 - (75 / 2)), scorreSxImg, 75, 75, "scorreSX");
    bottoneScorreDX = new Bottone((width / 2 - (75 / 2) + 300), (height / 2 - (75 / 2)), scorreDxImg, 75, 75, "scorreDX");
}

function inizializzaSchermate(){
    sStart = new Schermata(["settings", "info", "start"]);
    sGioco = new Schermata(["settings", "info"]);
    sGameOver = new Schermata(["settings", "info", "replay"]);
    sPause = new Schermata(["info", "replay"]);
    sInfo = new Schermata(["home"]); //il pulsante back non esiste
    sSettings = new Schermata(["back", "home"]); //il pulsante back non esiste
    //sStrumento = new Schermata(["back", "info","home", "settings", "avanti", "scorreDX", "scorreSX"]); //il pulsante back non esiste
    sCanzone = new Schermata(["back", "info", "home", "settings", "avanti", "scorreDX", "scorreSX"]); //il pulsante back non esiste
}

function caricaImgCaricamento(){

    for(var k = 1; k <= 9; k++){
        immaginiCaricamento.push(loadImage("images/caricamentoImg/"+k+".png"));
    }
}

function mostraCaricamento(){
    while(caricamento) {//se caricamento deve caricare è vera;

        for (var k = 0; k < 8; k++) {
            //image(immaginiCaricamento[k], 0, 0, width, height);
        }
    }
}


function draw() {
    gestioneSchermate();
}


function gestioneSchermate() {

    //suono.play();
    if(!debug)
        console.log(stato);
    if (stato === States.Gioco) {
        drawSchermataGioco();
    } else if (stato === States.Pause) {
        drawSchermataPausa();
    } else if (stato === States.Info) {
        drawSchermataInfo();
    } else if (stato === States.Start) {
        drawSchermataPrincipale();
    } else if (stato === States.GameOver) {
        drawSchermataGameOver();
    } else if (stato === States.Strumento) {
        drawschermataStrumento();
    } else if (stato === States.Settings) {
        drawSchermataSettings();
    } else if (stato === States.Canzone) {
        drawschermataCanzone();
    }
    controllaSuoni();
}

function controllaSuoni(){
    if(stato != States.Canzone){
        vettoreBrani[Brano.branoCorrente].brano.stop();
    }
}

function controllaBottoni(sche){

    bottoneStart.premuto(States.Canzone, sche);
    bottoneSettings.premuto(States.Settings, sche);
    bottoneInfo.premuto(States.Info, sche);
    bottoneHome.premuto(States.Start, sche);

    if(sche === sCanzone && bottoneAvanti.premuto(States.Gioco, sche)){
        console.log("sono entrato spopositamente nella if diocan");
        game = new Gioco(vettoreBrani[Brano.branoCorrente]);
    }



}

//start gioco
function drawSchermataPrincipale() {
    //image(sfondoPricipale, 0,0, width, height);
    //background(video);
    //mostraCaricamento();
    if(caricamento){
        image(immaginiCaricamento[immagineCaricamentoAttuale], 0, 0, width, height);

        immagineCaricamentoAttuale ++;
        if(immagineCaricamentoAttuale >= 9){
            immagineCaricamentoAttuale = 0;
        }
        delay(50);

    }else {


        background(sfondoPricipale);
        bottoneSettings.draw();
        bottoneInfo.draw();
        bottoneStart.draw();

        // Inverto l'immagine orizzontalmente
        flippedVideoM = cursoreMagiK();
        controllaBottoni(sStart);
        //flippedVideoM.updatePixels();

        /*flippedVideo.loadPixels();
        video.loadPixels();
        for (let y = 0; y < video.height; y++) {
            for (let x = 0; x < video.width; x++) {
                let index = (x + y * video.width) * 4;
                let flippedIndex = ((video.width - x - 1) + y * video.width) * 4;
                flippedVideo.pixels[flippedIndex] = video.pixels[index];
                flippedVideo.pixels[flippedIndex + 1] = video.pixels[index + 1];
                flippedVideo.pixels[flippedIndex + 2] = video.pixels[index + 2];
                flippedVideo.pixels[flippedIndex + 3] = video.pixels[index + 3];
            }
        }*/
        //flippedVideoM.updatePixels();

        //image(video, 0, 0, width, height); //per la fotocamera

        //video = specchiaImmagine();
        //image(flippedVideo, 0, 0);
        //drawKeypoints();
        //bottoneStartPremuto();
    }
}

function cursoreMagiK(){
    let flippedVideo = createImage(video.width, video.height);
    flippedVideo.loadPixels();
    video.loadPixels();
    for (let y = 0; y < video.height; y++) {
        for (let x = 0; x < video.width; x++) {
            let index = (x + y * video.width) * 4;
            let flippedIndex = ((video.width - x - 1) + y * video.width) * 4;
            flippedVideo.pixels[flippedIndex] = video.pixels[index];
            flippedVideo.pixels[flippedIndex + 1] = video.pixels[index + 1];
            flippedVideo.pixels[flippedIndex + 2] = video.pixels[index + 2];
            flippedVideo.pixels[flippedIndex + 3] = video.pixels[index + 3];
        }
    }
    flippedVideo.updatePixels(); // Update the flippedVideo image with the flipped pixels

    return flippedVideo;
}


function drawschermataStrumento() {
    background(sfondoStrumento);
    controllaBottoni(sStrumento);
    bottoneSettings.draw();
    bottoneInfo.draw();
    bottoneHome.draw();
    bottoneScorreSX.draw();
    bottoneScorreDX.draw();
}

function drawschermataCanzone() {
    background(sfondoCanzone);
    controllaBottoni(sCanzone);
    vettoreBrani[Brano.branoCorrente].draw();
    if(!vettoreBrani[Brano.branoCorrente].brano.isPlaying())
    vettoreBrani[Brano.branoCorrente].play();


    if(bottoneScorreSX.premuto(States.Canzone, sCanzone)){

        if(!frecciaPremuta)
        if(Brano.branoCorrente-1 >= 0){
            vettoreBrani[Brano.branoCorrente].brano.stop();
            console.log("qualsosa funzia");
            Brano.branoCorrente -=1;
        }else{
            Brano.branoCorrente = vettoreBrani.length-1
        }
        frecciaPremuta = true;
    }else if(bottoneScorreDX.premuto(States.Canzone, sCanzone)){

        if(!frecciaPremuta)
        if(Brano.branoCorrente+1 < vettoreBrani.length){
            vettoreBrani[Brano.branoCorrente].brano.stop();
            Brano.branoCorrente +=1;
        }else{
            Brano.branoCorrente = 0;
        }
        frecciaPremuta = true;
    }else{
        frecciaPremuta = false;
    }

    bottoneSettings.draw();
    bottoneInfo.draw();
    bottoneHome.draw();
    bottoneScorreSX.draw();
    bottoneScorreDX.draw();
    bottoneAvanti.draw();


}

function drawSchermataInfo() {
    if(debug)
        console.log("mi trovo nella schermata info");
    background(sfondoInfo);
    bottoneHome.draw();

    controllaBottoni(sInfo);

    testo = "info"
    text(testo, 50, 50, 150);

}

function drawSchermataSettings() {
    background(sfondoSettings);
    bottoneHome.draw();
    testo = "settings"
    text(testo, 50, 50, 150);
    controllaBottoni(sSettings);

}

function drawSchermataGioco() {
    image(flippedVideoM, -650,0,1300,700);
    image(sfondoGioco, 0, 0,1300,700);
    image(immagineSpartito, width/2, 0,750, 570);
    flippedVideoM = cursoreMagiK();
    game.drawKeypointsGioco();

    //quadratoProva.draw();
    //quadratoProva.move();

    spartitoProva.drawTuttiQuadratini();

    image(immagineSfumaturaSpartito, 0,0,1300,700);ù
 

    //game.creaQuadratini();
    //game.stampaQuadratini();




    //image(flippedVideoM, 0,0,1300,700);
}


/*
function bottoneStartPremuto() {

    var obj = drawKeypoints();
    var x1 = obj.x1;
    var y1 = obj.y1;
    var premuto = obj.premuto;

    if(premuto){
        var d1 = dist(x1,y1, bottoneStart.getPosX() + 100, bottoneStart.getPosY() - 50);
        if(d1<100){
            stato = States.Strumento;
        }
    }

    if(debug)
    if (mouseIsPressed) {
        var d = dist(mouseX, mouseY, bottoneStart.getPosX() + 100, bottoneStart.getPosY() - 50);
        if (d < 100) {
            stato = States.Strumento;
        }
    }

}
*/

/*
// variabili per gestire la canzone e la sua analisi
let song;
let fft;

function preload() {
  // carica la canzone da riprodurre
  song = loadSound('nome_file.mp3');
}

function setup() {
  // crea un canvas per visualizzare il gioco
  createCanvas(400, 400);

  // inizia a riprodurre la canzone
  song.play();

  // crea un'istanza dell'analisi FFT
  fft = new p5.FFT();
}

function draw() {
  // calcola lo spettro della canzone
  let spectrum = fft.analyze();

  // calcola la frequenza fondamentale dello spettro
  let fundamentalFreq = findFundamentalFreq(spectrum);

  // calcola la nota musicale corrispondente alla frequenza fondamentale
  let note = freqToNote(fundamentalFreq);

  // converte la nota musicale in un valore da 1 a 100
  let noteValue = map(note, 0, 88, 1, 100);

  // disegna il valore della nota sulla finestra
  background(0);
  textSize(32);
  fill(255);
  text(noteValue, width/2, height/2);
}

// funzione ausiliaria per trovare la frequenza fondamentale
function findFundamentalFreq(spectrum) {
  let i = 0;
  let maxAmp = 0;
  for (let j = 0; j < spectrum.length; j++) {
    if (spectrum[j] > maxAmp) {
      i = j;
      maxAmp = spectrum[j];
    }
  }
  let freq = i * 22050 / spectrum.length;
  return freq;
}

// funzione ausiliaria per convertire la frequenza in nota musicale
function freqToNote(freq) {
  let note = 12 * (Math.log2(freq) - Math.log2(440)) + 69;
  return Math.round(note);
}
 */


function drawSchermataPausa() {

}



function drawSchermataGameOver() {

}



