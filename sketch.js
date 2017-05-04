var tail = 500;

function setup() { 
  var canvas = createCanvas(410, 410);
  dp = new DblPen();
  pts = [];
  for(i=0;i<tail;i++){ //prepopulate pts array
    pts.push(createVector(dp.x2,dp.y2));
  }
} 

function draw() { 
  background(100);
	translate(205,205);
	rotate(PI/2);
  dp.update();
  pts.shift();
  pts.push(createVector(dp.x2,dp.y2));
  strokeWeight(2);
  colorMode(HSB,tail,100,100);
  noFill();
  //beginShape();
  for(i=1; i<tail; i++){
    stroke(i,100,100);
    line(pts[i-1].x,pts[i-1].y,pts[i].x,pts[i].y);
  }
  //endShape();
  dp.display();
  
		
}
