
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
  FoodGroup = createGroup();
}


function draw() {
  background("white");
  drawSprites();
  
  ground.x = ground.width/2;
  ground.velocityX = -4;
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time : " + survivalTime,100,50);
  
  monkey.collide(ground);
  
  monkey.velocityY = monkey.velocityY+0.8;
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  banana();
  obstacles();
}

function banana() {
  if(frameCount%80 === 0) {
    var banana = createSprite(410,200,10,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    
    FoodGroup.add(banana);
  }
}

function obstacles() {
  if(frameCount%300 === 0) {
    var obstacle = createSprite(410,320,50,50);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -5;
    obstacle.scale = 0.2;
  }
}