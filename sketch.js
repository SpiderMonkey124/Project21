var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
    loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(525, 580, 200, 30)
    block3.shapeColor = "red"

    block4 = createSprite(800, 580, 300, 30)

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY

    ball.velocityY = 6
    ball.velocityX = 6

}

function draw() {
    background(rgb(169,169,169));

    

    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    //write code to bounce off ball from the block1 
    if(ball.isTouching(block1) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
    }
    



    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        ball.velocityY = 0
        ball.velocityX = 0
    }
    


        if(ball.isTouching(block3)){
            ball.shapeColor = "red";
        }


            if(ball.isTouching(block4)){
                ball.shapeColor = "gray";
            }
        

    drawSprites();
}
