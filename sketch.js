var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground


var line1,line2,line3;


var package;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	
}

function setup() {


	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	
	var option={
       restitution:0.1,
	 
	   isStatic:true

	}

	var line={

          isStatic:false

	}


line1=new Line(width/2,630,200,20,line);
line1.shapeColor=color("red");

line2=new Line(510,610,20,100);

line3=new Line(310,610,20,100);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	
	packageBody = Bodies.circle(width/2 , 200 , 5 ,option);
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

 
  
  line1.display();
  line2.display();
  line3.display();


 
  drawSprites();

  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
	
    
  }
}



