class Pipe {
    constructor(x){
        this.gap = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
        this.top = Math.floor(Math.random() * (200 - 25 + 1)) + 25;
        this.bottom = this.top + this.gap;
        this.width = 80;
        this.x = x;
        this.speed = 2;
    }

    update() {
        this.x -= this.speed;
    }
    draw() {
        fill(0, 255, 0);
        rect(this.x, 0, this.width, this.top);
        rect(this.x, this.bottom, this.width, height - this.bottom)
    }

    offscreen() {
        return this.x + this.width < 0
    }
}