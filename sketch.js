
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lines1
var lines2
var lines3
var paperobject
var ground1

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	lines1=new lines(240,600,20,140)
	lines1.shapeColor="red"
	lines2=new lines(350,700,200,20)
	lines2.shapeColor="red"
	lines3=new lines(450,600,20,140)
	lines3.shapeColor="red"

	paperobject=new paper(200,180,10)
	paperobject.shapeColor="white"

	ground1=new ground(350,350,30,700)
	ground1.shapeColor="yellow"
	
}


function draw() {
  rectMode(CENTER);
  background("black");
  lines1.display();
  lines2.display();
  lines3.display();
  paperobject.display();
  ground1.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});
	
	 }
   }



