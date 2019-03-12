let bird;
let pipes;

function setup() {
    createCanvas(480, 640);
    bird = new Bird();
    pipes = [];
    pipes.push(new Pipe(200));
    pipes.push(new Pipe(400));
    pipes.push(new Pipe(600));

    console.log(pipes)
}
function draw() {
    background(255);

    bird.update();
    pipes.map(pipe => pipe.update());
    let oldLen = pipes.length
    pipes = pipes.filter(pipe => !pipe.offscreen());
    if(oldLen > pipes.length) pipes.push(new Pipe(600));

    bird.draw();
    pipes.map(pipe => pipe.draw());
    console.log(pipes.length)
}
function keyPressed() {
    bird.up();
}