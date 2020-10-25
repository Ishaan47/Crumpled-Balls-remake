
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ball,ground,dustbin

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,380,800,20);
ball = new Paper(100,200,20)
dustbin1 = new Dustbin(610,290,10,150);
dustbin3 = new Dustbin(680,360,150,15);
dustbin2 = new Dustbin(750,290,10,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
 ball.display()
 dustbin1.display()
 dustbin2.display()
 dustbin3.display()
}

function keyPressed()
{
if(keyCode === UP_ARROW){
Matter.Body.applyForce(ball.body,ball.body.position,{x:85, y:100})	
}

}

