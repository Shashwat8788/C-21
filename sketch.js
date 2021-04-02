var moveRec,fixRec;
var car,tower;
function setup() {
  createCanvas(windowWidth,windowHeight);
  fixRec = createSprite(400, 200, 50, 50);
  fixRec.shapeColor = "green";

  moveRec = createSprite(600, 200, 50, 100);
  moveRec.shapeColor = "green";

  car = createSprite(400,300,50,50);
  car.velocityX = 20;

  tower = createSprite(windowWidth-100,300,50,100);
}

function draw() {
  background(0);
  
  moveRec.x = World.mouseX;
  moveRec.y = World.mouseY;

  var k = moveRec.x-fixRec.x;
  
  collide(tower,car);

  if(isTouching(fixRec,moveRec)){
    moveRec.shapeColor = "blue";
    fixRec.shapeColor = "blue";
  }else {
    moveRec.shapeColor = "green";
    fixRec.shapeColor = "green";
  }

  //bounceOff();

  if(isTouching(tower,car)){
      textSize(50);
      fill("red");
      text("Car is touching the wall.",width/2,40);
  }

  console.log(k);

  drawSprites();
}