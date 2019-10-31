game = new Game();
let gameScreen;
let gameSong = ""; // For when I implement more songs
let gameDifficulty = ""; // To choose the game difficulty
let font;
let color1 = '#f5f5f5';
let color2 = '#f5f5f5';
let color3 = '#f5f5f5';
let colorA = '#f5f5f5';
let colorB = '#f5f5f5';
let colorC = '#f5f5f5';
let color1a = '#ffc832';
let color2a = '#ffc832';
let color3a = '#ffc832';
let colorAa = '#ffc832';
let colorBa = '#ffc832';
let colorCa = '#ffc832';
let colorSTART = 245;
// Music Choice:
let musicDisco;
// Timing the game to establish ending:
let gameSeconds = 0;
let gameTimer;


function preload() {
    font = loadFont("assets/FutilePro.ttf");
    game.preload();
    musicDisco = loadSound('assets/Song1 Disco.wav');
}

function setup() {
    createCanvas(1400, 700);
    game.setup();
    gameScreen = "home";
}

function draw() {
    // console.log(gameSong, gameScreen, gameDifficulty) -------> Checking if the game settings are working properly
    clear();
    game.draw();
    // HOME SCREEN and GAME SETTINGS...
    if (gameScreen == "home") {
        textFont(font);
        textAlign(CENTER)
        fill(89, 89, 89);
        textSize(60)
        // SHADOWS
        text("CHOOSE GAME MODE", width / 2 + 4, 300 + 4);
        text("START", width / 2 + 4, 540 + 4);
        textSize(40)
        fill(color1);
        text("Disco", width / 2 - 150 + 3, 380 + 3);
        fill(color2);
        text("Rock", width / 2 + 3, 380 + 3);
        fill(color3);
        text("RnB", width / 2 + 150 + 3, 380 + 3);
        fill(colorA);
        text("Easy", width / 2 - 150 + 3, 450 + 3);
        fill(colorB);
        text("Med", width / 2 + 3, 450 + 3);
        fill(colorC);
        text("HARD", width / 2 + 150 + 3, 450 + 3);
        textSize(60)
        // FRONT TEXT
        fill(colorSTART);
        text("START", width / 2, 540);
        fill(255, 200, 50);
        text("CHOOSE GAME MODE", width / 2, 300);
        textSize(40)
        fill(color1a);
        text("Disco", width / 2 - 150, 380);
        fill(color2a);
        text("Rock", width / 2, 380);
        fill(color3a);
        text("RnB", width / 2 + 150, 380);
        fill(colorAa);
        text("Easy", width / 2 - 150, 450);
        fill(colorBa);
        text("Med", width / 2, 450);
        fill(colorCa);
        text("HARD", width / 2 + 150, 450);
    }
    // GAME OVER SCREEN...
    else if (gameScreen == "end") {
        textFont(font);
        textAlign(CENTER)
        fill(color1);
        textSize(50)
        text("Play Again?", width / 2, 500)
        fill(245, 245, 245);
        textSize(70)
        if (game.p1score > game.p2score) {
            text("Player 1 WINS!", width / 2, 400)
        } else if (game.p2score > game.p1score) {
            text("Player 2 WINS!", width / 2, 400)
        } else {
            text("IT'S A DRAW!", width / 2, 400)
        }
        // TURNING OFF THE FIRE MULTIPLIER ANIMATIONS
        this.game.fires.animateNoFire1();
        this.game.fires.animateNoFire2();
    }
    // MOUSE HOVERS:
    // Home Screen
    if (gameScreen === "home") {
        // Disco
        if (mouseX >= 493 && mouseX <= 598 && mouseY >= 352 && mouseY <= 380) {
            cursor('assets/Cursor/BlueCursor.cur');
            color1 = 89;
        }
        // Rock
        else if (mouseX >= 649 && mouseX <= 739 && mouseY >= 352 && mouseY <= 380) {
            cursor('assets/Cursor/BlueCursor.cur');
            color2 = 89;
        }
        // RnB
        else if (mouseX >= 809 && mouseX <= 877 && mouseY >= 352 && mouseY <= 380) {
            cursor('assets/Cursor/BlueCursor.cur');
            color3 = 89;
        }
        // EASY
        else if (mouseX >= 500 && mouseX <= 586 && mouseY >= 425 && mouseY <= 448) {
            cursor('assets/Cursor/BlueCursor.cur');
            colorA = 89;
        }
        // MED
        else if (mouseX >= 659 && mouseX <= 728 && mouseY >= 425 && mouseY <= 448) {
            cursor('assets/Cursor/BlueCursor.cur');
            colorB = 89;
        }
        // HARD
        else if (mouseX >= 796 && mouseX <= 892 && mouseY >= 425 && mouseY <= 448) {
            cursor('assets/Cursor/BlueCursor.cur');
            colorC = 89;
        }
        // START
        else if (mouseX >= 602 && mouseX <= 782 && mouseY >= 502 && mouseY <= 538) {
            cursor('assets/Cursor/BlueCursor.cur');
            colorSTART = 160;
        } else {
            cursor('assets/Cursor/GreenCursor.cur');
            color1 = 245;
            color2 = 245;
            color3 = 245;
            colorA = 245;
            colorB = 245;
            colorC = 245;
            colorSTART = 245;
        }
    }
    // Game Over screen
    if (gameScreen === "end") {
        // Play Again?
        if (mouseX >= 563 && mouseX <= 820 && mouseY >= 460 && mouseY <= 498) {
            cursor('assets/Cursor/BlueCursor.cur');
            color1 = 89;
        } else {
            cursor('assets/Cursor/GreenCursor.cur');
            color1 = 245;
        }
    }
    // Credit:
    textFont(font);
    textAlign(CENTER)
    fill(245);
    textSize(20)
    text("A game by Patrick Cho", width - 125, 20);
}

