class Game {
    constructor() {
        /* Giving the game its attributes: */
        // BACKGROUND SETTING
        this.background = new Background();
        // FOREGROUND SETTING + TEXT
        this.foreground = new Foreground();
        // CHARACTERS
        this.player1 = new Player();
        this.player2 = new Player2();
        // ITEMS & KEYS
        this.items = new Items();
        // FRUITS GENERATION
        this.fruitsArr = [];
        // EXPLOSIONS AND FIRES
        this.explosions1 = new Explosions1()
        this.explosions2 = new Explosions2()
        this.fires = new Fires()
        // Counters:
        this.counter = 0;
        this.p1score = 0;
        this.p2score = 0;
        this.p1streak = 0;
        this.p2streak = 0;
        this.p1multi = 1;
        this.p2multi = 1;
        // Score color change based on Multiplier:
        this.p1scoreColor = '#f5f5f5' // WHITE no multi
        this.p2scoreColor = '#f5f5f5' // WHITE no multi
    }

    preload() {
        this.background.preload();
        this.foreground.preload();
        this.player1.preload();
        this.player2.preload();
        this.items.preload();
        this.explosions1.preload();
        this.explosions2.preload();
        this.fires.preload();
    }

    setup() {
        this.player1.setup();
        this.player2.setup();
        this.explosions1.setup();
        this.explosions2.setup();
        this.fires.setup();
        // Establish a counter / metronome
        setInterval(this.timeIt, 250);
    }

    draw() {
        this.background.draw();
        /* ----------------------------------------RENDERS THE FRUIT FOR EACH PLAYER---------------------------------------- */
        // Remove fruit when they leave the screen
        // AND reset players' Streak combos if they lose a fruit
        if (gameScreen == "play") {
            this.fruitsArr.forEach(
                (fruit, index) => {
                    fruit.draw();
                    if (fruit.playerID === 2 && fruit.y > 650) {
                        // this.fruitsArr.splice(index, 1);
                        this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        this.p2streak = 0;
                    }
                    if (fruit.playerID === 1 && fruit.y > 650) {
                        // this.fruitsArr.splice(index, 1);
                        this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        this.p1streak = 0;
                    }
                }
            )
        } /* else { this.fruitsArr = [] } */
        /* ----------------------------------------RESET SCORES WHEN GAME RESTARTS---------------------------------------- */
        if (gameScreen == "home") {
            this.p1score = 0;
            this.p1streak = 0;
            this.p2score = 0;
            this.p2streak = 0;
            // TURNING OFF THE FIRE MULTIPLIER ANIMATIONS
            this.fires.animateNoFire1();
            this.fires.animateNoFire2();
            this.fruitsArr = [];
            this.counter = 0;
        }
        /* ----------------------------------------RENDERING PLAYERS AND FOREGROUND---------------------------------------- */
        this.foreground.draw();
        this.player1.draw();
        this.player1.animation();
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
        fill(this.p1scoreColor);
        text(this.p1score, 150, 340);
        fill(150, 75, 0);
        text(this.p2score, width - 147, 343);
        fill(this.p2scoreColor);
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
        /* -------------------------------------------------Streak Multiplier conditions:------------------------------------------------- */
        // Player 1
        if (this.p1streak >= 30) {
            this.p1multi = 2
            this.p1scoreColor = '#2cb5f5' // BLUE 2X multi
            this.player1.animationSpeed = 1;
            this.fires.animateBlueFire1();
        } else if (this.p1streak >= 15) {
            this.p1multi = 1.4
            this.p1scoreColor = '#fee661' // YELLOW 1.4X multi
            this.player1.animationSpeed = 0.5;
            this.fires.animateRedFire1();
        } else if (this.p1streak >= 5) {
            this.fires.animateBlackFire1()
        } else {
            this.p1multi = 1;
            this.p1scoreColor = '#f5f5f5' // WHITE no multi
            this.player1.animationSpeed = 0.18;
            this.fires.animateNoFire1()
        }
        // Player 2
        if (this.p2streak >= 30) {
            this.p2multi = 2
            this.p2scoreColor = '#2cb5f5' // BLUE 2X multi
            this.player2.animationSpeed = 1;
            this.fires.animateBlueFire2();
        } else if (this.p2streak >= 15) {
            this.p2multi = 1.4
            this.p2scoreColor = '#fee661' // YELLOW 1.4X multi
            this.player2.animationSpeed = 0.5;
            this.fires.animateRedFire2();
        } else if (this.p2streak >= 5) {
            this.fires.animateBlackFire2()
        } else {
            this.p2multi = 1;
            this.p2scoreColor = '#f5f5f5' // WHITE no multi
            this.player2.animationSpeed = 0.18;
            this.fires.animateNoFire2()
        }
        /* ----------------------------------RUNNING THE CHECKS FOR WHEN TO ANIMATE EXPLOSIONS---------------------------------- */
        this.explosions1.draw();
        this.explosions2.draw();
        this.fires.draw();
    }

