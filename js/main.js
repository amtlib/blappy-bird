let bird

function setup(){
    createCanvas(480, 640);
    bird = new Bird();
}
function draw(){
    background(255);

    bird.update();

    bird.draw();
}
function keyPressed(){
    bird.up();
}