function keyPressed() {
    game.keyPressed()
}

function gameSecCounter() {
    gameSeconds += 1;
    if (gameSeconds == 32) {
        musicDisco.play();
    }
    if (gameSeconds == 64) {
        gameScreen = "end";
        musicDisco.stop();
        clearInterval(gameTimer);
        gameSeconds = 0;
    }
}

function mouseClicked() {
    // Starts the game ONLY when mouse is clicked on the START button
    if (gameScreen == "home") {
        if (gameSong === "disco" && mouseX >= 602 && mouseX <= 782 && mouseY >= 502 && mouseY <= 538) {
            gameScreen = "play";
            musicDisco.play();
            gameTimer = setInterval(gameSecCounter, 1000);
        }
        // CHOOSE YOUR SONG:
        // Disco
        if (mouseX >= 493 && mouseX <= 598 && mouseY >= 352 && mouseY <= 380) {
            gameSong = "disco"
            color1a = '#30b530';
            color2a = '#ffc832';
            color3a = '#ffc832';
        }
        // Rock
        // else if (mouseX >= 649 && mouseX <= 739 && mouseY >= 352 && mouseY <= 380) {
        //     gameSong = "rock"
        //     color1a = '#ffc832';
        //     color2a = '#30b530';
        //     color3a = '#ffc832';
        // }
        // RnB
        // else if (mouseX >= 809 && mouseX <= 877 && mouseY >= 352 && mouseY <= 380) {
        //     gameSong = "rnb"
        //     color1a = '#ffc832';
        //     color2a = '#ffc832';
        //     color3a = '#30b530';
        // }
        // CHOOSE YOUR DIFFICULTY:
        // EASY
        if (mouseX >= 500 && mouseX <= 586 && mouseY >= 425 && mouseY <= 448) {
            colorAa = '#ff8800';
            colorBa = '#ffc832';
            colorCa = '#ffc832';
            gameDifficulty = 'easy'
        }
        // MED
        else if (mouseX >= 659 && mouseX <= 728 && mouseY >= 425 && mouseY <= 448) {
            colorAa = '#ffc832';
            colorBa = '#ff8800';
            colorCa = '#ffc832';
            gameDifficulty = 'medium'
        }
        // HARD
        // else if (mouseX >= 796 && mouseX <= 892 && mouseY >= 425 && mouseY <= 448) {
        //     colorAa = '#ffc832';
        //     colorBa = '#ffc832';
        //     colorCa = '#ff8800';
        //     gameDifficulty = 'hard'
        // }
    }
    else if (gameScreen === "end") {
        if (mouseX >= 563 && mouseX <= 820 && mouseY >= 460 && mouseY <= 498) {
            gameScreen = "home";
            //    window.location.reload(); ---------> reloads the whole page. Last resort.
        }
    }
}
