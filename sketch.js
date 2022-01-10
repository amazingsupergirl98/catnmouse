var bgImg; 
var cat;
var mouse;

function preload() {
    bgImage= loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png")
    catimg3= loadAnimation("images/cat3.png")
    catimg4= loadAnimation("images/cat4.png")
    mouseimg2 = loadAnimation("images/mouse2.png")
    mouseimg3 = loadAnimation("images/mouse3.png")
    mouseimg4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat= createSprite(870,800);
    cat.addAnimation(catimg1)
    cat.scale = 0.2

    mouse= createSprite(570,500)
    mouse.addAnimation( mouseimg2)
    mouse.scale= 0.1



}

function draw() {

    background(background);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x< (cat.width-mouse.width)/2)
    {
        cat.velocityX= 0
        cat.addAnimation(catimg4,catimg3)
        cat.changeAnimation(catimg4)
        cat.x = 300
        cat.scale= 0.2
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation(mouseimg3,mouseimg2)
      mouse.changeAnimation(mouseimg3)
      mouse.frameDelay= 25;
  }

}
