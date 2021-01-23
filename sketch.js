var rectm
var recf



function setup() {
  createCanvas(800,700);
  rectm=createSprite(200, 200,50, 50);
  rectf=createSprite(200,500,50,50);
}

function draw() {
  background(0);  
rectm.y=mouseY
rectm.x=mouseX

if (rectm.x-rectf.x < rectm.width/2 + rectf.width/2 && 
  rectf.x-rectm.x < rectf.width/2 + rectm.width/2 && 
  rectm.y-rectf.y < rectm.height/2 + rectf.height/2 &&
  rectf.y-rectm.y < rectm.height/2+ rectf.height/2){
rectm.shapeColor="red";
rectf.shapeColor="red";
}else {
  rectm.shapeColor="blue";
  rectf.shapeColor="blue";
}

/*if (rectm.y-rectf.y < rectm.height/2 + rectf.height/2 &&
  rectf.y-rectm.y < rectm.height/2+ rectf.height/2
){
rectm.velocityY=rectm.velocityY*(-1);
rectf.velocityY=rectf.velocityY*(-1);
}*/

  drawSprites();

}