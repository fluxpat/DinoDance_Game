class Fires {
    constructor() {
        this.redFireAnimation = [];
        this.blueFireAnimation = [];
        this.redIndex;
        this.blueIndex;
        // this.display;
    }

    preload() {
        console.log('Explosions preload')
        this.firesJSON = loadJSON('fireFrames.json')
        this.redFireImages = loadImage('assets/Explosions/explosionBad.png')
        this.blueFireImages = loadImage('assets/Explosions/explosionGood.png')
    }

    setup() {
        // Establishing the frames for the spritesheet??
        let redFrames = this.firesJSON.redFrames;
        let blueFrames = this.firesJSON.blueFrames;
        // Pushing all the image frames into the respective arrays
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
        // console.log(this.goodAnimation)
        if (this.display == "good") {
            // Player 1 explosion rendering
            if (this.key === "Q") { image(this.goodAnimation[this.goodIndex], 465, 610, 20, 20) }
            else if (this.key === "W") { image(this.goodAnimation[this.goodIndex], 515, 610, 20, 20) }
            else if (this.key === "E") { image(this.goodAnimation[this.goodIndex], 565, 610, 20, 20) }
            else if (this.key === "R") { image(this.goodAnimation[this.goodIndex], 615, 610, 20, 20) }
            if (frameCount % 1 === 0) { // Defines the speed of the animation (every 0.5 frames)
                this.goodIndex++;
            }
            if (this.goodIndex === this.goodAnimation.length) { // When the animation reaches the end, it stops
                this.display = false;
                this.goodIndex = 0;
            }
        } else if (this.display == "great") {
            if (this.key === "Q") { image(this.greatAnimation[this.greatIndex], 455, 600, 40, 40) }
            else if (this.key === "W") { image(this.greatAnimation[this.greatIndex], 505, 600, 40, 40) }
            else if (this.key === "E") { image(this.greatAnimation[this.greatIndex], 555, 600, 40, 40) }
            else if (this.key === "R") { image(this.greatAnimation[this.greatIndex], 605, 600, 40, 40) }
            if (frameCount % 1 === 0) { // Defines the speed of the animation (every 0.5 frames)
                this.greatIndex++;
            }
            if (this.greatIndex === this.greatAnimation.length) { // When the animation reaches the end, it stops
                this.display = false;
                this.greatIndex = 0;
            }
        } else if (this.display == "perfect") {
            if (this.key === "Q") { image(this.perfectAnimation[this.perfectIndex], 445, 590, 60, 60) }
            else if (this.key === "W") { image(this.perfectAnimation[this.perfectIndex], 495, 590, 60, 60) }
            else if (this.key === "E") { image(this.perfectAnimation[this.perfectIndex], 545, 590, 60, 60) }
            else if (this.key === "R") { image(this.perfectAnimation[this.perfectIndex], 595, 590, 60, 60) }
            if (frameCount % 1 === 0) { // Defines the speed of the animation (every 0.5 frames)
                this.perfectIndex++;
            }
            if (this.perfectIndex === this.perfectAnimation.length) { // When the animation reaches the end, it stops
                this.display = false;
                this.perfectIndex = 0;
            }
        }
    }

    /* ----------------------------------ACTIVATING THE FIRE ANIMATIONS---------------------------------- */
    playGoodQ() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "Q"
    }
}