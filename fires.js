class Fires {
    constructor() {
        this.blackFireAnimation = [];
        this.redFireAnimation = [];
        this.blueFireAnimation = [];
        this.blackIndex1 = 0;
        this.redIndex1 = 0;
        this.blueIndex1 = 0;
        this.blackIndex2 = 0;
        this.redIndex2 = 0;
        this.blueIndex2 = 0;
        this.p1StreakLvl = 0;
        this.p2StreakLvl = 0;
    }

    preload() {
        this.firesJSON = loadJSON('fireFrames.json')
        this.blackFireImages = loadImage('assets/Fire/JumpingBlackFire.png')
        this.redFireImages = loadImage('assets/Fire/JumpingRedFire.png')
        this.blueFireImages = loadImage('assets/Fire/JumpingBlueFire.png')
    }

    setup() {
        // Establishing the frames for the spritesheet??
        let blackFrames = this.firesJSON.blackFrames;
        let redFrames = this.firesJSON.redFrames;
        let blueFrames = this.firesJSON.blueFrames;
        // Pushing all the image frames into the respective arrays
        for (let i = 0; i < blackFrames.length; i++) {
            let pos = blackFrames[i].position;
            let img = this.blackFireImages.get(pos.x, pos.y, pos.w, pos.h);
            this.blackFireAnimation.push(img);
        }
        for (let i = 0; i < redFrames.length; i++) {
            let pos = redFrames[i].position;
            let img = this.redFireImages.get(pos.x, pos.y, pos.w, pos.h);
            this.redFireAnimation.push(img);
        }
        for (let i = 0; i < blueFrames.length; i++) {
            let pos = blueFrames[i].position;
            let img = this.blueFireImages.get(pos.x, pos.y, pos.w, pos.h);
            this.blueFireAnimation.push(img);
        }
    }

    draw() {
        // console.log(this.blackIndex1)
        // PLAYER 1's FIRED BEING RENDERED
        if (this.p1StreakLvl >= 1) {
            image(this.blackFireAnimation[frameCount % this.blackFireAnimation.length], 320, 590, 28, 90)

        }
        if (this.p1StreakLvl >= 2) {
            image(this.redFireAnimation[frameCount % this.redFireAnimation.length], 350, 590, 28, 90)

        }
        if (this.p1StreakLvl >= 3) {
            image(this.blueFireAnimation[frameCount % this.blueFireAnimation.length], 380, 590, 28, 90)
        }
        // // PLAYER 2's FIRES BEING RENDERED
        if (this.p2StreakLvl >= 1) {
            image(this.blackFireAnimation[frameCount % this.blackFireAnimation.length], width - 320 - 28, 590, 28, 90)
        }
        if (this.p2StreakLvl >= 2) {
            image(this.redFireAnimation[frameCount % this.redFireAnimation.length], width - 350 - 28, 590, 28, 90)
        }
        if (this.p2StreakLvl >= 3) {
            image(this.blueFireAnimation[frameCount % this.blueFireAnimation.length], width - 380 - 28, 590, 28, 90)
        }
    }

    /* ----------------------------------ACTIVATING THE FIRE ANIMATIONS---------------------------------- */
    // PLAYER 1's FIRES
    animateNoFire1() {
        this.p1StreakLvl = 0;
    }

    animateBlackFire1() {
        this.p1StreakLvl = 1;
    }

    animateRedFire1() {
        this.p1StreakLvl = 2;
    }

    animateBlueFire1() {
        this.p1StreakLvl = 3;
    }

    // PLAYER 2's FIRES
    animateNoFire2() {
        this.p2StreakLvl = 0;
    }

    animateBlackFire2() {
        this.p2StreakLvl = 1;
    }

    animateRedFire2() {
        this.p2StreakLvl = 2;
    }

    animateBlueFire2() {
        this.p2StreakLvl = 3;
    }
}