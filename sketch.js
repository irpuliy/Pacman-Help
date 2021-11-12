var pacmanbg;
var Eating,pacmanReady,Circle,Pacman;
var ghost11,ghost1,ghost2,ghost22,ghost3,ghost33,ghost4,ghost44

var gameState = "serve";


function preload() {
  pacmanbg = loadImage("pacmanbg.png");
  Eating = loadImage("pacman.gif");
  pacmanReady = loadImage("PacmanH.png");
  Circle = loadImage("fullpacman.png");
  ghost1 = loadImage("ghost1.gif");
  ghost2 = loadImage("ghost2.gif");
  ghost3 = loadImage("ghost3.gif");
  ghost4 = loadImage("ghost4.gif");
}

function setup() {
  createCanvas(600,600);


  ghost11 = createSprite(350,300,10,10);
  ghost11.addImage("Cuteghost",ghost1);
  ghost11.scale = 0.07;
  ghost22 = createSprite(300,300,10,10);
  ghost22.addImage("Cuteghost1",ghost2);
  ghost22.scale = 0.07;
  ghost33 = createSprite(250,300,10,10);
  ghost33.addImage("Cuteghost2",ghost3);
  ghost33.scale = 0.07;
  ghost44 = createSprite(300,270,10,10);
  ghost44.addImage("Cuteghost3",ghost4);
  ghost44.scale = 0.07;
  


  wall1 = createSprite(20, 100, 20, 190);
  wall2 = createSprite(585, 100, 20, 190);
  wall3 = createSprite(300, 10, 550, 20);
  wall4 = createSprite(300, 590, 550, 20);
  wall5 = createSprite(60, 190, 100, 20);
  wall6 = createSprite(545, 190, 100, 20);
  wall7 = createSprite(490, 220, 20, 80);
  wall8 = createSprite(120, 220, 20, 80);
  wall9 = createSprite(65, 250, 130, 30);
  wall10 = createSprite(65, 300, 130, 30);
  wall11 = createSprite(550, 250, 130, 30);
  wall12 = createSprite(550, 300, 130, 30);
  wall13 = createSprite(20, 480, 20, 240);
  wall14 = createSprite(585, 480, 20, 240);
  wall15 = createSprite(65, 360, 130, 30);
  wall16 = createSprite(550, 360, 130, 30);
  wall17 = createSprite(495, 330, 20, 80);
  wall18 = createSprite(10, 330, 20, 80);
  wall19 = createSprite(120, 330, 20, 80);
  w1 = createSprite(95,75,60,35);
  w2 = createSprite(210,75,85,35);
  w3 = createSprite(395,75,85,35);
  w4 = createSprite(510,75,60,35);
  w5 = createSprite(95,140,60,20);
  w6 = createSprite(510,140,60,20);
  w7 = createSprite(302,60,20,80);
  ws1 = createSprite(175,195,20,133);
  ws2 = createSprite(210,195,70,20);
  ws3 = createSprite(390,195,65,20);
  ws4 = createSprite(425,195,20,133)
  ws5 = createSprite(302,170,20,80);
  ws6 = createSprite(305,140,150,20);
  ws7 = createSprite(302,395,20,75);
  ws8 = createSprite(302,369,140,20);
  ws9 = createSprite(302,480,140,20);
  ws10 = createSprite(302,510,20,75);
  Ls1 = createSprite(176,505,20,70);
  Ls2 = createSprite(155,534,180,20);
  Ls3 = createSprite(425,505,20,70);
  Ls4 = createSprite(445,534,180,20);
  Ls5 = createSprite(489,450,20,70);
  Ls6 = createSprite(510,425,60,20);
  Ls7 = createSprite(115,450,20,70);
  Ls8 = createSprite(90,425,60,20);
  s1 = createSprite(210,425,80,20);
  s2 = createSprite(395,425,80,20);
  s3 = createSprite(570,475,50,25);
  s4 = createSprite(50,475,50,25);
  s5 = createSprite(175,340,20,70);
  s6 = createSprite(425,340,20,70);
  ghe1 = createSprite(230,280,10,70);
  ghe2 = createSprite(370,280,10,70);
  ghe3 = createSprite(300,320,150,10);
  ghe4 = createSprite(250,250,50,10);
  ghe5 = createSprite(350,250,50,10);



}
function draw() {
  background(pacmanbg); 
 wall1.visible = false;
 wall2.visible = false;
 wall3.visible = false;
 wall4.visible = false;
 wall5.visible = false;
 wall6.visible = false;
 wall7.visible = false;
 wall8.visible = false;
 wall9.visible = false;
 wall10.visible = false;
 wall11.visible = false;
 wall12.visible = false;
 wall13.visible = false;
 wall14.visible = false;
 wall15.visible = false;
 wall16.visible = false;
 wall17.visible = false;
 wall18.visible = false;
 wall19.visible = false;
 w1.visible = false;
 w2.visible = false;
 w3.visible = false;
 w4.visible = false;
 w5.visible = false;
 w6.visible = false;
 w7.visible = false;
 ws1.visible = false;
 ws2.visible = false;
 ws3.visible = false;
 ws4.visible = false;
 ws5.visible = false;
 ws6.visible = false;
 ws7.visible = false;
 ws8.visible = false;
 ws9.visible = false;
 ws10.visible = false;
 Ls1.visible = false;
 Ls2.visible = false;
 Ls3.visible = false;
 Ls4.visible = false;
 Ls5.visible = false;
 Ls6.visible = false;
 Ls7.visible = false;
 Ls8.visible = false;
 s1.visible = false;
 s2.visible = false;
 s3.visible = false;
 s4.visible = false;
 s5.visible = false;
 s6.visible = false;
 ghe1.visible = false;
 ghe2.visible = false;
 ghe3.visible = false;
 ghe4.visible = false;
 ghe5.visible = false;

 if (gameState === "serve"){
    //pacman Sprites
    Pacman = createSprite(305,450,10,10);
    Pacman.addImage("Starting",Circle);
    Pacman.scale = 0.03;
 }
 else if(gameState === "play"){
  Pacman.changeAnimation("Ready",pacmanReady);

 }

 if(keyDown(UP_ARROW)){
   gameState = "play";
   Pacman.y = Pacman.y - 3;
 }
 if(keyDown(DOWN_ARROW)){
  gameState = "play";
  Pacman.y = Pacman.y + 3;
  
}
if(keyDown(RIGHT_ARROW)){
  gameState = "play";
  Pacman.x = Pacman.x + 3;
 
}
if(keyDown(LEFT_ARROW)){
  gameState = "play";
  Pacman.x = Pacman.x - 3;
}

 Pacman.bounce(wall1);
 Pacman.bounce(wall2);
 Pacman.bounce(wall3);
 Pacman.bounce(wall4);
 Pacman.bounce(wall5);
 Pacman.bounce(wall6);
 Pacman.bounce(wall7);
 Pacman.bounce(wall8);
 Pacman.bounce(wall9);
 Pacman.bounce(wall10);
 Pacman.bounce(wall11);
 Pacman.bounce(wall12);
 Pacman.bounce(wall13);
 Pacman.bounce(wall14);
 Pacman.bounce(wall15);
 Pacman.bounce(wall16);
 Pacman.bounce(wall17);
 Pacman.bounce(wall18);
 Pacman.bounce(wall19);
 Pacman.bounce(w1);
 Pacman.bounce(w2);
 Pacman.bounce(w3);
 Pacman.bounce(w4);
 Pacman.bounce(w5);
 Pacman.bounce(w6);
 Pacman.bounce(w7);
 Pacman.bounce(ws1);
 Pacman.bounce(ws2);
 Pacman.bounce(ws3);
 Pacman.bounce(ws4);
 Pacman.bounce(ws5);
 Pacman.bounce(ws6);
 Pacman.bounce(ws7);
 Pacman.bounce(ws8);
 Pacman.bounce(ws9);
 Pacman.bounce(ws10);
 Pacman.bounce(Ls1);
 Pacman.bounce(Ls2);
 Pacman.bounce(Ls3);
 Pacman.bounce(Ls4);
 Pacman.bounce(Ls5);
 Pacman.bounce(Ls6);
 Pacman.bounce(Ls7);
 Pacman.bounce(Ls8);
 Pacman.bounce(s1);
 Pacman.bounce(s2);
 Pacman.bounce(s3);
 Pacman.bounce(s4);
 Pacman.bounce(s5);
 Pacman.bounce(s6);
 Pacman.bounce(ghe1);
 Pacman.bounce(ghe2);
 Pacman.bounce(ghe3);
 Pacman.bounce(ghe4);
 Pacman.bounce(ghe5);










 

  drawSprites();
}
