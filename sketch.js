var iss,issimg,spacecraftimg,bgimg,spacecraft;
var spacecraftleft,spacecraftright,spacecraftboth,hasDocked=false;

function preload(){
  issimg=loadImage("iss.png");
  spacecraftimg=loadImage("spacecraft1.png");
  bgimg=loadImage("spacebg.jpg");
  spacecraftleft=loadAnimation("spacecraft3.png");
  spacecraftright=loadAnimation("spacecraft4.png");
  spacecraftboth=loadAnimation("spacecraft2.png");

}

function setup() {
  createCanvas(800,400);
  iss=createSprite(400, 199, 50, 50);
  iss.addImage("iss", issimg);
  iss.scale=0.8;
  spacecraft=createSprite(400,300,20,20);
  spacecraft.addAnimation("resting pos",spacecraftimg);
  spacecraft.addAnimation("up pos",spacecraftboth);
  spacecraft.addAnimation("left pos",spacecraftleft);
  spacecraft.addAnimation("right pos",spacecraftright);
  spacecraft.scale=0.2;
}

function draw() {
  background("black"); 
  if (keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-5;
    spacecraft.changeAnimation("up pos",spacecraftboth);
  } 
  if (keyDown(DOWN_ARROW)){
    spacecraft.y=spacecraft.y+5;
    spacecraft.changeAnimation("resting pos",spacecraftimg);
  }
  if (keyDown(RIGHT_ARROW)){
    spacecraft.x=spacecraft.x+5;
    spacecraft.changeAnimation("right pos",spacecraftright);
  }
  if (keyDown(LEFT_ARROW)){
    spacecraft.x=spacecraft.x-5;
    spacecraft.changeAnimation("left pos",spacecraftleft);
  }
  if(spacecraft.x<=345 && spacecraft.x>=335 && spacecraft.y>=280 && spacecraft.y<=290){
    fill("white");
    text("Docking Succesful",400,330);
    hasDocked=true;
  }
  console.log(spacecraft.x);
  //console.log(spacecraft.y);
  drawSprites();
}