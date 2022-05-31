var ground
var ball,paddle
var ballImage
var brick,brick2,brick3,brick4,brick5,brick6,brick7,brick8,brick9,brick10
var brick11,brick12,brick13,brick14,brick15,brick16,brick17,brick18,brick19,brick20
var gameState='serve'
//var gameState="play"
//var gameState="end"
var score=0
var wall1,wall2,wall3,wall4



function preload(){
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
 
  
 // ground = createSprite(200,180,400,20);
  //fill("yellow")
  ball= createSprite(1000,400,20,20)
  //ball.addImage("ball.png",ballImage)
  paddle=createSprite(600,280,200,20)
  fill("blue")

  //function createBrickRow(y,color){
   // for(c=0; c<6; c++)
  
     brick=createSprite(40,30,100,50)
     brick.shapeColor="red"
     brick2=createSprite(160,30,100,50)
     brick3=createSprite(280,30,100,50)
     brick4=createSprite(400,30,100,50)
     brick5=createSprite(520,30,100,50)
     brick6=createSprite(1120,30,100,50)
     brick7=createSprite(640,30,100,50)
     brick8=createSprite(760,30,100,50)
     brick9=createSprite(880,30,100,50)
     brick10=createSprite(1000,30,100,50)
     brick11=createSprite(160,100,100,50)
     brick12=createSprite(40,100,100,50)
     brick13=createSprite(280,100,100,50)
     brick14=createSprite(400,100,100,50)
     brick15=createSprite(520,100,100,50)
     brick16=createSprite(640,100,100,50)
     brick17=createSprite(760,100,100,50)
     brick18=createSprite(880,100,100,50)
     brick19=createSprite(1000,100,100,50)
     brick20=createSprite(1120,100,100,50)

     wall1=createSprite(500,550,1550,30)
     wall2=createSprite(600,10,1550,30)
     wall3=createSprite(10,200,30,1550)
     wall4=createSprite(1280,10,30,1550)
     wall1.visible=false
     wall2.visible=false
     wall3.visible=false
     wall4.visible=false
     

   // fill(color)
   // bricks.add(brick)
  
   // createBrickRow(65,"red")
   // createBrickRow(65+29,"orange")
    //createBrickRow(65+29+29,"green")
   // createBrickRow(65+29+29+29,"grey")
  //}

 
}

function draw() {
  //trex.debug = true;
  background('yellow');
textSize(30)
  text("SCORE "+score,100,400)
  
  if(gameState==="serve"){
    textSize(40)
    text("click to serve the ball",500,250)

    ball.velocityX=0;
    ball.velocityY=0
    ball.x=560
    ball.y=200
  }
  else if(gameState==="end"){
    text("gameOver",150,200)
  }
  else{
    gameplay();
  }

 //ball.bonceOff(topEdge)
// ball.bounceOff(rightEdge)
// ball.bounceOff(leftEdge)
// ball.bounceOff()
  
// if(keyIsDown(RIGHT_ARROW)){
//   paddle.x=paddle.x+5

// }
// if(keyIsDown(LEFT_ARROW)){
//   paddle.x=paddle.x-5
// }

paddle.x=World.mouseX
if(ball.isTouching(paddle)){
  ball.bounceOff(paddle)

}

if(keyDown("space")){
  serve();
  gameState="play"
  
}
if(ball.isTouching(wall1)|| (ball.isTouching(wall2))||(ball.isTouching(wall3))||(ball.isTouching(wall4))){
 // gameState="end"
 background("blue")
}
if(ball.isTouching(brick17)){
  brick17.shapeColor="yellow"
  ball.bounceOff(brick17)
  score=score+2
  


}
if(ball.isTouching(brick16)){
  brick16.shapeColor="yellow"
  ball.bounceOff(brick16)
  score=score+2
  


}
if(ball.isTouching(brick18)){
  brick18.shapeColor="yellow"
  ball.bounceOff(brick18)
  score=score+2
  


}
if(ball.isTouching(brick19)){
  brick19.shapeColor="yellow"
  ball.bounceOff(brick19)
  score=score+2
  


}
if(ball.isTouching(brick20)){
  brick20.shapeColor="yellow"
  ball.bounceOff(brick20)
  score=score+2
  


}
if(ball.isTouching(brick15)){
  brick15.shapeColor="yellow"
  ball.bounceOff(brick15)
  score=score+2
  


}
if(ball.isTouching(brick14)){
  brick14.shapeColor="yellow"
  ball.bounceOff(brick14)
  score=score+2
  


}
if(ball.isTouching(brick13)){
  brick13.shapeColor="yellow"
  ball.bounceOff(brick13)
  score=score+2
  


}
if(ball.isTouching(brick12)){
  brick12.shapeColor="yellow"
  ball.bounceOff(brick12)
  score=score+2
  


}
if(ball.isTouching(brick11)){
  brick11.shapeColor="yellow"
  ball.bounceOff(brick11)
  score=score+2
  


}
if(ball.isTouching(brick10)){
  brick10.shapeColor="yellow"
  ball.bounceOff(brick10)
  score=score+2
  


}
if(ball.isTouching(brick)){
  brick.shapeColor="yellow"
  ball.bounceOff(brick)
  score=score+2
  


}
if(ball.isTouching(brick2)){
  brick2.shapeColor="yellow"
  ball.bounceOff(brick2)
  score=score+2
  


}
if(ball.isTouching(brick3)){
  brick3.shapeColor="yellow"
  ball.bounceOff(brick3)
  score=score+2
  


}
if(ball.isTouching(brick4)){
  brick4.shapeColor="yellow"
  ball.bounceOff(brick4)
  score=score+2
  


}
if(ball.isTouching(brick5)){
  brick5.shapeColor="yellow"
  ball.bounceOff(brick5)
  score=score+2
  


}
if(ball.isTouching(brick6)){
  brick6.shapeColor="yellow"
  ball.bounceOff(brick6)
  score=score+2
  


}
if(ball.isTouching(brick7)){
  brick7.shapeColor="yellow"
  ball.bounceOff(brick7)
  score=score+2
  


}
if(ball.isTouching(brick8)){
  brick8.shapeColor="yellow"
  ball.bounceOff(brick8)
  score=score+2
  


} 
if(ball.isTouching(brick9)){
  brick9.shapeColor="yellow"
  ball.bounceOff(brick9)
  score=score+2
  


}


  
  drawSprites();
}
function gameplay(){
  paddle.x=World.mouseX;

  if(paddle.x <60)
  {
    padlle.x=60
  }
  if(paddle.x >340)
  {
    paddle.x=340
  }

 
}
function serve(){
  ball.velocityX=8
  ball.velocityY=6

  //if(gamestate=="serve"){
   // gamestate = "play";
   // ball.velocityY= -7
   // ball.velocityX= -7
 // }
}
//function reset()