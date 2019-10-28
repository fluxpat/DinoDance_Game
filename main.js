const game = new Game();
let font;

function preload() {
    font = loadFont("assets/FutilePro.ttf");
    game.preload();
}

function setup() {
    createCanvas(1400, 700);
    game.setup();
}

function draw() {
    game.draw();
}

function keyPressed() {
    
}

