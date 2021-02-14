const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Dus,paper,ground;
var bg;


function preload(){

bg= loadImage("crumpled ball.jpg");


}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});




paper=new Paper(100,600,70);
	
ground=new Ground(width / 2, 680, width, 30,);

Dus=new Dustbin(1200,500);

	Engine.run(engine);
  Render.run(render);
}

function draw() {      
  //background(bg);
 rectMode(CENTER);
 background("white");
  
  paper.display();
  ground.display();
Dus.display();
  

textSize(35);
stroke("pink");
strokeWeight(40);
fill("white");
 text("Crumpled Balls",600,100);
 
}
function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{ x: 158,y :-158});
    }
}