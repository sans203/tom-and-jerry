var cat,catImg,catImg2,catImg3;
var mouse, mouseImg,mouseImg2;
var gardenImg;

function preload() {
    //load the images here

gardenImg=loadImage("images/garden.png")
catImg=loadAnimation("images/cat1.png");
mouseImg=loadAnimation("images/mouse1.png");
catImg2=loadAnimation("images/cat2.png","images/cat3.png");
mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
catImg3=loadAnimation("images/cat4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  cat = createSprite(870,600);
  cat.addAnimation("gato sentado",catImg);
  cat.scale=0.2;

 mouse=createSprite(70,600);
 mouse.addAnimation("raton",mouseImg);
 mouse.scale=0.2;

}

function draw() {

    background("garden",gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x<(cat.width - mouse.width)/2){
      cat.velocityX=0
      cat.addAnimation("imagenFinal",catImg3);
      cat.changeAnimation("imageFinal")
      cat.X=300;
      cat.scale=0.2;
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  mouse.addAnimation("raton molestado",mouseImg2);
  mouse.changeAnimation("raton molestado");
  mouse.frameDelay=25;

  cat.velocityX =-5
  cat.addAnimation("gato caminando",catImg2);
  cat.changeAnimation("gato caminando");
  cat.frameDelay=25;
}
