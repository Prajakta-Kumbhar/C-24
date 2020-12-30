class Log
{
    constructor(xpos,ypos,height,angle)
    {
       var log_options = {restitution:1, friction: 1.2, density: 1.2}
       this.log = Bodies.rectangle(xpos,ypos,20,height,log_options)
       Matter.Body.setAngle (this.log,angle)
       this.width = 20;
       this.height = height;
       World.add(world,this.log);
    }

    display()
    {
       var position = this.log.position;
       var angle = this.log.angle;

       push()

       translate(position.x,position.y);
       rotate(angle);
       rectMode(CENTER);
       stroke("brown");
       strokeWeight(4);
       rect(0,0,this.width,this.height);

       pop()
    }
}