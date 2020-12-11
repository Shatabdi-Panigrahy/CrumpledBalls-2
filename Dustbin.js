class Dustbin{
	constructor(x,y){
		this.x=x;
		this.y=y;

		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbin.png")

		this.bBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.lwBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rwBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		
		World.add(world, this.bBody)
		World.add(world, this.lwBody)
		World.add(world, this.rwBody);

	}
	display(){
			var posB=this.bBody.position;
			var posL=this.lwBody.position;
			var posR=this.rwBody.position;

			push()
			translate(posL.x, posL.y);
			rectMode(CENTER)
			fill(255)
			rotate(this.angle)
			pop()

			push()
			translate(posR.x, posR.y);
			rectMode(CENTER)
			fill(255)
			rotate(-1*this.angle)
			pop()

			push()
			translate(posB.x, posB.y+10);
			rectMode(CENTER)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}

}