class apple {
    constructor(x) {
        this.playerID = x;
        this.y = 0;
        this.type = 'apple';
        this.apple = loadImage('assets/Fruits/Apple Red.png')
    }

    preload() {
    }

    setup() {
    }

    draw() {
        if (this.playerID === 1) {
            image(this.apple, 605, this.y, 40, 40)
        } else if (this.playerID === 2) {
            image(this.apple, 905, this.y, 40, 40)
        }
        if (gameDifficulty === "easy") {
            this.y += 2;
        }
        if (gameDifficulty === "medium") {
            this.y += 2;
        }
        if (gameDifficulty === "hard") {
            this.y += 3;
        }
    }
}