class Quadratini{

   static xSpeed = 30;
   static width1 = 150;
   static height1 = 50;

   static imageLibero = quadratinoImg;
   static posXinit = width-50;
   static limX = 500;

   constructor(posY) {
      this.posX = Quadratini.posXinit;
      this.posY = posY;

   }

   draw(){
      image(Quadratini.imageLibero, this.posX, this.posY, Quadratini.width1, Quadratini.height1);
   }

   move(){
      if(this.posX - Quadratini.xSpeed < Quadratini.limX){
         return false;
      }else{
         this.posX = this.posX - Quadratini.xSpeed;
         return true;
      }
   }
   
   moveAndDraw(){
      if(this.move()){
         draw();
         return true;
      }else{
         draw();
         return false;
      }
   }

}