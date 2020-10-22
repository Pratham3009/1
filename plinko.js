class Plinkos{
    constructor(x,y,r){
        var options = {
            restitution = 0.4
        }

        this.r = 10;

      
        this.color = color(255);
        World.add(world, this.body);

    }
    display(){

        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);

    }
}    
