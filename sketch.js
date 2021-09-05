var tank1,tank2;
var tank1,tank2;

var background;
var bg,bg2,bg3;




function preload(){

  bg = loadImage("images/bg.jpg");
  bg1 = loadImage("images/bg2.jpg");
  bg2 = loadImage("images/bg3.jpg");

  tank1 = loadImage("images/tank1.jpg");
  tank2 = loadImage("images/tank2.jpg");








}
function setup() {
  createCanvas(1700,850);

  var tank2 = createSprite(600,200,20,20);

  

}

function draw() {
  background(bg);  
  drawSprites();
}