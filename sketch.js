
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo, c1, c2, bola

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	solo=new Solo(400,690,800,30)
	c1=new Cesta(650,635,10,80)
	c2=new Cesta(520,635,10,80)
	bola=new Bola(100,580,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  solo.criar()
  c1.criar()
  c2.criar()
  bola.criar()
  
  drawSprites();
 
}
function keyPressed(){
    if(keyCode==32){
        forca()
    }
}

function forca(){
    Body.applyForce(bola.body,{x:0,y:0}, {x:0,y:-0.11})
	Body.applyForce(bola.body,{x:0,y:0}, {x:0.1,y:0})
}
