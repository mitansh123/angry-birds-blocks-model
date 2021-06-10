const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(500,365,50,50);
    box2 = new Box(600,365,50,50);
    box3 = new Box(500,295,50,50);
    box4 = new Box(600,295,50,50);
    box5 = new Box(550,225,50,50);
   
    ground = new Ground(400,height,800,20);
    pig1 = new Pigs(550,370);
    pig2 = new Pigs(550,300);
    log1 = new Log(550,330,150,PI/2);
    log2 = new Log(550,260,150,PI/2);
    log3 = new Log(500,200,100,PI/7);
    log4 = new Log(600,200,100,-PI/7);

    bird = new Bird(100,100);
}
//180 degrees = PI radians
//90 degrees = PI/2 radians
function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();   
    ground.display();
    pig1.display();
    pig2.display();   
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}