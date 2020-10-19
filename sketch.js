//name spacing for matter.js modules
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

//animations
let walkingAnimation;

//images
let thunder1, thunder2, thunder3, thunder4;

//objects
let umbrella;
let dropArray = [];

//boolean
let thunderVisible = false;

let thunder_img;
let rand = random(0, 3);

var currentFrameCount;

function preload() {
   //preloads the assets
   walkingAnimation = loadAnimation('assets/walking_1.png', 'assets/walking_2.png', 'assets/walking_3.png', 'assets/walking_4.png', 'assets/walking_5.png', 'assets/walking_6.png', 'assets/walking_7.png', 'assets/walking_8.png');

   thunder1 = loadImage('assets/1.png');
   thunder2 = loadImage('assets/2.png');
   thunder3 = loadImage('assets/3.png');
   thunder4 = loadImage('assets/4.png');
}

function setup() {
   createCanvas(windowWidth, windowHeight);

   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(width/2, height-200, 110, walkingAnimation);

   let maxDrops = 100;

   for(let i=0; i<maxDrops; i++) {
      dropArray.push(new Drop(random(0, width), random(0, height), 8));
   }
}

function draw() {
   background(0);

   Engine.update(engine);

   for(var index in dropArray) {
      if(dropArray[index].body.position.y > height) {

         Matter.Body.setPosition(dropArray[index].body, {x:random(0, width), y:random(-100, 0)});
      }

      dropArray[index].display();
   }

   if(frameCount % 50 == 0) {
      print(currentFrameCount);
      currentFrameCount = frameCount;

      thunderVisible = true;

      let rand = Math.round(random(0, 3));

      switch (rand) {
         case 0: thunder_img = thunder1
         break;
         case 1: thunder_img = thunder2
         break;         
         case 2: thunder_img = thunder3
         break;
         case 3: thunder_img = thunder4
         break;

         default: thunder_img = thunder1
      }

   }

   if(thunderVisible == true) {

      image(thunder_img, width/2, -70, 300, 300);

      if(frameCount == currentFrameCount + 12) {
         thunderVisible=false;
      }
   }

   drawSprites();
}

function windowResized() {
   resizeCanvas(windowWidth, windowHeight); 
}