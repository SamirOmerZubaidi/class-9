var ball
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,10,10);
}

function draw() 
{
  background(30);
  if(keyDown(UP_ARROW)){
ball.x+=0
ball.y-=2
  }
  if(keyDown(DOWN_ARROW)){
ball.x+=0
ball.y+=2
  }
  if(keyDown(LEFT_ARROW)){
ball.x-=2
ball.y+=0
  }
  if(keyDown(RIGHT_ARROW)){
ball.x+=2
ball.y+=0
  }
drawSprites()
}




