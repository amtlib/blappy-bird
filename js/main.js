let bird;
let pipes;
let font, fontSize = 32;
let score;

function preload() {
    font = loadFont('../assets/fonts/PressStart2P-Regular.ttf');
}
function setup() {
    createCanvas(480, 640);

    score = 0;

    bird = new Bird();
    pipes = [];
    pipes.push(new Pipe(400));
    pipes.push(new Pipe(600));
    pipes.push(new Pipe(800));

    textFont(font);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
}
function draw() {
    background(255);

    bird.update();

    pipes.map(pipe => pipe.update());

    let oldLen = pipes.length
    pipes = pipes.filter(pipe => !pipe.offscreen());
    if (oldLen > pipes.length) pipes.push(new Pipe(520));

    pipes.map(pipe => pipe.draw());

    bird.draw();
    if (bird.dead()) {
        resetGame();
    }
    pipes.map(pipe => {
        if (pipe.hits(bird)) {
            resetGame();
            console.log('collision!');
        }

    });
    if(pipes[0].point(bird)) score++;
    text(score, width/2, 50)
}
function resetGame() {
    setup();
}
function keyPressed() {
    bird.up();
}