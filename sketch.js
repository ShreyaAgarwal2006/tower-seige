const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var base1,base2,base3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25,block26,block27,block28,block29;
var block30,block31,block32,block33,block34,block35,block36,block37,block38,block39,block4,block40,block41,block42,block43,block44;
var polygon;
var slingshot;
var polygon_image;

function preload() {

    polygon_image = loadImage("polygon.png");
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(this.polygon,{x:300,y:200});



    base1 = new Ground(600,780,1200,20)
    base2 = new Ground(600,500,200,10);
    base3 = new Ground(800,300,200,10);
   
    
    block1 = new RedBlock(600,480);
    block2 = new YellowBlock(620,480);
    block3 = new OrangeBlock(640,480);
    block4 = new RedBlock(660,480);
    block5 = new YellowBlock(680,480);
    block6 = new OrangeBlock(580,480);
    block7 = new YellowBlock(560,480);
    block8 = new RedBlock(540,480);
    block9 = new OrangeBlock(520,480);
    block10 = new YellowBlock(530,450);
    block11 = new OrangeBlock(550,450);
    block12 = new RedBlock(570,450);
    block13 = new YellowBlock(590,450);
    block14 = new OrangeBlock(610,450);
    block15 = new RedBlock(630,450);
    block16 = new YellowBlock(650,450);
    block17 = new OrangeBlock(670,450);
    //block18 = new RedBlock(680,420);
    block19 = new YellowBlock(560,420);
    block20 = new OrangeBlock(580,420);
    block21 = new RedBlock(600,420);
    block22 = new YellowBlock(620,420);
    block23 = new OrangeBlock(640,420);
    block24 = new RedBlock(580,400);
    block25 = new YellowBlock(600,400);
    block26 = new OrangeBlock(620,400);

    block27 = new PinkBlock(800,280)
    block28 = new GreenBlock(820,280);
    block29 = new BlueBlock(840,280);
    block30 = new PinkBlock(860,280);
    block31 = new GreenBlock(880,280);
    block32 = new BlueBlock(780,280);
    block33= new PinkBlock(760,280);
    block34= new GreenBlock(740,280);
    block35= new BlueBlock(720,280);
    block36= new PinkBlock(780,220);
    block37= new GreenBlock(760,250);
    block38= new BlueBlock(780,250);
    block39= new PinkBlock(800,250);
    block40= new GreenBlock(820,250);
    block41= new BlueBlock(840,250);
    block42 = new GreenBlock(800,220);
    block43 = new BlueBlock(820,220);
    block44 = new BlueBlock(800,190);




   
}

function draw(){
    background(198, 255, 253);
    Engine.update(engine);

    console.log(mouseX,mouseY);
   
    base1.display();
    base2.display();
    base3.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
   // block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    block26.display();

    block27.display();
    block28.display();
    block29.display();
    block30.display();
    block31.display();
    block32.display();
    block33.display();
    block34.display();
    block35.display();
    block36.display();
    block37.display();
    block38.display();
    block39.display();
    block40.display();
    block41.display();
    block42.display();
    block43.display();
    block44.display();

    imageMode(CENTER);
    image(polygon_image,polygon.position.x,polygon.position.y,40,40);

    slingshot.display();

    textSize(20)

    text("Drag the mousePointer to release the polygon to hit the blocks",400,100);


    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

