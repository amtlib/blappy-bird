class Bird{
    x = 64;
    y = height/2;
    gravity = .3;
    lift = -10;
    velocity = 0

    update(){
        this.velocity += this.gravity;

        this.y += this.velocity;

    }
    draw(){
        ellipse(this.x, this.y, 32, 32);
    }
    up(){
        this.velocity += this.lift;
    }
}