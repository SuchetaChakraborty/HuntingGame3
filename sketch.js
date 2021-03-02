var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg, bgImage;
var deer, deerImage;
var hunter, hunterImage;
var bullet, bulletImage;
var bang, bangImage;


function preload(){

  bgImage = loadImage("Images/Bg2.jpeg");

  deerImage = loadAnimation("Images/Deer1.png", "Images/Deer2.png", "Images/Deer3.png", "Images/Deer4.png", "Images/Deer5.png", "Images/Deer6.png")

  hunterImage = loadImage("Images/HunterImage.png");

  bulletImage = loadImage("Images/Bullet.png");

  bangImage = loadImage("Images/FiringImage.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bg = createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(bgImage);
  bg.scale = 1.85;
  bg.velocityX = -2;

  deer = createSprite(windowWidth/1.5, windowHeight-100);
  deer.addAnimation("deer_running", deerImage);
  deer.scale = 2;

  hunter = createSprite(windowWidth/8, windowHeight-125);
  hunter.addImage("hunter", hunterImage);
  hunter.scale = 0.3;
}


function draw(){
  background("green");

 if(bg.x < 200){
   bg.x = width/2;
 }

 spawnBullets();

 spawnBang();

 drawSprites();

}


function spawnBullets(){
  if(frameCount % 50 === 0){
    var bullet = createSprite(windowWidth/8 + 50, windowHeight-160);
    bullet.addImage(bulletImage);
    bullet.scale = 0.1;
    bullet.velocityX = 2;
  }

}

function spawnBang(){
  if(frameCount % 50 === 0){
    var x = Math.round(random(0, width));
    var y = Math.round(random(0, height));
    var bang = createSprite(x,y);
    console.log(bang.x, bang.y);
    bang.addImage(bangImage);
    bang.scale = 0.2;
  }


}