var dinosaurio, dino1
var piso,piso2


function preload(){
dino1 = loadAnimation("trex1.png","trex3.png","trex4.png")
piso2 = loadImage("ground2.png")


}






function setup(){
  createCanvas(600,200)
dinosaurio = createSprite(50,150,20,20)
dinosaurio.addAnimation("tRex corriendo",dino1)
dinosaurio.scale = 0.6

piso = createSprite(50,180,10,10)
piso.addImage("truco",piso2)
}

function draw(){


  background("white")
drawSprites()
piso.velocityX = -10
console.log("movimiento",piso.x)
if(piso.x < 0){
piso.x = piso.width/2



}





}


