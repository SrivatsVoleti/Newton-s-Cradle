const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var bobDiameter;
var roof;

function setup() {
	createCanvas(700,700);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	bobDiameter = 60; 
  roof = new Roof(350,200,300,25);
	bobObject1 = new Bob(350+bobDiameter*2,450,bobDiameter);
	bobObject2 = new Bob(350+bobDiameter*1,450,bobDiameter);
	bobObject3 = new Bob(350+bobDiameter*0,450,bobDiameter);
	bobObject4 = new Bob(350-bobDiameter*1,450,bobDiameter);
	bobObject5 = new Bob(350-bobDiameter*2,450,bobDiameter);
	rope1 = new Rope(bobObject1.body,roof.body,bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,bobDiameter*0,0);
  rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*1,0);
  rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*2,0);

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-165,y:60});
	}
  }