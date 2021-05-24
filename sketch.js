var fixrect,movingrect


function setup() {
  createCanvas(800,400);
 fixrect =  createSprite(400, 200, 70, 50);
movingrect = createSprite(600,200,30,20)
fixrect.shapeColor = "green"
movingrect.shapeColor = "green"
movingrect.debug = true
fixrect.debug = true
}

function draw() {

  background("black")  

  movingrect.x = mouseX
  movingrect.y = mouseY
 
 touch()

 
  drawSprites()
}

function touch(){

  if(movingrect.x-fixrect.x<fixrect.width/2 + movingrect.width/2&&
    fixrect.x-movingrect.x<fixrect.width/2 + movingrect.width/2
    && movingrect.y-fixrect.y<fixrect.height/2 + movingrect.height/2&&
    fixrect.y-movingrect.y<fixrect.height/2 + movingrect.height/2){
    fixrect.shapeColor = "red"
   movingrect.shapeColor = "red"
   }
   else {fixrect.shapeColor = "green"
   movingrect.shapeColor = "green"}


}

