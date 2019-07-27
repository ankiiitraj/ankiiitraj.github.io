
let dots = []; // array of Jitter objects
var canvasDiv = document.getElementById('home');
var w = canvasDiv.clientWidth - 10;
var h = canvasDiv.clientHeight -10;

function setup() {
  var canvas = createCanvas(w, h);
  canvas.parent('home');
  var no_of_particles = map(windowWidth, 320, 1500, 20, 100)
  console.log(no_of_particles);
  for (let i = 0; i < no_of_particles; i++) {
    dots.push(new dot());
  }
}

function draw() {
    clear();
    for (let i = 0; i < dots.length; i++) {
    dots[i].display();
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].check();
  }
  lined();
  
}

function lined()
{
    for(var i = 0; i < dots.length; ++i){
        for(var j = i + 1; j < dots.length; ++j){
            var distance = dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
            if(distance <= 150){
                let wt = map(distance, 0, 150, 1, 0);
                strokeWeight(wt);
                stroke(225);
                line(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
            }
        }
    }
}


// Jitter class
class dot {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(0, 4);
    this.colourR = random(0, 225);
    this.colourB = random(0, 225);
    this.colourG = random(0, 225);
  }

  display() {
    fill(this.colourR, this.colourB, this.colourG);
    ellipse(this.x, this.y, 3, 3);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  check()
  {
    if(this.x > width || this.x < 0){
      this.x = random(0, width);
      this.y = random(-30, 0);
    }
    else if(this.y > height)
    {
      this.x = random(0, width);
      this.y = random(-30, 0);
    }
  }
}