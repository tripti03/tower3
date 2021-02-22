const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20, box21, box22, box23, box24;
var shooter, shooterImg;
var platform1, platform2;
var slingShot;
var score = 0;

function preload() {
    shooterImg = loadImage("shooterOct3.png") 
}

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1000, 792.5, 2000, 15);
    platform1 = new Ground(950, 700, 500, 10);
    platform2 = new Ground(1400, 350, 500, 10)

    box1 = new Box(950, 660, 80, 80)
    box2 = new Box(870, 660, 80, 80)
    box3 = new Box(1030, 660, 80, 80)
    box4 = new Box(790, 660, 80, 80)
    box5 = new Box(1110, 660, 80, 80)
    box6 = new Box(825, 580, 80, 80)
    box7 = new Box(900, 580, 80, 80)
    box8 = new Box(975, 580, 80, 80)
    box9 = new Box(1050, 580, 80, 80)
    box10 = new Box(850, 500, 80, 80)
    box11 = new Box(930, 500, 80, 80)
    box12 = new Box(1010, 500, 80, 80)
    box13 = new Box(875, 420, 80, 80)
    box14 = new Box(955, 420, 80, 80)
    box15 = new Box(915,340, 80, 80)

    box16 = new Box(1400, 310, 80, 80)
    box17 = new Box(1320, 310, 80, 80)
    box18 = new Box(1480, 310, 80, 80)
    box19 = new Box(1240, 310, 80, 80)
    box20 = new Box(1560, 310, 80, 80)
    box21 = new Box(1320, 280, 80, 80)
    box22 = new Box(1400, 280, 80, 80)
    box23 = new Box(1480, 280, 80, 80)
    box24 = new Box(1400, 200, 80, 80)
    
    shooter = new Shooter(200, 650, 60, 60)
    
    
    
    slingshot = new SlingShot(shooter.body,{x:200, y:600});
}

function draw(){
    background(0)

    textSize(40)
    fill("blue")
    text("SCORE: "+score, 150, 100)
    textSize(25)
    text("Press the space bar for another chance !", 50, 50)

    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    platform1.display();
    platform2.display()

    //first pyramid

    fill("green")
    box1.display();
    box1.score()

    fill("red")
    box2.display();
    box2.score()

    fill("cyan")
    box3.display()
    box3.score()

    fill("yellow")
    box4.display()
    box4.score()

    fill("purple")
    box5.display()
    box5.score()

    fill("aqua")
    box6.display()
    box6.score()

    fill("pink")
    box7.display()
    box7.score()

    fill("maroon")
    box8.display()
    box8.score()

    fill("green")
    box9.display()
    box9.score()

    fill("red")
    box10.display()
    box10.score()

    fill("cyan")
    box11.display()
    box11.score()

    fill("yellow")
    box12.display()
    box12.score()

    fill("purple")
    box13.display()
    box13.score()

    fill("pink")
    box14.display()
    box14.score()

    fill("white")
    box15.display()
    box15.score()


    //second pyramid


    fill("yellow")
    box16.display()
    box16.score()

    fill("maroon")
    box17.display()
    box17.score()

    fill("purple")
    box18.display()
    box18.score()

    fill("white")
    box19.display()
    box19.score()

    fill("red")
    box20.display()
    box20.score()

    fill("green")
    box21.display()
    box21.score()

    fill("cyan")
    box22.display()
    box22.score()

    fill("orange")
    box23.display()
    box23.score()

    fill("blue")
    box24.display()
    box24.score()

    shooter.display()


    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(shooter.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(shooter.body);
    }
}