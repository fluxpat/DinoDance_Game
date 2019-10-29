class aubergine {
    constructor(x) {
        this.playerID = x;
        this.y = 0;
        this.type = 'aubergine';
        this.aubergine = loadImage('assets/Fruits/Aubergine.png')
    }

    preload() {
    }

    setup() {
    }

    draw() {
        if (this.playerID === 1) {
            image(this.aubergine, 555, this.y, 40, 40)
        } else if (this.playerID === 2) {
            image(this.aubergine, 855, this.y, 40, 40)
        }
        this.y += 2.5;
    }
}