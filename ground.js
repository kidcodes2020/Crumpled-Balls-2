class ground{
    constructor(x,y,w,h)
    {
        var options={
            isStatic: true
        }

        this.body=Bodies.rectangle(x,y,w,h,options);
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }
    display()
    {
        var groundPos=this.body.position;

        push();
        translate(groundPos.x,groundPos.y);
        rectMode(CENTER);
        strokeWeight(4);
        rect(0,0,this.width,this.height);
        pop();
    }
}