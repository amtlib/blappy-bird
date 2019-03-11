class Pipe{
    top = 25;
    bottom = 520;
    width = 80;
    x = 200;
    speed = 2;
    update(){
        this.x -= this.speed;
    }
    draw(){
        fill(0, 255, 0);
        rect(this.x, 0, this.width, this.top);
        rect(this.x, this.bottom, this.width, height - this.bottom)
    }
    
    offscreen(){
        return this.x + this.width < 0
    }
}