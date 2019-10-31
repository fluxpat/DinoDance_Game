class Explosions1 {
    constructor() {
        this.goodAnimation = [];
        this.greatAnimation = [];
        this.perfectAnimation = [];
        this.goodIndex;
        this.greatIndex;
        this.perfectIndex;
        this.display;
    }

    preload() {
        this.explosionsJSON = loadJSON('explosionFrames.json')
        this.badExplosion = loadImage('assets/Explosions/explosionBad.png')
        this.goodExplosion = loadImage('assets/Explosions/explosionGood.png')
        this.greatExplosion = loadImage('assets/Explosions/explosionGreat.png')
        this.perfectExplosion = loadImage('assets/Explosions/explosionPerfect.png')
    }

    setup() {
        // Establishing the frames for the spritesheet??
        // let framesBad = this.explosionsJSON.badFrames; -------> decided to remove BAD anim. due to difficulty implementing activation condition
        let goodFrames = this.explosionsJSON.goodFrames;
        let greatFrames = this.explosionsJSON.greatFrames;
        let perfectFrames = this.explosionsJSON.perfectFrames;
        // Pushing all the image frames into the respective arrays
        for (let i = 0; i < goodFrames.length; i++) {
            let pos = goodFrames[i].position;
            let img = this.goodExplosion.get(pos.x, pos.y, pos.w, pos.h);
            this.goodAnimation.push(img);
        }
        for (let i = 0; i < greatFrames.length; i++) {
            let pos = greatFrames[i].position;
            let img = this.greatExplosion.get(pos.x, pos.y, pos.w, pos.h);
            this.greatAnimation.push(img);
        }
        for (let i = 0; i < perfectFrames.length; i++) {
            let pos = perfectFrames[i].position;
            let img = this.perfectExplosion.get(pos.x, pos.y, pos.w, pos.h);
            this.perfectAnimation.push(img);
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

    /* ----------------------------------ACTIVATING THE EXPLOSION ANIMATIONS---------------------------------- */
    // Player 1 - GOOD EXPLOSIONS
    playGoodQ() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "Q"
    }
    playGoodW() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "W"
    }
    playGoodE() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "E"
    }
    playGoodR() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "R"
    }

    // Player 1 - GREAT EXPLOSIONS
    playGreatQ() {
        this.display = "great";
        this.greatIndex = 0;
        this.key = "Q"
    }
    playGreatW() {
        this.display = "great";
        this.greatIndex = 0;
        this.key = "W"
    }
    playGreatE() {
        this.display = "great";
        this.greatIndex = 0;
        this.key = "E"
    }
    playGreatR() {
        this.display = "great";
        this.greatIndex = 0;
        this.key = "R"
    }

    // Player 1 - PERFECT EXPLOSIONS
    playPerfectQ() {
        this.display = "perfect";
        this.perfectIndex = 0;
        this.key = "Q"
    }
    playPerfectW() {
        this.display = "perfect";
        this.perfectIndex = 0;
        this.key = "W"
    }
    playPerfectE() {
        this.display = "perfect";
        this.perfectIndex = 0;
        this.key = "E"
    }
    playPerfectR() {
        this.display = "perfect";
        this.perfectIndex = 0;
        this.key = "R"
    }
}