    keyPressed() {
        /* --------------------------------------If you press ESC quit game to home screen-------------------------------------- */
        if (keyIsDown(27)) {
            gameScreen = "home";
            musicDisco.stop(); // Have hard coded the song here. Will need to make dynamic for when more songs are added.
            clearInterval(gameTimer);
            gameSeconds = 0;
            this.fruitsArr = [];
        }

        this.fruitsArr.forEach(
            (fruit, index) => {
                // PLAYER 1's key presses for fruits
                if (fruit.playerID === 1) {
                    if (keyIsDown(81) && fruit.type === 'banana') {
                        if (fruit.y >= 590 && fruit.y <= 613) {
                            if (fruit.y >= 597 && fruit.y <= 603) { // PERFECT HIT
                                this.p1score += 20 * this.p1multi;
                                this.explosions1.playPerfectQ(); // EXPLOSION!!!!!
                            } else if (fruit.y >= 595 && fruit.y <= 605) { // GREAT HIT
                                this.p1score += 15 * this.p1multi;
                                this.explosions1.playGreatQ(); // EXPLOSION!!!!!
                            } else { // GOOD HIT
                                this.p1score += 10 * this.p1multi;
                                this.explosions1.playGoodQ(); // EXPLOSION!!!!!
                            }
                            this.p1streak++;
                            // this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                            this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        }
                    }
                    if (keyIsDown(87) && fruit.type === 'grapes') {
                        if (fruit.y > 590 && fruit.y < 613) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p1score += 20 * this.p1multi;
                                this.explosions1.playPerfectW(); // EXPLOSION!!!!!
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p1score += 15 * this.p1multi;
                                this.explosions1.playGreatW(); // EXPLOSION!!!!!
                            } else { // GOOD HIT
                                this.p1score += 10 * this.p1multi;
                                this.explosions1.playGoodW(); // EXPLOSION!!!!!
                            }
                            this.p1streak++;
                            // this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                            this.fruitsArr = this.fruitsArr.filter(element => element != fruit);

                        }
                    }
                    if (keyIsDown(69) && fruit.type === 'aubergine') {
                        if (fruit.y > 590 && fruit.y < 613) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p1score += 20 * this.p1multi;
                                this.explosions1.playPerfectE(); // EXPLOSION!!!!!
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p1score += 15 * this.p1multi;
                                this.explosions1.playGreatE(); // EXPLOSION!!!!!
                            } else { // GOOD HIT
                                this.p1score += 10 * this.p1multi;
                                this.explosions1.playGoodE(); // EXPLOSION!!!!!
                            }
                            this.p1streak++;
                            // this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                            this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        }
                    }
                    if (keyIsDown(82) && fruit.type === 'apple') {
                        if (fruit.y > 590 && fruit.y < 613) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p1score += 20 * this.p1multi;
                                this.explosions1.playPerfectR(); // EXPLOSION!!!!!
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p1score += 15 * this.p1multi;
                                this.explosions1.playGreatR(); // EXPLOSION!!!!!
                            } else { // GOOD HIT
                                this.p1score += 10 * this.p1multi;
                                this.explosions1.playGoodR(); // EXPLOSION!!!!!
                            }
                            this.p1streak++;
                            // this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                            this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        }
                    }
                }
                // PLAYER 2's key presses for fruit
                else if (fruit.playerID === 2) {
                    if (keyIsDown(85) && fruit.type === 'banana') {
                        if (fruit.y > 590 && fruit.y < 613) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p2score += 20 * this.p2multi;
                                this.explosions2.playPerfectU(); // EXPLOSION!!!!!
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p2score += 15 * this.p2multi;
                                this.explosions2.playGreatU(); // EXPLOSION!!!!!
                            } else { // GOOD HIT
                                this.p2score += 10 * this.p2multi;
                                this.explosions2.playGoodU(); // EXPLOSION!!!!!
                            }
                            this.p2streak++;
                            // this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                            this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        }
                    }
                    if (keyIsDown(73) && fruit.type === 'grapes') {
                        if (fruit.y > 590 && fruit.y < 613) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p2score += 20 * this.p2multi;
                                this.explosions2.playPerfectI(); // EXPLOSION!!!!!
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p2score += 15 * this.p2multi;
                                this.explosions2.playGreatI(); // EXPLOSION!!!!!
                            } else { // GOOD HIT
                                this.p2score += 10 * this.p2multi;
                                this.explosions2.playGoodI(); // EXPLOSION!!!!!
                            }
                            this.p2streak++;
                            // this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                            this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        }
                    }
                    if (keyIsDown(79) && fruit.type === 'aubergine') {
                        if (fruit.y > 590 && fruit.y < 613) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p2score += 20 * this.p2multi;
                                this.explosions2.playPerfectO(); // EXPLOSION!!!!!
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p2score += 15 * this.p2multi;
                                this.explosions2.playGreatO(); // EXPLOSION!!!!!
                            } else { // GOOD HIT
                                this.p2score += 10 * this.p2multi;
                                this.explosions2.playGoodO(); // EXPLOSION!!!!!
                            }
                            this.p2streak++;
                            // this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                            this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        }
                    }
                    if (keyIsDown(80) && fruit.type === 'apple') {
                        if (fruit.y > 590 && fruit.y < 613) {
                            if (fruit.y > 597 && fruit.y < 603) { // PERFECT HIT
                                this.p2score += 20 * this.p2multi;
                                this.explosions2.playPerfectP(); // EXPLOSION!!!!!
                            } else if (fruit.y > 595 && fruit.y < 605) { // GREAT HIT
                                this.p2score += 15 * this.p2multi;
                                this.explosions2.playGreatP(); // EXPLOSION!!!!!
                            } else { // GOOD HIT
                                this.p2score += 10 * this.p2multi;
                                this.explosions2.playGoodP(); // EXPLOSION!!!!!
                            }
                            this.p2streak++;
                            // this.fruitsArr.splice(index, 1) // Removes fruit if hit, regardless of hit level
                            this.fruitsArr = this.fruitsArr.filter(element => element != fruit);
                        }
                    }
                }
            }
        )
    }

    timeIt = () => { // CHOOSES THE SOUND TRACK AND DIFFICULTY BASED ON "gameSong" and "gameDifficulty"
        if (gameDifficulty === "easy") {
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
            if (gameScreen === "play") {
                this.counter = (this.counter + 1) % timesDiscoEasy.length;
            } else { this.counter = 0 }
        }
        if (gameDifficulty === "medium") {
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
        if (gameDifficulty === "hard") {
            // Pushing fruits into array based on sheet music:
            if (timesDiscoHard[this.counter].includes('ban')) {
                this.fruitsArr.push(new banana(1));
                this.fruitsArr.push(new banana(2));
            }
            if (timesDiscoHard[this.counter].includes('gra')) {
                this.fruitsArr.push(new grapes(1));
                this.fruitsArr.push(new grapes(2));
            }
            if (timesDiscoHard[this.counter].includes('aub')) {
                this.fruitsArr.push(new aubergine(1));
                this.fruitsArr.push(new aubergine(2));
            }
            if (timesDiscoHard[this.counter].includes('app')) {
                this.fruitsArr.push(new apple(1));
                this.fruitsArr.push(new apple(2));
            }
            this.counter = (this.counter + 1) % timesDiscoHard.length;
        }
    }
}

