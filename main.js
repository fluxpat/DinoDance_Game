const game = new Game();
let gameMode;
let font;
let color;
let disco;
let rock;
let rnb;

function preload() {
    font = loadFont("assets/FutilePro.ttf");
    game.preload();
}

function setup() {
    createCanvas(1400, 700);
    game.setup();
    gameMode = 0;
    color = 245;
}

function draw() {
    clear();
    game.draw();
    // HOME SCREEN and GAME SETTINGS...
    if (gameMode === 0) {
        textFont(font);
        textAlign(CENTER)
        fill(89, 89, 89);
        textSize(60)
        text("CHOOSE GAME MODE", width / 2 + 4, height / 2 + 4);
        fill(color, color, color);
        textSize(40)
        disco = text("Disco", width / 2 - 150 + 3, height / 2 + 80 + 3);
        rock = text("Rock", width / 2 + 3, height / 2 + 80 + 3);
        rnb = text("RnB", width / 2 + 150 + 3, height / 2 + 80 + 3);
        text("Easy", width / 2 - 150 + 3, height / 2 + 140 + 3);
        text("Med", width / 2 + 3, height / 2 + 140 + 3);
        text("HARD", width / 2 + 150 + 3, height / 2 + 140 + 3);
        fill(255, 200, 50);
        textSize(60)
        text("CHOOSE GAME MODE", width / 2, height / 2);
        textSize(40)
        text("Disco", width / 2 - 150, height / 2 + 80);
        text("Rock", width / 2, height / 2 + 80);
        text("RnB", width / 2 + 150, height / 2 + 80);
        text("Easy", width / 2 - 150, height / 2 + 140);
        text("Med", width / 2, height / 2 + 140);
        text("HARD", width / 2 + 150, height / 2 + 140);
    }
}

function keyPressed() {
    game.keyPressed()
}

function changeColor() {
    color = 89;
}

function mouseClicked() {
    if (gameMode === 0) {
        gameMode = 1;
    } else {
        gameMode =0;
    }
}