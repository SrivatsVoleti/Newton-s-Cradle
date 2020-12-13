class Bob {
    constructor(x,y,diameter){
        var options = {
            isStatic:false,
            friction:0.5,
            density:1,
            restitution:1
        }
    
        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
        World.add(world, this.body);
    }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("magenta");
        ellipse(pos.x, pos.y,this.diameter,this.diameter);
      }
    };