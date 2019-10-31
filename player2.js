class Player2 {
    constructor() {
        this.idleAnimation = [];
        this.animationIndex = 0;
        this.animationSpeed = 0.18;
        // this.animationType = animationType;
    }

    preload() {
        this.dinoIdleJSON = loadJSON('dinoIdle.json')
        this.dinoRedSS = loadImage('assets/Player/DinoRed.png')
    }

    setup() {
        // Establishing the frames for the spritesheet??
        let framesIdle = this.dinoIdleJSON.frames;
        for (let i = 0; i < framesIdle.length; i++) {
            let pos = framesIdle[i].position;
            let img = this.dinoRedSS.get(pos.x, pos.y, pos.w, pos.h);
            this.idleAnimation.push(img);
        }
    }

    draw() {
        let index = floor(this.animationIndex);
        scale(-1, 1);
        image(this.idleAnimation[index % this.idleAnimation.length], - width + 220, height - 250, 70, 70);
        scale(-1, 1);
    }

    animation() {
        this.animationIndex += this.animationSpeed
    }
}