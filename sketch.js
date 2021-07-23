var harry, harryLeft, harryRight, harryUp, harryDown;
var w1, w2, w3 , w4 , w5, w6 ,w7, w8, bg, bush, stand;
var hg;
var stand, standImg;
var cup , cupImg;
var bl, blImg, dm, dmImg, lm, lmImg, nm, nmImg, fg, fgImg, pp, ppImg;
var HP;
var edges;
var screen;
var screen2;
var lives = 2
var sound2;
var sound;

var gameState = "start"
function preload(){
bg = loadImage("images/b1.jpg")
bush = loadImage("images/g1.jpg")
hg = loadImage("images/hg.jpg")
standImg= loadImage("images/stand.jpg") 
cupImg = loadImage("images/cup.png")
harryLeft = loadAnimation("images/l1.png","images/l2.png","images/l3.png","images/l4.png","images/l5.png","images/l6.png","images/l7.png","images/l8.png","images/l9.png")
harryRight = loadAnimation("images/r1.png","images/r2.png","images/r3.png","images/r4.png","images/r5.png","images/r6.png","images/r7.png","images/r8.png","images/r9.png")
harryUp = loadAnimation("images/u1.png","images/u2.png","images/u3.png","images/u4.png","images/u5.png","images/u6.png","images/u7.png","images/u8.png","images/u9.png")
harryDown = loadAnimation("images/d1.png","images/d2.png","images/d3.png","images/d4.png","images/d5.png","images/d6.png","images/d7.png","images/d8.png","images/d9.png")

blImg = loadImage("images/bl.png")
nmImg = loadImage("images/nm.png")
lmImg = loadImage("images/lm.png")
ppImg = loadImage("images/pp.png")
screen2 = loadImage("images/screen2.png")

HP = loadSound("HP.mp3")
sound2 = loadSound("avada kedavra.mp3")
sound = loadSound("sound.wav")
screen = loadImage("images/screen.jpg")
}
function setup(){
createCanvas (800, 500)
edges = createEdgeSprites()
harry = createSprite(25,25,10,10)
harry.scale = 1.2
harry.setCollider("rectangle",0,0,30,50)
harry.addAnimation("hD",harryDown)
harry.addAnimation("hL",harryLeft)
harry.addAnimation("hR",harryRight)
harry.addAnimation("hU",harryUp)

w1 = createSprite(200,100,10, 200)
w1.addImage("b",bush)
w1.scale = 0.5


w2 = createSprite(250, 420, 10, 200)
w2.addImage("b",bush)
w2.scale = 0.5

w3 = createSprite(350, 100, 10, 200)
w3.addImage("b",bush)
w3.scale = 0.5

w4 = createSprite(400, 420, 10, 200)
w4.addImage("b",bush)
w4.scale = 0.5

w5 = createSprite(500, 100, 10 ,200)
w5.addImage("b",bush)
w5.scale = 0.5

w6 = createSprite(550, 420, 10, 200)
w6.addImage("b",bush)
w6.scale = 0.5

w7 = createSprite(650, 100, 10, 200)
w7.addImage("b",bush)
w7.scale = 0.5

w8 = createSprite(700, 420, 10, 200)
w8.addImage("b",bush)
w8.scale = 0.5

stand = createSprite(755, 256, 70,50)
stand.shapeColor = (0)

cup = createSprite(755, 210)
cup.addImage("c",cupImg)
cup.scale = 0.15

bl = createSprite(120, 60)
bl.addImage("b",blImg)
bl.scale = 0.25
bl.velocityY = 4
bl.setCollider("rectangle",0,0,bl.width-100, bl.height)

nm = createSprite(300,430)
nm.addImage("n",nmImg)
nm.scale = 0.25
nm.velocityY = -4.5
//nm.debug = true
nm.setCollider("rectangle",0,0,nm.width-230,nm.height)

lm = createSprite(440,80)
lm.addImage("l",lmImg)
lm.scale = 0.15
lm.velocityY = 5

pp = createSprite(600, 430)
pp.addImage("f",ppImg)
pp.scale = 0.2
pp.velocityY = -5.5
pp.setCollider("rectangle",0,0,pp.width-130, pp.height)

HP.loop()
HP.setVolume(0.07)
}

function draw(){
if(gameState==="start"){
    background(hg)
    fill("white")
    textSize(30)
    text("Triwizard Tournament", 230, 250)
    textSize(20)
    text("Press Space to start", 280, 350)
    
    if(keyCode===32){
        gameState = "play"
    }
}
if(gameState==="play"){    
    background(bg) 
    textSize(15)
    fill(255)
    text("Lives ❤: "+ lives,25, 450)
    if(keyDown(LEFT_ARROW)){
        harry.x = harry.x - 3
        harry.changeAnimation("hL",harryLeft)
    }
    if(keyDown(RIGHT_ARROW)){
        harry.x = harry.x + 3
        harry.changeAnimation("hR",harryRight)
    }
    if(keyDown(UP_ARROW)){
        harry.y = harry.y - 3
        harry.changeAnimation("hU",harryUp)
    }
    if(keyDown(DOWN_ARROW)){
        harry.y = harry.y + 3
        harry.changeAnimation("hD",harryDown)
    }

  if(harry.isTouching(bl)||
  harry.isTouching(nm)||
  harry.isTouching(lm)||
  harry.isTouching(pp)){
      lives = lives - 1
      harry.x = 25;
      harry.y = 25
  }
  if(lives<1){
      gameState = "over"
  }
  if(gameState==="over"){
      background(screen)
      bl.destroy()
      nm.destroy()
      lm.destroy()
      pp.destroy()
      w1.destroy()
      w2.destroy()
      w3.destroy()
      w4.destroy()
      w5.destroy()
      w6.destroy()
      w7.destroy()
      w8.destroy()
      cup.destroy()
      stand.destroy()
      harry.destroy()
      HP.stop()
      textSize(30)
      fill(255)
      text("YOU HAVE LOST THE GAME!!!",230, 380) 
      sound2.play()
  }
  if(harry.isTouching(cup)){
      gameState = "win"
  }
  if(gameState==="win"){
    background(screen2)
    bl.destroy()
    nm.destroy()
    lm.destroy()
    pp.destroy()
    w1.destroy()
    w2.destroy()
    w3.destroy()
    w4.destroy()
    w5.destroy()
    w6.destroy()
    w7.destroy()
    w8.destroy()
    cup.destroy()
    stand.destroy()
    harry.destroy()
    HP.stop()
    textSize(30)
    text("Congratulations!! You have saved Cedric!!",140, 300)
    sound.play()
    sound.setVolume(0.7)
  }
    
    harry.bounceOff(w1)
    harry.bounceOff(w2)
    harry.bounceOff(w3)
    harry.bounceOff(w4)
    harry.bounceOff(w5)
    harry.bounceOff(w6)
    harry.bounceOff(w7)
    harry.bounceOff(w8)
    harry.bounceOff(edges)

    bl.bounceOff(edges)
    nm.bounceOff(edges)
    lm.bounceOff(edges)
    pp.bounceOff(edges)

    drawSprites()
}
}
