class Player2 {
    constructor(speed) {
        this.idleAnimation = [];
        this.animationIndex = 0;
        this.animationSpeed = speed;
        // this.animationType = animationType;
    }

    preload() {
        console.log('player preload')
        this.dinoIdleJSON = loadJSON('dinoIdle.json')
        this.dinoBlueSS = loadImage('assets/Player/DinoYellow.png')
    }

    setup() {
        // Establishing the frames for the spritesheet??
        let framesIdle = this.dinoIdleJSON.frames;
        for (let i = 0; i < framesIdle.length; i++) {
            let pos = framesIdle[i].position;
            let img = this.dinoBlueSS.get(pos.x, pos.y, pos.w, pos.h);
            this.idleAnimation.push(img);
        }
        console.log(this.idleAnimation);
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