class Player {
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
        let framesIdle = this.dinoIdleJSON.frames; // stores the Array of frame info into framesIdle
        for (let i = 0; i < framesIdle.length; i++) { // looping through the framesIdle array
            let pos = framesIdle[i].position; // for each frame (i) we're extracting the position info which is an OBJECT
            let img = this.dinoBlueSS.get(pos.x, pos.y, pos.w, pos.h); // each frame image is now stored into the img variable
            this.idleAnimation.push(img); // each image is pushed into the idleAnimation array
        }
        console.log(this.idleAnimation);
    }

    draw() {
        let index = floor(this.animationIndex)
            image(this.idleAnimation[index % this.idleAnimation.length], 220, height - 250, 70, 70);
    }

    animation() {
        this.animationIndex += this.animationSpeed
    }
}