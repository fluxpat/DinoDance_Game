class Game {
    constructor() {
        /* Giving the game its attributes: */
        // BACKGROUND SETTING
        this.background = new Background();
        // FOREGROUND SETTING + TEXT
        this.foreground = new Foreground();
        // CHARACTERS
        this.player = new Player(0.18);
        this.player2 = new Player2(0.18);
        // ITEMS & KEYS
        this.items = new Items();
        // FRUITS GENERATION
        this.fruitsArr = [];
        // Counters:
        this.counter = 0;
        this.p1score = 0;
        this.p2score = 0;
        this.p1streak = 0;
        this.p2streak = 0;
    }

    preload() {
        this.background.preload();
        this.foreground.preload();
        this.player.preload();
        this.player2.preload();
        this.items.preload();
    }

    setup() {
        this.player.setup();
        this.player2.setup();
        // Establish a counter / metronome
        setInterval(this.timeIt, 250);
    }

    draw() {
        // console.log(this.fruitsArr);
        // console.log(frameRate())
        this.background.draw();
        // Remove fruit when they leave the screen
        // AND reset players' Streak combos if they lose a fruit
        if (gameScreen == "play") {
            this.fruitsArr.forEach(
                (fruit, index) => {
                    fruit.draw();
                    if (fruit.playerID === 2 && fruit.y > 650) {
                        this.fruitsArr.splice(index, 1);
                        this.p2streak = 0;
                    }
                    if (fruit.playerID === 1 && fruit.y > 650) {
                        this.fruitsArr.splice(index, 1);
                        this.p1streak = 0;
                    }
                }
            )
        } else { this.fruitsArr = [] }
        this.foreground.draw();
        this.player.draw();
        this.player.animation();
        this.player2.draw();
        this.player2.animation();
        this.items.draw();
        // Exit settings:
        textFont(font);
        textSize(20)
        textAlign(LEFT)
        fill(255, 200, 50);
        text("Press ESC to exit game", 20, 30);
        // SCORING SYSTEM:
        textFont(font);
        textSize(60)
        textAlign(CENTER)
        fill(150, 75, 0);
        text(this.p1score, 153, 343);
        fill(245, 245, 245);
        text(this.p1score, 150, 340);
        fill(150, 75, 0);
        text(this.p2score, width - 147, 343);
        fill(245, 245, 245);
        text(this.p2score, width - 150, 340);
        // STREAK BONUS SYSTEM:
        textFont(font);
        textSize(30)
        textAlign(CENTER)
        fill(150, 75, 0);
        text(game.p1streak, 113, 673);
        fill(245, 245, 245);
        text(game.p1streak, 110, 670);
        fill(150, 75, 0);
        text(game.p2streak, width - 107, 673);
        fill(245, 245, 245);
        text(game.p2streak, width - 110, 670);
        // 
    }

    keyPressed() {
        /* --------------------------------------If you press ESC quit game to home screen-------------------------------------- */
        if (keyIsDown(27)) {
            gameScreen = "home";
            musicDisco.stop();
            clearInterval(gameTimer);
            gameSeconds = 0;
        }
        this.fruitsArr.forEach(
            (fruit, index) => {
                // PLAYER 1's key presses for fruits
                if (fruit.playerID === 1) {
                    if (keyIsDown(81) && fruit.type === 'banana') {
                        if (fruit.y > 590 && fruit.y < 610) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p1score += 20;
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p1score += 15;
                            } else { // GOOD HIT
                                this.p1score += 10;
                            }
                            this.p1streak++;
                            this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                        }
                    }
                    if (keyIsDown(87) && fruit.type === 'grapes') {
                        if (fruit.y > 590 && fruit.y < 610) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p1score += 20;
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p1score += 15;
                            } else { // GOOD HIT
                                this.p1score += 10;
                            }
                            this.p1streak++;
                            this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                        }
                    }
                    if (keyIsDown(69) && fruit.type === 'aubergine') {
                        if (fruit.y > 590 && fruit.y < 610) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p1score += 20;
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p1score += 15;
                            } else { // GOOD HIT
                                this.p1score += 10;
                            }
                            this.p1streak++;
                            this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                        }
                    }
                    if (keyIsDown(82) && fruit.type === 'apple') {
                        if (fruit.y > 590 && fruit.y < 610) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p1score += 20;
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p1score += 15;
                            } else { // GOOD HIT
                                this.p1score += 10;
                            }
                            this.p1streak++;
                            this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                        }
                    }
                }
                // PLAYER 2's key presses for fruit
                else if (fruit.playerID === 2) {
                    if (keyIsDown(85) && fruit.type === 'banana') {
                        if (fruit.y > 590 && fruit.y < 610) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p2score += 20;
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p2score += 15;
                            } else { // GOOD HIT
                                this.p2score += 10;
                            }
                            this.p2streak++;
                            this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                        }
                    }
                    if (keyIsDown(73) && fruit.type === 'grapes') {
                        if (fruit.y > 590 && fruit.y < 610) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p2score += 20;
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p2score += 15;
                            } else { // GOOD HIT
                                this.p2score += 10;
                            }
                            this.p2streak++;
                            this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                        }
                    }
                    if (keyIsDown(79) && fruit.type === 'aubergine') {
                        if (fruit.y > 590 && fruit.y < 610) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p2score += 20;
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p2score += 15;
                            } else { // GOOD HIT
                                this.p2score += 10;
                            }
                            this.p2streak++;
                            this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                        }
                    }
                    if (keyIsDown(80) && fruit.type === 'apple') {
                        if (fruit.y > 590 && fruit.y < 610) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p2score += 20;
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p2score += 15;
                            } else { // GOOD HIT
                                this.p2score += 10;
                            }
                            this.p2streak++;
                            this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                        }
                    }
                }
            }
        )
    }

    timeIt = () => { // CHOOSES THE SOUND TRACK AND DIFFICULTY BASED ON "gameSong" and "gameDifficulty"
        if (gameDifficulty == "easy") {
            // Pushing fruits into array based on sheet music:
            if (timesDiscoEasy[this.counter].includes('ban')) {
                this.fruitsArr.push(new banana(1));
                this.fruitsArr.push(new banana(2));
            }
            if (timesDiscoEasy[this.counter].includes('gra')) {
                this.fruitsArr.push(new grapes(1));
                this.fruitsArr.push(new grapes(2));
            }
            if (timesDiscoEasy[this.counter].includes('aub')) {
                this.fruitsArr.push(new aubergine(1));
                this.fruitsArr.push(new aubergine(2));
            }
            if (timesDiscoEasy[this.counter].includes('app')) {
                this.fruitsArr.push(new apple(1));
                this.fruitsArr.push(new apple(2));
            }
            if (gameScreen == "play") {
                this.counter = (this.counter + 1) % timesDiscoEasy.length;
            } else { this.counter = 0 }
        }
        if (gameDifficulty == "medium") {
            // Pushing fruits into array based on sheet music:
            if (timesDiscoMedium[this.counter].includes('ban')) {
                this.fruitsArr.push(new banana(1));
                this.fruitsArr.push(new banana(2));
            }
            if (timesDiscoMedium[this.counter].includes('gra')) {
                this.fruitsArr.push(new grapes(1));
                this.fruitsArr.push(new grapes(2));
            }
            if (timesDiscoMedium[this.counter].includes('aub')) {
                this.fruitsArr.push(new aubergine(1));
                this.fruitsArr.push(new aubergine(2));
            }
            if (timesDiscoMedium[this.counter].includes('app')) {
                this.fruitsArr.push(new apple(1));
                this.fruitsArr.push(new apple(2));
            }
            this.counter = (this.counter + 1) % timesDiscoMedium.length;
        }
    }
}

