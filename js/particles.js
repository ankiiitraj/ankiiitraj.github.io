/*Smooth Scroll on clicking Nav Links*/
window.onscroll = function(){"use strict"; if(document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40 || e.classList.contains("open")){document.getElementById('nav').style['background-color'] = '#000000';}else{document.getElementById('nav').style.backgroundColor = '';} if(document.body.scrollTop >= 3*window.innerHeight || document.documentElement.scrollTop >= 3*window.innerHeight){let item = document.querySelectorAll('.active'); item[0].className = 'single';var items = document.querySelectorAll('.single'); items[3].className = 'active';}else if(document.body.scrollTop >= 2*window.innerHeight || document.documentElement.scrollTop >= 2*window.innerHeight){var item = document.querySelectorAll('.active'); item[0].className = 'single';var items = document.querySelectorAll('.single'); items[2].className = 'active';}else if(document.body.scrollTop >= 1*window.innerHeight || document.documentElement.scrollTop >= 1*window.innerHeight){var item = document.querySelectorAll('.active'); item[0].className = 'single';var items = document.querySelectorAll('.single'); items[1].className = 'active';}else{var item = document.querySelectorAll('.active'); item[0].className = 'single';var items = document.querySelectorAll('.single'); items[0].className = 'active';}}

/*Change Color of active links on Nav Bar*/
let tar = document.getElementById("target");let e = document.getElementById("toggle"); let nelem = document.getElementById("nav");
function active(a){let item = document.querySelectorAll('.active'); item[0].className = 'single'; a.className = 'active';
document.querySelector("#contact").scrollIntoView({behavior: "smooth"}); e.classList.remove("open"); tar.classList.add("nav-items"); tar.classList.remove("toggeled"); /*nelem.style.backgroundColor='';*/}

/*Changing Institune name*/
let text = ["IIIT Ranchi", "Indian Institute of Informaiton Technology Ranchi", "भारतीय सूचना प्रौद्योगिकी संस्थान रााँची"];
var counter = 1;var elem = document.getElementById("changeText");setInterval(change, 2500);function change(){elem.classList.add('hide');setTimeout(function () {elem.innerHTML = text[counter]; elem.classList.remove('hide'); counter++;if (counter >= text.length) {counter = 0;}}, 500);}

/*part of Changing color of NavBar from transparent to Black on scrool*/
function tog(e){if(!(e.classList.contains("open"))){e.classList.add("open"); tar.classList.remove("nav-items"); tar.classList.add("toggeled"); nelem.style['background-color'] = '#000000';} else{e.classList.remove("open"); tar.classList.add("nav-items"); tar.classList.remove("toggeled"); if(document.body.scrollTop < (window.innerHeight -500) && document.documentElement.scrollTop < (window.innerHeight -500)){ nelem.style.backgroundColor='';}}}

/*Particle Interaction Animation*/
var canvas = document.getElementById("canvas");
var pen = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
console.log(canvas.width, canvas.height);
var dots = [];

class dot{
	constructor()
	{
		this.x = Math.floor((Math.random())*window.innerWidth);
		this.y = Math.floor((Math.random())*window.innerHeight);
		this.xSpeed = (Math.random()*10 - 5);
		this.ySpeed = (Math.random()*10 - 5);
		this.colorR = Math.floor(Math.random()*225);
		this.colorB = Math.floor(Math.random()*225);
		this.colorG = Math.floor(Math.random()*225);
	}
	
	shape()
	{	
		pen.arc(this.x, this.y, 3, 0, 2*Math.PI);
		pen.fillStyle = 'rgb(' + this.colorR + ',' + this.colorB + ',' + this.colorG + ')';
		pen.fill();	
	}
	
	update()
	{
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		this.colorR = Math.random()*225;
		this.colorB = Math.random()*225;
		this.colorG = Math.random()*225;
	}
	check()
	{
		if(this.x <= 0 || this.x >= canvas.width)
			this.xSpeed = -this.xSpeed;
		else if(this.y >= canvas.height || this.y <= 0)
			this.ySpeed = -this.ySpeed;
	}
}


function mapThese(thisVal, thisMin, thisMax, thatMin, thatMax)
{
	return (((thisVal - thisMin)/((thisMax - thisMin))*(thatMax - thatMin)) + thatMin);
}


function interact()
{
	var count = 0;
	dots.sort((a, b) => a.x - b.x);
	for(var i = 0; i < dots.length; ++i){
        for(var j = i + 1;(j < dots.length && dots[j].x <= (dots[i].x + 150)); ++j){
            var distance = (dots[i].x-dots[j].x)*(dots[i].x-dots[j].x)+(dots[i].y-dots[j].y)*(dots[i].y-dots[j].y);
			count++;
            if(distance <= 150*150){
                let wt = mapThese(distance, 0, 22500, 0.4, 0);
				pen.beginPath();
				pen.moveTo(dots[i].x, dots[i].y);
				pen.lineTo(dots[j].x, dots[j].y);
				pen.lineWidth = wt;
                pen.strokeStyle = 'rgb(' + 225 + ',' + 225 + ',' + 225 + ')';
				pen.stroke();
            }
        }
    }
}

function setup()
{
	var numberOfParticles = Math.floor(mapThese(window.innerWidth, 350, 1400, 20, 70));
	for(var i = 0; i < numberOfParticles; ++i)
		dots.push(new dot());
	console.log(numberOfParticles);
}

function draw()
{
	var count = 0;
	for(var i = 0; i < dots.length; ++i)
	{
		if(dots[i].x < 0 || dots[i].x > canvas.width || dots[i].y < 0 || dots[i].y > canvas.height)
			count++;
	}
	pen.clearRect(0, 0, canvas.width, canvas.height);
	for(var i = 0; i < dots.length; ++i)
	{
		pen.beginPath();
		pen.moveTo(dots[i].x, dots[i].y);
		dots[i].shape();
	}
	interact();
	for(var i = 0; i < dots.length; ++i)
	{
		dots[i].update();
		dots[i].check();
	}
}
setup();
setInterval(draw, 45);
