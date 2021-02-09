var canvas;
var music;
var b1, b2, b3, b4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);

    b1 = createSprite(90, 580, 180, 70);
    b1.shapeColor = "green";

    b2 = createSprite(285, 580, 180, 70);
    b2.shapeColor = "orange";

    b3 = createSprite(490, 580, 190, 70);
    b3.shapeColor = "blue";

    b4 = createSprite(700, 580, 200, 70);
    b4.shapeColor = "red";

    box = createSprite(random(20,750),200,50,50);
    box.shapeColor = "white";


} 

function draw() {
    background(rgb(169,169,169));
    
    createEdgeSprites();

    if(box.isTouching(b1) && box.bounceOff(b1)){
        box.shapeColor = "green";
    }

    if(b3.isTouching(box) && box.bounceOff(b3)){
        box.shapeColor = "blue";
    }

    if(b4.isTouching(box) && box.bounceOff(b4)){
        box.shapeColor = "red";
    }

    if(b2.isTouching(box)) {
        box.shapeColor = "orange";
        box.velocityX = 0;
        music.stop();
    }
    

    box.velocityX = -3;
    box.velocityY = 3;


   drawSprites();
}
