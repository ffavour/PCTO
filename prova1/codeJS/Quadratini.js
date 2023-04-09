class Quadratini{

   static xSpeed = 45;
   static width1 = 150;
   static height1 = 50;

   static imageLibero = quadratinoImg;
   static posXinit = width-50;
   static limX = 600; //era 500 ma è meglio 600

   constructor(posY) {
      this.posX = Quadratini.posXinit;
      this.posY = posY;

   }

   drawOso(){
      image(quadratinoImg, this.posX, this.posY, Quadratini.width1, Quadratini.height1);
   }

   move(){
      //delay(500);
      if(this.posX - Quadratini.xSpeed < Quadratini.limX){
         return false;
      }else{
         this.posX = this.posX - Quadratini.xSpeed;
         return true;
      }
   }

   //ma serve???
   moveAndDraw(){
      if(this.move()){
         this.drawOso();
         return true;
      }else{
         this.drawOso();
         return false;
      }
   }

   //da guardare
   cursoreToccato(){
      /*if(mouseX > this.posX && mouseX < this.posX + this.widthR &&
       mouseY > this.posY && mouseY < this.posY + this.heightR){
      this.colore = 'green';
    }*/
      var curX, cursY, selez = game.drawKeypointsGioco();

      if(mouseX > this.posY && mouseX < this.posX + Quadratini.width1 &&
         mouseY > this.posY && mouseY < this.posY + Quadratini.height1){
         Quadratini.imageLibero = quadratinoImgPremutoImg;
      }
   }

}