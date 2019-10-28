class Game {
    constructor() {
        /* Giving the game its attributes: */
        // BACKGROUND SETTING
        this.background = new Background();
        // FOREGROUND SETTING + TEXT
        this.foreground = new Foreground();
        // CHARACTERS
        this.player = new Player(0.2);
        this.player2 = new Player2(0.2);
        // ITEMS & KEYS
        this.items = new Items();
        // FRUITS GENERATION
        this.fruits = new Fruits();
    }
    preload() {
        this.background.preload();
        this.foreground.preload();
        this.player.preload();
        this.player2.preload();
        this.items.preload();
        this.fruits.preload();
    }
    setup() {
        this.player.setup();
        this.player2.setup();
        this.fruits.setup(); // establishing the timer function
    }
    draw() {
        this.background.draw();
        this.foreground.draw();
        this.player.draw();
        this.player.animation();
        this.player2.draw();
        this.player2.animation();
        this.items.draw();
    }
}

