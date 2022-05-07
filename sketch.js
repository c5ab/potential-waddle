


var car
var carImg
var ground
var groundImg
var coinImg
var coin
var btn1
var score = 0
var btn2
var coin2Img
var coin2
var btn3
var btn4
var btn5
var btn6
function preload() {

  carImg = loadImage("car.png")
  groundImg = loadImage("ground.png")
  coinImg = loadImage("coin.png")
coin2Img = loadImage("coin.png")



}


function setup() {
  createCanvas(windowWidth, windowHeight)
  car = createSprite(60, 600, 20, 20)
  car.addImage(carImg)
  car.scale = 0.3

  ground = createSprite(600, 400, 50, 50)
  ground.addImage(groundImg)
  ground.scale = 1.9
  ground.velocityX = -0.5
  car = createSprite(60, 540, 20, 20)
  car.addImage(carImg)
  car.scale = 0.3
  btn1 = createButton("Reset")
  btn1.position(400, 400)
  btn1.scale = 0.09
  btn1.mouseClicked(move)

  btn2 = createButton("Score")
  btn2.position(400, 450)
  btn2.scale = 0.09
  btn2.mouseClicked(move2)
coin2 = createSprite(200,500,20,20)
coin2.addImage(coin2Img)

coin = createSprite(200, 500, 20, 20)
coin.addImage(coinImg)


btn3 = createButton("Up")
  btn3.position(390, 490)
  btn3.scale = 0.09
  btn3.mouseClicked(move6)

  btn4 = createButton("Down")
  btn4.position(380,530)
  btn4.scale = 0.09
  btn4.mouseClicked(move3)

  btn5 = createButton("Left")
  btn5.position(360,510)
  btn5.scale = 0.09
  btn5.mouseClicked(move4)

  btn6 = createButton("Right")
  btn6.position(410, 510)
  btn6.scale = 0.09
  btn6.mouseClicked(move5)
}




function draw() {
  background(51);



  drawSprites()

  if (keyIsDown(RIGHT_ARROW)) {
    car.velocityX += 0.5


  }

  if (keyIsDown(UP_ARROW)) {
    car.velocityY -= 0.5
  }
  if (frameCount % 100 === 0) {
    coin = createSprite(200, 500, 20, 20)
    coin.addImage(coinImg)
    coin.x = Math.round(random(1200, 0))
  }
  if (car.y < 400) {
    car.y = 540
  }
  if (keyIsDown(LEFT_ARROW)) {
    car.velocityX -= 0.5
  }
  if (keyIsDown(DOWN_ARROW)) {
    car.velocityY += 0.5
  }
  if (car.y > 600) {
    car.y = 540
  }
  if (ground.x < 350) {
    ground.x = 600
  }
  if (car.isTouching(coin2)||car.isTouching(coin)) {
    coin.visible = false
    score = score + 1
  }
}
function move() {
  window.location.reload()
}
function move2() {
  alert("score" +score)
}
function move3(){
 car.velocityY+=0.5
}
function move4(){
  car.velocityX-=0.5
}
function move5(){
  car.velocityX+= 0.5 
}
function move6(){
  car.velocityY-=0.5
}