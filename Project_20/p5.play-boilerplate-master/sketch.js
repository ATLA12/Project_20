var brush,sleep,background,bath,gym,eat,astronaut
var brushImg, sleepImg, backgroundImg, bathImg, gymImg, eatImg


function preload(){
  brushImg = loadAnimation("brush.png");
  sleepImg = loadAnimation("sleep.png");
  bathImg = loadImage("bath1.png");
  gymImg = loadImage("gym1.png");
  eatImg = loadImage("eat1.png");
  backgroundImg = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400,250);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale = 0.1;
}

function draw() {
  background(backgroundImg); 
  fill("#FFFF"); 
  textSize(30);
  text("Instructions:",25,50);
  textSize(20);
  text("Up Arrow = Brushing",25,70);
  text("Down Arrow = Gymming",25,90);
  text("Left Arrow = Eating",25,110);
  text("Right Arrow = Bathing",25,130);
  text("m key = Moving",25,150);

  arrowup();
  arrowdown();
  arrowright();
  arrowleft();
  smallM();
  drawSprites();
  
}

function arrowup(){
  if(keyIsDown(UP_ARROW)){
    astronaut.addAnimation("sleeping",brushImg);
  }
}


function arrowdown(){
  if(keyIsDown(DOWN_ARROW)){
    astronaut.addAnimation("sleeping",gymImg);
  }
}


function arrowright(){
  if(keyIsDown(RIGHT_ARROW)){
    astronaut.addAnimation("sleeping",bathImg);
  }
}



function arrowleft(){
  if(keyIsDown(LEFT_ARROW)){
    astronaut.addAnimation("sleeping",eatImg);
  }
}

function smallM(){
  if(keyCode == 109){
    astronaut.x = World.mouseX;
    astronaut.y = World.mouseY;
  }
}