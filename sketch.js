
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trashBin, waste, ground1;
var world;

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;
	waste= new paper(200,450,40);
	ground1= new ground(width/2,670,width,20);
	trashBin= new basket(1200,650);
	//Create the Bodies Here.

	/*var render= Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});*/

	Engine.run(engine);
    //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  waste.display();
  ground1.display();
  trashBin.display();

  keyPressed();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(waste.body,waste.body.position,{x:5,y:-5});
	}
}



