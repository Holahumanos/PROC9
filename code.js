var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["97ab9d95-6b5d-488f-ae3c-cb278093b30c","8b43802f-4687-41ae-a297-7c762cc3db51","abe7e2de-4377-4569-b8b4-53f7e05aaedb"],"propsByKey":{"97ab9d95-6b5d-488f-ae3c-cb278093b30c":{"name":"chicken","sourceUrl":"assets/v3/animations/s2D6HrVuFKjmODl5T9ZnazyVsfZ2zot1b3tlfbtRQPY/97ab9d95-6b5d-488f-ae3c-cb278093b30c.png","frameSize":{"x":426,"y":417},"frameCount":1,"looping":true,"frameDelay":4,"version":"4FtCu5xNllncCTVWFUgaCsPNI5qQBMb2","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":426,"y":417},"rootRelativePath":"assets/v3/animations/s2D6HrVuFKjmODl5T9ZnazyVsfZ2zot1b3tlfbtRQPY/97ab9d95-6b5d-488f-ae3c-cb278093b30c.png"},"8b43802f-4687-41ae-a297-7c762cc3db51":{"name":"b","sourceUrl":"assets/v3/animations/s2D6HrVuFKjmODl5T9ZnazyVsfZ2zot1b3tlfbtRQPY/8b43802f-4687-41ae-a297-7c762cc3db51.png","frameSize":{"x":382,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"HZPSZ4k7aqi9M117Bi5YQHAyPsGoH.Uq","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":400},"rootRelativePath":"assets/v3/animations/s2D6HrVuFKjmODl5T9ZnazyVsfZ2zot1b3tlfbtRQPY/8b43802f-4687-41ae-a297-7c762cc3db51.png"},"abe7e2de-4377-4569-b8b4-53f7e05aaedb":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL/category_vehicles/boxcar_09.png","frameSize":{"x":400,"y":288},"frameCount":1,"looping":true,"frameDelay":2,"version":"I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/I8q0KP5umrHURXRpLh9TF2Ipzvwsa7GL/category_vehicles/boxcar_09.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var b =createSprite(200,200);
b.setAnimation("b");
var chicken = createSprite(200,360,200,345);
chicken.shapeColor="red";

var car1 = createSprite(200,225,10,10);
car1.shapeColor="red";

var car2 = createSprite(200,150,10,10);
car2.shapeColor="red";

var car3 = createSprite(200,75,10,10);
car3.shapeColor="red";


var win = createSprite(200,5,200,20);
win.shapeColor="yellow";





car1.setAnimation("car");
car1.scale=0.2;
car2.setAnimation("car");
car2.scale=0.2;
car3.setAnimation("car");
car3.scale=0.2;

chicken.setAnimation("chicken");
chicken.scale=0.12;

car1.velocityX="7";
car2.velocityX="6";
car3.velocityX="5";




function draw() {
background("white");

createEdgeSprites();
car1.bounceOff(edges);
car2.bounceOff(edges);
car3.bounceOff(edges);
chicken.bounceOff(edges);


if(keyDown(UP_ARROW)){
  chicken.y=chicken.y-3;
}

if(keyDown(DOWN_ARROW)){
  chicken.y=chicken.y+3;
}

if(keyDown(LEFT_ARROW)){
  chicken.x=chicken.x-3;
}

if(keyDown(RIGHT_ARROW)){
  chicken.x=chicken.x+3;
}
if(chicken.isTouching(car1)|| chicken.isTouching(car2)|| chicken.isTouching(car3)){
  playSound("assets/category_board_games/card_fan_2.mp3");
  chicken.x=200;
  chicken.y=350;
}
if(chicken.isTouching(win)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  chicken.x=200;
  chicken.y=345;
}

  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
