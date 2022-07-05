var position;

var UP;
var DOWN;
var LEFT;
var RIGHT;

var r = 10
var moveSpeed = 3

var objects = []
var objectsCount = 10


function setup() {
  createCanvas(400, 400);

  UP = createVector(0, -1);
  DOWN = createVector(0, 1);
  LEFT = createVector(-1, 0);
  RIGHT = createVector(1, 0);
  
  position = createVector(200, 200)
  
  for(let i = 0; i < objectsCount; i++){
    objects.push({x: Math.floor(Math.random() * (width + 1)), y: Math.floor(Math.random() *           (height + 1)), r: 5})
  }
}

function draw() {
  background(220);
  
  translate(width / 2 - position.x , height / 2 - position.y)
  
  //draw objects
  fill(0, 255, 0)
  objects.forEach(object => {
    ellipse(object.x, object.y, object.r * 2)
  })
   
  //draw player
  fill(255,0,0)
  ellipse(position.x, position.y, r * 2)
  
  movement()
}

function movement() {
  var velocity = createVector(0, 0);
  
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    velocity.add(LEFT);
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    velocity.add(RIGHT);
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
    velocity.add(UP);
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    velocity.add(DOWN);
  }

  if (velocity.magSq() > 0) {
    velocity = velocity.normalize().mult(moveSpeed);
  }

  position.add(velocity);
}