// Try not to get your life down!!

var life = 5;
var gameState = "play";

function preload(){
  roadImg = loadImage("assets/road.png","assets/road2.png")
  playerImg = loadImage("assets/player.png");
  img1 = loadImage("assets/car1.png");
  img2 = loadImage("assets/car2.png");
  img3 = loadImage("assets/car3.png");
  img4 = loadImage("assets/car4.png");
  img5 = loadImage("assets/car5.png");
  img6 = loadImage("assets/car6.png");
  img7 = loadImage("assets/car7.png");
  img8 = loadImage("assets/car8.png");
  img9 = loadImage("assets/car9.png");
  img10 = loadImage("assets/car10.png");
  img11 = loadImage("assets/car11.png");
  img12 = loadImage("assets/car12.png");
  img13 = loadImage("assets/car13.png");
  img14 = loadImage("assets/car14.png");
  img15 = loadImage("assets/car15.png");
  img16 = loadImage("assets/car16.png");
  img17 = loadImage("assets/car17.png");
  img18 = loadImage("assets/car18.png");


}
function setup() { 
  createCanvas(1400,900); 

  bg = createSprite(width/2,height/2);
  bg.addImage(roadImg);
  bg.x = 1000
  bg.scale = 1.5

  player = createSprite(400,350,30,50);
  player.addImage(playerImg);
  player.setCollider("circle",25,15,50);
  

  scoreBoard = createSprite(100,50,450,100);
  scoreBoard.shapeColor = "black";

  wall1 = createSprite(700,0,1400,20);
  wall1.shapeColor = "purple";
  wall1.visible = false;
  wall2 = createSprite(700,900,1400,20);
  wall2.shapeColor = "purple";
  wall2.visible = false;

  replay = createButton("Replay");
  replay.position(200,10);
  replay.size(100,50);

    replay.mousePressed (()=>{
      gameState = "play";
      player.x = 400;
     });
     
 
  VehicleGroup = new Group();
}
     
function draw() {
 background(0); 
 createEdgeSprites();
  
 bg.velocityX =-4;
 if (bg.x < 150){
   bg.x = 1000 
 }

 VehicleGroup.collide(wall1);
 VehicleGroup.collide(wall2);
 player.collide(wall1);
 player.collide(wall2);


  if(gameState === "play"){
   
      if(keyCode === RIGHT_ARROW){
        player.y+=5;
      }
      if(keyCode === LEFT_ARROW){
        player.y-=5;
      }

      if(VehicleGroup.isTouching(player)){
        life--;
        player.x = 1500;
      
       // gameState = "play";
      }
    

    drawSprites();
    spawnVehicles();
  }  
 
 if(life === 0){
    gameState = "end";
    player.velocityY = 0;
    player.visible = false;
    textSize(40);
    fill(0);
    text("Game Ended!!",600,90);
    
     drawSprites();
 }
 
 textSize(40);
 fill(255);
 text("Lives:"+life,20,50);
}


 
