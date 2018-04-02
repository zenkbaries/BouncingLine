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
var dirX1 = 10;
var dirY1 = 10;
var dirX2 = -10;
var dirY2 = -10;


// // line class
// class lines {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     // this.x = Math.round(Math.random() * c.width);
//     // this.y = Math.round(Math.random() * c.height);
//   }
// }

function Lines() {
  this.x1 = Math.round(Math.random() * c.width);
  this.y1 = Math.round(Math.random() * c.height);
  this.x2 = Math.round(Math.random() * c.width);
  this.y2 = Math.round(Math.random() * c.height);

}

// Initialize line
var line = new Lines;
// draw Lines

function drawLines(objLine) {
  // fade = (dR-dAge)/dR;
  // ctx.globalAlpha = fade;
  ctx.fillStyle = lineColor;

  ctx.beginPath();
  ctx.moveTo(objLine.x1,objLine.y1);
  ctx.lineTo(objLine.x2,objLine.y2);
  ctx.strokeStyle = lineColor;
  ctx.stroke();
  ctx.closePath();

  // ctx.beginPath();
  // ctx.strokeStyle = lineColor;
  // ctx.arc(objLine.x1, objLine.y1, lineSize, 0, 2 * Math.PI);
  // ctx.arc(objLine.x2, objLine.y2, lineSize, 0, 2 * Math.PI);
  //
  // ctx.fill();
  // ctx.closePath();

  // ctx.globalAlpha = 1.0;
}

// draw - where animation is

function draw() {

  // fade/clear the canvas
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, c.width, c.height);

  if ((line.x1 <= 0) || (line.x1 >= scrW)) {
    dirX1 = dirX1 * -1;
  }

  if ((line.y1 <= 0) || (line.y1 >= scrH)) {
    dirY1 = dirY1 * -1;
  }

  if ((line.x2 <= 0) || (line.x2 >= scrW)) {
    dirX2 = dirX2 * -1;
  }

  if ((line.y2 <= 0) || (line.y2 >= scrH)) {
    dirY2 = dirY2 * -1;
  }

  line.x1 = line.x1 + dirX1;
  line.y1 = line.y1 + dirY1;
  line.x2 = line.x2 + dirX2;
  line.y2 = line.y2 + dirY2;

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
