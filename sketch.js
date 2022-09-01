var girlImg, girl
var bgImg, bg
var athenaImg, athena
var nectarImg, nectar
var score = 0


function preload(){
girlImg = loadImage ("Images/girl_running.png")
bgImg = loadImage ("Images/greek_mythology_background.jpg")
athenaImg = loadImage ("Images/athena.png")
  
}

function setup() {

  createCanvas(1000,800)

  bg = createSprite (500,400,50,50)
  bg.addImage (bgImg)
  bg.scale = 1
  bg.velocityX = -2

  girl = createSprite (200,200,100,100)
  girl.addImage (girlImg)
  girl.scale = 0.5

  nectar = createSprite (900, Math.round(random(100,700)), 100, 100)
  //nectar.addImage (nectarImg)
  nectar.scale = 0.5
  nectar.velocityX = -3

}

function draw() {
  //set background color
  background("white");
  
  drawSprites ()

  textSize (30)
  fill ("black")
  text ("Score: " + score,100,100)
  
  if (girl.isTouching (nectar)) {
    score += 10
    nectar.destroy ()
      if (nectar.x < 220) {
        nectar.x = 900
        nectar.y = Math.round (random(100,700))
      }
  }

  
  if (bg.x < 500) {
    bg.x = 1000
  }

  if (keyDown (UP_ARROW)){
    girl.y = girl.y - 5
  }

  if (keyDown (DOWN_ARROW)){
    girl.y = girl.y + 5
  }
  
  Athena ()
}

function Athena () {
  
  if (frameCount % 150 == 0) {
    athena = createSprite (800,500,75,75)
    athena.addImage (athenaImg)
    athena.scale = 0.7
    athena.velocityX = -5
  }
}



