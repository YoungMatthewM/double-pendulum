var g = 9.8;
var dt = 0.02;

function DblPen() {
	var l1 = 100;
	var l2 = 100;
	var m1 = 100;
	var m2 = 100;
	this.theta1 = PI/2;
	this.theta2 = PI/2+random();
	this.w1 = 0;
	this.w2 = 0;
	this.dw1 = 0;
	this.dw2 = 0;
	this.x1 = l1*cos(this.theta1);
	this.y1 = l1*sin(this.theta1);
  this.x2 = this.x1+l2*cos(this.theta2);
	this.y2 = this.y1+l2*sin(this.theta2);
  this.f = [];
  this.f[0] = function(a,b,c,d){return c;}
  this.f[1] = function(a,b,c,d){return d;}
  this.f[2] = function(a,b,c,d){return (-1*g*(2*m1+m2)*sin(a)-m2*g*sin(a-2*b)-2*sin(a-b)*m2*(sq(d)*l2+sq(c)*l1*cos(a-b)))/(l1*(2*m1+m2-m2*cos(2*a-2*b)))};
  this.f[3] = function(a,b,c,d){return (2*sin(a-b)*(sq(c)*l1*(m1+m2)+g*(m1+m2)*cos(a)+sq(d)*l2*m2*cos(a-b)))/(l2*(2*m1+m2-m2*cos(2*a-2*b)))};
	this.X = [this.theta1,this.theta2,this.w1,this.w2];
  
	this.update = function() {
      /**     
      this.dw1 = (-1*g*(2*this.m1+this.m2)*sin(this.theta1)-this.m2*g*sin(this.theta1-2*this.theta2)-2*sin(this.theta1-this.theta2)*this.m2*(sq(this.w2)*l2+sq(this.w1)*l1*cos(this.theta1-this.theta2)))/(l1*(2*this.m1+this.m2-this.m2*cos(2*this.theta1-2*this.theta2)));
			this.dw2 = (2*sin(this.theta1-this.theta2)*(sq(this.w1)*l1*(this.m1+this.m2)+g*(this.m1+this.m2)*cos(this.theta1)+sq(this.w2)*l2*this.m2*cos(this.theta1-this.theta2)))/(l2*(2*this.m1+this.m2-this.m2*cos(2*this.theta1-2*this.theta2)));
			this.w1 = this.w1 + this.dw1*dt;
			this.w2 = this.w2 + this.dw2*dt;
			this.theta1 = this.theta1 + this.w1*dt;
			this.theta2 = this.theta2 + this.w2*dt;
      **/
      for( var i = 0;i<5;i++){
      	this.X = RK4(this.f, this.X, dt);
      }
			this.x1 = l1*cos(this.X[0]);
			this.y1 = l1*sin(this.X[0]);
			this.x2 = this.x1+l2*cos(this.X[1]);
			this.y2 = this.y1+l2*sin(this.X[1]);
      
   
	}
	
	this.display = function() {
		strokeWeight(1);
		stroke('black');
		line(0,0,this.x1,this.y1);
		stroke('black');		
		line(this.x1,this.y1,this.x2,this.y2);
		}
}