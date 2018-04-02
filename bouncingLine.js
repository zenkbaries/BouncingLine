//
//  Canvas
//

//  Canvas Declaration
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var bgColor = "#000000";
var scrW = window.innerWidth;
var scrH = window.innerHeight;

// set canvas size
c.width = window.innerWidth;
c.height = window.innerHeight;

// Clear screen
ctx.clearRect(0, 0, c.width, c.height);


//
//   algorithm
//

//  Declaration

var lineColor = "#FFFFFF";
var lineSize = 5;
var dirX = 10;
var dirY = 10;

// // line class
// class lines {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     // this.x = Math.round(Math.random() * c.width);
//     // this.y = Math.round(Math.random() * c.height);
//   }
// }

function lines() {
  this.x = Math.round(Math.random() * c.width);
  this.y = Math.round(Math.random() * c.height);

}

// Initialize line
var line = new Lines;
// draw Lines

function drawLines(objLine) {
  // fade = (dR-dAge)/dR;
  // ctx.globalAlpha = fade;
  ctx.fillStyle = LineColor;
  ctx.beginPath();
  ctx.strokeStyle = LineColor;
  ctx.arc(objLine.x, objLine.y, lineSize, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  // ctx.globalAlpha = 1.0;
}

// draw - where animation is

function draw() {

  // fade/clear the canvas
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, c.width, c.height);

  if ((line.x <= 0) || (line.x >= scrW)) {
    dirX = dirX * -1;
  }

  if ((line.y <= 0) || (line.y >= scrH)) {
    dirY = dirY * -1;
  }

  line.x = line.x + dirX;
  line.y = line.y + dirY;

  drawLines(line);

  // add new Drops to array after delay
  // if (count >= 5) {
  //   //new raindrop
  //   drops.push(new Raindrops);
  //   count = 0;
  // }

  // draw each drops in array
  // for(var i=0; i < drops.length; i++) {
  //   drops[i].age += 1;
  //   eachDrop = drops[i];
  //   if (eachDrop.age >= eachDrop.r) {
  //     drops.splice(i,1);
  //   }
  //   // this next line needs refactoring
  //   drawRaindrop(eachDrop.x, eachDrop.y, eachDrop.r, eachDrop.age);
  // }
  // count += 1;

}



//
//   drawing
//



//
//  Animation
//

// Initalize the animationFrame
window.requestAnimFrame = (
  function() {
    return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
  }
)();

// animate function
function animate() {
  requestAnimFrame(animate);
  draw();
}

//start animation
animate();
