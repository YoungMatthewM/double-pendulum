var g = 9.8;
var dt = 0.1/20;

function DblPen() {
	this.l1 = 100;
	this.l2 = 100;
	this.m1 = 100;
	this.m2 = 100;
	this.theta1 = PI/2;
	this.theta2 = PI/2+random();
	this.w1 = 0;
	this.w2 = 0;
	this.dw1 = 0;
	this.dw2 = 0;
	this.x1 = this.l1*cos(this.theta1);
	this.y1 = this.l1*sin(this.theta1);
  this.x2 = this.x1+this.l2*cos(this.theta2);
	this.y2 = this.y1+this.l2*sin(this.theta2);
	
	this.update = function() {
    for(i=0; i<20;i++){
      this.dw1 = (-1*g*(2*this.m1+this.m2)*sin(this.theta1)-this.m2*g*sin(this.theta1-2*this.theta2)-2*sin(this.theta1-this.theta2)*this.m2*(sq(this.w2)*this.l2+sq(this.w1)*this.l1*cos(this.theta1-this.theta2)))/(this.l1*(2*this.m1+this.m2-this.m2*cos(2*this.theta1-2*this.theta2)));
			this.dw2 = (2*sin(this.theta1-this.theta2)*(sq(this.w1)*this.l1*(this.m1+this.m2)+g*(this.m1+this.m2)*cos(this.theta1)+sq(this.w2)*this.l2*this.m2*cos(this.theta1-this.theta2)))/(this.l2*(2*this.m1+this.m2-this.m2*cos(2*this.theta1-2*this.theta2)));
			this.w1 = this.w1 + this.dw1*dt;
			this.w2 = this.w2 + this.dw2*dt;
			this.theta1 = this.theta1 + this.w1*dt;
			this.theta2 = this.theta2 + this.w2*dt;
			this.x1 = this.l1*cos(this.theta1);
			this.y1 = this.l1*sin(this.theta1);
			this.x2 = this.x1+this.l2*cos(this.theta2);
			this.y2 = this.y1+this.l2*sin(this.theta2);
   }
	}
	
	this.display = function() {
		strokeWeight(1);
		stroke('black');
		line(0,0,this.x1,this.y1);
		stroke('black');		
		line(this.x1,this.y1,this.x2,this.y2);
		}
}