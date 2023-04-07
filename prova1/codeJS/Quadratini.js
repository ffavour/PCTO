class Quadratini{

   static xSpeed = 30;
   static width1 = 150;
   static height1 = 50;

   static imageLibero = quadratinoImg;
   static posXinit = width-50;
   static limX = 600;  

   constructor(posY) {
      this.posX = Quadratini.posXinit;
      this.posY = posY;

   }

   drawOso(){
      image(quadratinoImg, this.posX, this.posY, Quadratini.width1, Quadratini.height1);
   }

   move(){
      console.log("posx, y, limX", this.posX, this.posY, Quadratini.limX, Quadratini.xSpeed);
      //delay(500);
      if(this.posX - Quadratini.xSpeed < Quadratini.limX){
         console.log("dio can");
         return false;
      }else{
         console.log("no ok tutto appost");
         this.posX = this.posX - Quadratini.xSpeed;
         return true;
      }
   }

   moveAndDraw(){
      if(this.move()){
         this.drawOso();
         return true;
      }else{
         this.drawOso();
         return false;
      }
   }

   cursoreToccato(){
      /*if(mouseX > this.posX && mouseX < this.posX + this.widthR &&
       mouseY > this.posY && mouseY < this.posY + this.heightR){
      this.colore = 'green';
    }*/

      if(mouseX > this.posY && mouseX < this.posX + Quadratini.width1 &&
         mouseY > this.posY && mouseY < this.posY + Quadratini.height1){
         Quadratini.imageLibero = quadratinoImgPremutoImg;
      }
   }

}