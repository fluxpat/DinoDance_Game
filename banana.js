class banana {
    constructor(x) {
        this.playerID = x;
        this.y = 0;
        this.type = 'banana';
        this.banana = loadImage('assets/Fruits/Banana.png')
    }

    preload() {
    }

    setup() {
    }

    draw() {
        if (this.playerID === 1) {
            image(this.banana, 455, this.y, 40, 40)
        } else if (this.playerID === 2) {
            image(this.banana, 755, this.y, 40, 40)
        }
        this.y += 2;
    }
}