// Game Fruit Generation:

const timesDiscoEasy = [ // Essentially my music score here where each element of the parent array is a quaver (half a beat (1/4 of a second))
    /* Wait 8 beats before rendering any fruits to allow for first group to fall and player to get ready */
    ['app'], [], [], [],
    ['app'], [], [], [],
    ['app'], [], [], [],
    ['app'], [], [], [], // 8 beats ends here (4 seconds)
    ["ban"], [], [], [],
    ["ban"], [], [], [],
    ["ban"], [], [], [],
    ["ban"], [], [], [],
    // ------------------- 8 seconds
    ["ban"], [], ["ban"], [],
    [], [], [], [],
    ['gra'], [], ['gra'], [],
    [], [], [], [],
    [], [], ['aub'], [],
    [], [], ['aub'], [],
    ["ban"], [], [], [],
    ["ban"], [], ['aub'], [],
    // ------------------- 16 seconds
    ["app"], [], [], [],
    ['gra'], [], [], [],
    ["app"], [], [], [],
    ['gra'], [], [], [],
    ["ban"], [], ['grape'], [],
    ["aub"], [], ['app'], [],
    ["ban"], [], ['grape'], [],
    ["aub"], [], ['app'], [],
    // ------------------- 24 seconds
    ["app"], [], ["app"], [],
    [], [], [], [],
    ['aub'], [], ['aub'], [],
    [], [], [], [],
    ["ban"], [], [], [],
    ["ban"], [], [], [],
    [], [], ['aub'], [],
    [], [], ['aub'], ['app'],
    // ------------------- 32 seconds
]

const timesDiscoMedium = [ // Essentially my music score here where each element of the parent array is a quaver (half a beat (1/4 of a second))
    /* Wait 8 beats before rendering any fruits to allow for first group to fall and player to get ready */
    ["ban"], [], [], [],
    ["gra"], [], [], [],
    ["aub"], [], [], [],
    ["app"], [], [], [], // 8 beats ends here (4 seconds)
    ["ban"], [], [], [],
    ["gra"], [], [], [],
    ["aub"], [], [], [],
    ["app"], [], [], [],
    // ------------------- 8 seconds
    ["ban"], [], ["ban"], [],
    [], [], ["ban"], [],
    ['gra'], [], ['gra'], [],
    [], [], ['gra'], [],
    ["ban"], [], ['aub'], [],
    ["ban"], ['aub'], ['aub'], [],
    ["ban"], [], ['aub'], [],
    ["ban"], ['aub'], ['aub'], [],
    // ------------------- 16 seconds
    ["ban"], [], ["ban", 'aub'], [],
    ['gra'], [], ["ban"], [],
    ["ban"], [], ["ban", 'aub'], [],
    ['gra'], [], ["ban"], [],
    ["ban"], ['app'], [], ['gra', 'aub'],
    ["ban"], ['app'], ['gra', 'aub'], [],
    ["ban"], ['app'], [], ['gra', 'aub'],
    ["ban"], ['app'], ['gra', 'aub'], [],
    // ------------------- 24 seconds
    ["ban"], [], ["ban"], [],
    [], [], ["ban"], [],
    ['gra'], [], ['gra'], [],
    [], [], ['gra'], [],
    ["ban"], [], ['aub'], [],
    ["ban"], ['aub'], ['aub'], [],
    ["ban"], ['app'], ['aub'], ['app'],
    ["ban"], ['gra'], ['aub'], ['app'],
    // ------------------- 32 seconds
]