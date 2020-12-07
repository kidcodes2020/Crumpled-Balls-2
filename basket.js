class basket{
    constructor(x,y){
        var options={
            density:1.5,
            friction:1.0,
            isStatic:true
        }

        this.x=x;
        this.y=y;
        this.basketWidth=200;
        this.basketHeight=100;
        this.wallThickness=20;
        this.angle=0;
        this.Image=loadImage("dustbingreen.png");

        /*this.bottomBody=Bodies.rectangle(this.x,this.y,this.basketWidth,this.wallThickness,{isStatic:true});
        this.leftBody=Bodies.rectangle(this.x-this.basketWidth/2,this.y-this.basketHeight/2,this.wallThickness,this.basketHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftBody,this.angle);

        this.rightBody=Bodies.rectangle(this.x+this.basketWidth/2,this.y-this.basketHeight/2,this.wallThickness,this.basketHeight,{isStatic:true});
        Matter.Body.setAngle(this.rightBody,this.angle);*/

        this.body=Bodies.rectangle(this.x,this.y,this.basketWidth,this.basketHeight,options);
        World.add(world,this.body);
        /*World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);*/

    }
        display(){
            var pos=this.body.position;
            push();
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.Image,0,0,this.basketWidth,this.height);
            pop();
 
            /*var posBottom=this.bottomBody.position;
            var posLeft=this.leftBody.position;
            var posRight=this.rightBody.position;

           push();
           translate(posRight.x,posRight.y);
           imageMode(CENTER);
           image(this.Image,0,0,this.basketWidth,this.basketHeight);
           angleMode(RADIANS);
           fill("white");
           rotate(-1*this.angle);
           rect(0,0,this.wallThickness,this.basketHeight);
           pop();

           push();
           translate(posLeft.x,posLeft.y);
           rectMode(CENTER);
           strokeWeight(4);
           stroke("white");
           angleMode(RADIANS);
           fill("white");
           rotate(-1*this.angle);
           rect(0,0,this.wallThickness,this.basketHeight);
           pop();

           push();
           translate(posBottom.x,posBottom.y);
           rectMode(CENTER);
           strokeWeight(4);
           stroke("white");
           angleMode(RADIANS);
           fill("white");
           rect(0,0,this.basketWidth,this.wallThickness);
           pop();*/

        }
    
}