
// let dots = [];
// var canvasDiv = document.getElementById('home');
// var w = canvasDiv.clientWidth - 10;
// var h = canvasDiv.clientHeight -10;

// function setup() {
//   var canvas = createCanvas(w, h);
//   canvas.parent('home');
//   var no_of_particles = map(windowWidth, 320, 1500, 20, 100)
//   console.log(no_of_particles);
//   for (let i = 0; i < no_of_particles; i++) {
//     dots.push(new dot());
//   }
// }

// function draw() {
//     clear();
//     for (let i = 0; i < dots.length; i++) {
//     dots[i].display();
//   }
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].check();
//   }
//   lined();
  
// }

// function lined()
// {
// //    let dict = [];
// //    for(var i = 0; i < dots.length; ++i){
// //    	var foo = {};
// //		foo = {'x': dots[i].x, 'y' : dots[i].y};
// //		dict.push(foo);
// //	}
// //	dots.sort((a, b) => a.x - b.x);
// //	for(var i = 0; i < dots.lenght; ++i){
// //		//var xsq = dots[i].x * dots[i].x;
// //		//var ysq = dots[i].y * dots[i].y;
// //        for(var j = i +1; j < dots.length; ++j){
// //			console.log("dots");
// //			var distance = dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
// //			let wt = map(distance, 0, 150, 1, 0);
// //			strokeWeight(wt);
// //			stroke(225);
// //			line(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
// //		}
// //    }
// 	var count = 0;
// 	dots.sort((a, b) => a.x - b.x)
// 	for(var i = 0; i < dots.length; ++i){
//         for(var j = i + 1;(j < dots.length && dots[j].x <= (dots[i].x +150)); ++j){
//             var distance = dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
// 			count++;
//             if(distance <= 150){
//                 let wt = map(distance, 0, 150, 1, 0);
//                 strokeWeight(wt);
//                 stroke(225);
//                 line(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
//             }
//         }
//     }
// //	var count1 = 0;
// //    for(var i = 0; i < dots.length; ++i){
// //        for(var j = i + 1; j < dots.length; ++j){
// //            var distance = dist(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
// //			count1++;
// //            if(distance <= 150){
// //                let wt = map(distance, 0, 150, 1, 0);
// //                strokeWeight(wt);
// //                stroke(225);
// //                line(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
// //            }
// //        }
// //    }
// //	console.log(count1);
// }


// class dot {
//   constructor() {
//     this.x = random(width);
//     this.y = random(height);
//     this.xSpeed = random(-1, 1);
//     this.ySpeed = random(0, 4);
//     this.colourR = random(0, 225);
//     this.colourB = random(0, 225);
//     this.colourG = random(0, 225);
//   }

//   display() {
//     fill(this.colourR, this.colourB, this.colourG);
//     ellipse(this.x, this.y, 3, 3);
//     this.x += this.xSpeed;
//     this.y += this.ySpeed;
//   }
//   check()
//   {
//     if(this.x > width || this.x < 0){
//       this.x = random(0, width);
//       this.y = random(-30, 0);
//     }
//     else if(this.y > height)
//     {
//       this.x = random(0, width);
//       this.y = random(-30, 0);
//     }
//   }
// }