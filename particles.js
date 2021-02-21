/*Particle Interaction Animation*/
var canvas = document.getElementById("canvas");
var pen = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
console.log(canvas.width, canvas.height);
var dots = [];

var maxDist = mapThese(window.innerWidth, 350, 1400, 150, 190), G = 100;
var colorCount = 0, fpms = 16;
var numberOfParticles, opacity = .5, painting = false;

class dot{
	constructor(x, y, xSpeed, ySpeed, mass, r, g, b, opacity){
		this.x = x, this.y = y, this.xSpeed = xSpeed, this.ySpeed = ySpeed, this.mass = mass;
		this.xAcc = this.yAcc = 0;
		this.R = r, this.G = g, this.B = b, this.opacity = opacity;
	}

	shape(){	
		pen.arc(this.x, this.y, Math.log10(this.mass), 0, 2*Math.PI);
		pen.fillStyle = `rgb(${this.R}, ${this.G}, ${this.B}, ${this.opacity})`;
		pen.fill();	
	}

	update(){
		this.xSpeed += this.xAcc;
		this.ySpeed += this.yAcc;
		this.x += this.xSpeed/(((1/fpms)*1000));
		this.y += this.ySpeed/(((1/fpms)*1000));
		this.opacity = opacity; 
	}

	check()
	{
		if(this.x <= 0){
			this.x = canvas.width -10;
			this.xSpeed /= 10;
		} else if( this.x >= canvas.width){
			this.x = 1;
			this.xSpeed /= 10;
		}
		if(this.y >= canvas.height){
			this.y = 1;
			this.ySpeed /= 10;
		} else if(this.y <= 0){
			this.y = canvas.height -10;
			this.ySpeed /= 10;
		}
	}
	
}


function mapThese(thisVal, thisMin, thisMax, thatMin, thatMax)
{
	return (((thisVal - thisMin)/((thisMax - thisMin))*(thatMax - thatMin)) + thatMin);
}

function setup()
{
	numberOfParticles = 17 || Math.floor(mapThese(window.innerWidth, 350, 1400, 20, 70));
	dots.push(new dot(canvas.width/2, canvas.height/4, 0, 0, 1000000000, 0, 0, 0, 0.5));
	dots.push(new dot(canvas.width/3, canvas.height/3, 20, 55, 20000000, 255, 186, 0, 0.5));
	dots.push(new dot(canvas.width/1.5, canvas.height/1.5, 0, -55, 20000000, 225, 225, 225, 0.5));
	for(var i = 0; i < numberOfParticles; ++i)
		dots.push(new dot(Math.random()*canvas.width +1, Math.random()*canvas.height +1, Math.random()*100 -50, Math.random()*100 -50,  Math.random()*30000 +10000, Math.random()*255,Math.random()*255, Math.random()*255));
	console.log(numberOfParticles);
	numberOfParticles = dots.length;
}

function calcGravityForce(m1, m2, d){
	return (G*m1*m2)/(Math.max(1000000000, d*d*1000000));
}

function interact(){
	for(var i = 1; i < numberOfParticles; ++i){
		dots[i].xAcc = dots[i].yAcc = 0;
		for(var j = 0; j < numberOfParticles; ++j){
			if(i != j){
				let dist = Math.sqrt(Math.pow((dots[i].x - dots[j].x), 2) + Math.pow((dots[i].y - dots[j].y), 2));
				let force = calcGravityForce(dots[i].mass, dots[j].mass, dist);
				dots[i].xAcc += (force*((dots[j].x - dots[i].x)/dist))/dots[i].mass;
				dots[i].yAcc += (force*((dots[j].y - dots[i].y)/dist))/dots[i].mass;
			}
		}
	}
}

function draw()
{
	colorCount++;
	var count = 0;
	for(var i = 0; i < dots.length; ++i)
	{
		if(dots[i].x < 0 || dots[i].x > canvas.width || dots[i].y < 0 || dots[i].y > canvas.height)
			count++;
	}
	if(!painting)
		pen.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < dots.length; ++i)
	{
		pen.beginPath();
		pen.moveTo(dots[i].x, dots[i].y);
		dots[i].shape();
	}
	
	for(var i = 0; i < dots.length; ++i)
	{
		dots[i].update();
		dots[i].check();
	}
	interact();	
}
setup();
setInterval(draw, fpms);