
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeSprite,treeIMG;
var stoneSprite,stoneIMG;
var boySprite,boyIMG;
var mangoSprite,mangoIMG;
var mango2,mango3,mango4,mango5;
var ground;

function preload()
{
	treeIMG=loadImage("tree.png")
	stoneIMG=loadImage("stone.png")
	mangoIMG=loadImage("mango.png")
	boyIMG=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);

    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	treeSprite = createSprite(100,130,30,30);
	treeSprite.addImage(treeIMG);
	treeSprite.scale=0.6

	stoneSprite = createSprite(100,130,30,30);
	stoneSprite.addImage(stoneIMG);
	stoneSprite.scale=0.3

	var option={
		isStatic:false,
		restitution:0,
		friction:1,
		density:1.2
	}

	boySprite = createSprite(100,130,30,30);
	boySprite.addImage(boyIMG);
	boySprite.scale=0.3

	mangoSprite = createSprite(100,130,30,30);
	mangoSprite.addImage(mangoIMG);
	mangoSprite.scale=0.3

	mango2 = createSprite(100,130,30,30);
	mango2.addImage(mangoIMG);
	mango2.scale=0.3

	mango3 = createSprite(100,130,30,30);
	mango3.addImage(mangoIMG);
	mango3.scale=0.3

	mango4 = createSprite(100,130,30,30);
	mango4.addImage(mangoIMG);
	mango4.scale=0.3

	mango5 = createSprite(100,130,30,30);
	mango5.addImage(mangoIMG);
	mango5.scale=0.3

	var option={
		isStatic:true,
		restitution:0,
		friction:1,
	}

	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dectectcollision(stoneObj,mango)
  dectectcollision(stoneObj,mango2)
  dectectcollision(stoneObj,mango3)
  dectectcollision(stoneObj,mango4)
  dectectcollision(stoneObj,mango5)
  
  drawSprites();
 
}

function dectectcollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r)
 {
Matter.Body.setStatic(lmango.Body,false);
 }

}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObject.body, {x:235,y:420});
		launcherObject.attach(stoneObject.body);
		}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

mango.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();