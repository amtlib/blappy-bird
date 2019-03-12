class Bird{
    x = 64;
    y = height/2;
    gravity = .3;
    lift = -10;
    velocity = 0
    size = 32

    update(){
        this.velocity += this.gravity;
        this.y += this.velocity;
    }
    draw(){
        fill(0);
        rect(this.x, this.y, this.size, this.size);
    }
    up(){
        this.velocity += this.lift;
    }
    dead(){
        return this.y >= height || this.y < -this.size
    }
}