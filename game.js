class Game {
    constructor() {
        /* Giving the game its attributes: */
        // BACKGROUND IMAGE
        this.background = new Background();
        // FOREGROUND SETTING
        this.foreground = new Foreground();
        // CHARACTERS
        this.player = new Player();
        // 
    }
    preload() {
        this.background.preload();
        this.foreground.preload();
    }
    setup() {

    }
    draw() {
        this.background.draw();
        this.foreground.draw();
    }
}