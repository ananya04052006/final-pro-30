const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  base = new Ground(390, 250, 150, 10);
  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);
  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);
  box9 = new Box(390, 155, 30, 40);
  //polygon = new Polygon(100, 200, 20);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() {
  background(225);

  //noStroke();
  textSize(35);
  fill("black");
  text("Score: " + score, width-300, 50);

  //Engine.update(engine);
  base.display();
  box1.display();
  //console.log(box1);
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  //slingshot = ellipse(50, 200, 40, 40);
  slingshot.display();
  //polygon.display();
  ellipseMode(CENTER);
  circle(polygon.position.x, polygon.position.y, 20);
  
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(this.polygon);
  }
}