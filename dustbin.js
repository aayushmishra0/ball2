	/*class Dustbin{

		constructor(x,y,width,height)
	{
	var boxoptions={

	isStatic:true,
	restitution:0.3,
	friction:0.5,
	density:1.2


	}
			this.x=x;
			this.y=y;
			this.dustbinWidth=200;
			this.dustbinHeight=100;
			this.wallThickness=20;
			this.angle=0;	
			
			this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
			

			this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
			Matter.Body.setAngle(this.leftWallBody, this.angle);
			

			this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
			Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
			

			World.add(world, this.bottomBody)
			World.add(world, this.leftWallBody)
			World.add(world, this.rightWallBody);



		
	

	}

	display(){
		
	var pos =this.body.position;
	var angle=this.body.angle;
	push();
	translate(pos.x,pos.y);
	rotate(angle);
	rectMode(CENTER);
	stroke("white");
		fill("white");
		rect(0,0,this.width,this.height);
		pop();


	var posBottom=this.bottomBody.position;
	var posLeft=this.leftWallBody.position;
	var posRight=this.rightWallBody.position;



	push()
	translate(posLeft.x, posLeft.y);
	rectMode(CENTER)
	//strokeWeight(4);
	angleMode(RADIANS)
	fill(255)
	stroke(255)
	rotate(this.angle)
	rect(0,0,this.wallThickness, this.dustbinHeight);
	pop()


	push()
	translate(posRight.x, posRight.y);
	rectMode(CENTER)
	//strokeWeight(4);
	stroke(255)
	angleMode(RADIANS)
	fill(255)
	rotate(-1*this.angle)
	rect(0,0,this.wallThickness, this.dustbinHeight);
	pop()

	push()
	translate(posBottom.x, posBottom.y);
	rectMode(CENTER)
	//strokeWeight(4);
	stroke(255)
	angleMode(RADIANS)
	fill(255)
	rect(0,0,this.dustbinWidth, this.wallThickness);
	pop()



	}


	}*/

	class Dustbin
	{
		constructor(x,y)
		{
			this.x=x;
			this.y=y;
			this.dustbinWidth=250;
			this.dustbinHeight=150;
			this.wallThickness=20;
			this.angle=0;	
			this.image = loadImage("dustbin.png");
			//scale=0.3;
			this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
			this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
			Matter.Body.setAngle(this.leftWallBody, this.angle);
			

			this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
			Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
			World.add(world, this.bottomBody)
			World.add(world, this.leftWallBody)
			World.add(world, this.rightWallBody);
			
		} 
		display()
		{
				var posBottom=this.bottomBody.position;
				var posLeft=this.leftWallBody.position;
				var posRight=this.rightWallBody.position;

				

				push()
				translate(posLeft.x, posLeft.y);
				rectMode(CENTER)
				//strokeWeight(4);
				angleMode(RADIANS)
				fill(255)
				stroke(255)
				rotate(this.angle)
				rect(0,0,this.wallThickness, this.dustbinHeight);
			//	imageMode(CENTER);
			//image(this.image, 0, 0, this.width, this.height);
				pop()

				push()
				translate(posRight.x, posRight.y);
				rectMode(CENTER)
				//strokeWeight(4);
				stroke(255)
				angleMode(RADIANS)
				//imageMode(CENTER);
				fill(255)
				//image(this.image, 0, 0, this.width, this.height);
				rotate(-1*this.angle)
				rect(0,0,this.wallThickness, this.dustbinHeight);
				
				
				pop()

				push()
				translate(posBottom.x, posBottom.y);
				rectMode(CENTER)
				//strokeWeight(4);
				stroke(255)
				angleMode(RADIANS)
				fill(255)
				rect(0,0,this.dustbinWidth, this.wallThickness);
				imageMode(CENTER);
		image(this.image, 0, 0, this.width, this.height);
				pop()
				
		}

	}
