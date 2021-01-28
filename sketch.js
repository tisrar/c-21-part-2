var canvas;
var music
var box1,box2,box3, box4; 
var bb

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
createCanvas(800,600)

    //create 4 different surfaces
    box1 = createSprite(100,550,200,30);
    box2 = createSprite(300,550,200,30);
    box3 = createSprite(500,550,200,30);
    box4 = createSprite(700,550,200,30);
    box1.shapeColor = "yellow"
    box2.shapeColor = "green"
    box3.shapeColor = "blue"
    box4.shapeColor = "orange"

    //create box sprite and give velocity
    bb = createSprite(400,550,50,50)
    bb.velocityX = 6
    bb.velocityY = -7
   
}

function draw() {
    background("red");
    //create edgeSprite
    edges = createEdgeSprites();

    bb.bounceOff(edges);

    if(box1.isTouching(bb) && bb.bounceOff(box1)){
        bb.shapeColor = "yellow"; 
        music.play();
    }

    if(box2.isTouching(bb) && bb.bounceOff(box2)){
        bb.shapeColor = "green"; 
        music.stop();
       
    }

    if(box3.isTouching(bb) && bb.bounceOff(box3)){
        bb.shapeColor = "blue"; 
        music.play();
    }

    if(box4.isTouching(bb) && bb.bounceOff(box4)){
        bb.shapeColor = "orange"; 
        music.stop(); 
    }




  

    drawSprites();
  

}
