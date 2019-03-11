let bird;
let pipe;

function setup(){
    createCanvas(480, 640);
    bird = new Bird();
    pipe = new Pipe();
}
function draw(){
    background(255);

    bird.update();
    pipe.update();

    bird.draw();
    pipe.draw();
}
function keyPressed(){
    bird.up();
}