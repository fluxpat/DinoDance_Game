class grapes {
    constructor(x) {
        this.playerID = x;
        this.y = 0;
        this.type = 'grapes';
        this.grapes = loadImage('assets/Fruits/Grapes Green.png')
    }

    preload() {
    }

    setup() {
    }

    draw() {
        if (this.playerID === 1) {
            image(this.grapes, 505, this.y, 40, 40)
        } else if (this.playerID === 2) {
            image(this.grapes, 805, this.y, 40, 40)
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