// Game Fruit Generation:

const timesDiscoEasy = [ // Essentially my music score here where each element of the parent array is a quaver (half a beat (1/4 of a second))
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
const timesDiscoHard = [ // Essentially my music score here where each element of the parent array is a quaver (half a beat (1/4 of a second))
    ["ban"], ['aub'], [], [],
    ["gra"], ['app'], [], [],
    ["ban"], ['aub'], [], [],
    ["gra"], ['aub'], [], [], // 8 beats ends here (4 seconds)
    ["ban", 'aub'], ["ban", 'aub'], [], [],
    ["gra", 'app'], ["gra", 'app'], [], [],
    ["ban", 'aub'], ["ban", 'aub'], [], [],
    ["gra", 'app'], ["gra", 'app'], [], [],
    // ------------------- 8 seconds
    ["ban"], ['app'], ['gra', 'aub'], ['app'],
    ["ban"], ['app'], ['gra', 'aub'], ['app'],
    ["ban"], ['app'], ['gra', 'aub'], ['app'],
    ["ban"], ['app'], ['gra', 'aub'], ['app'],
    ["ban"], ['app'], ['aub'], ['gra'],
    ["ban"], ['app'], ['aub'], ['gra'],
    ["app"], ['gra'], ['app'], ['gra'],
    ["aub"], ['ban'], ['aub'], ['ban'],
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
    ['gra', 'app'], ['gra', 'app'], ["ban"], ['ban'],
    ['aub'], ['ban'], ['gra', 'app'], ['gra', 'app'],
    ['ban', 'aub'], ['ban', 'aub'], ['app'], ['app'],
    ['aub'], ['ban'], ['gra', 'app'], ['gra', 'app'],
    ['ban', 'gra', 'aub'], [], ['ban', 'gra', 'aub'], [],
    ['gra', 'aub', 'app'], [], ['gra', 'aub', 'app'], [],
    ['ban', 'aub', 'app'], [], ['ban', 'aub', 'app'], [],
    ["ban"], ['gra'], ['aub'], ['app'],
    // ------------------- 32 seconds
]