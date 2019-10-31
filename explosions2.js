class Explosions2 {
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
            // Player 2 explosion rendering
            if (this.key === "U") { image(this.goodAnimation[this.goodIndex], 765, 610, 20, 20) }
            else if (this.key === "I") { image(this.goodAnimation[this.goodIndex], 815, 610, 20, 20) }
            else if (this.key === "O") { image(this.goodAnimation[this.goodIndex], 865, 610, 20, 20) }
            else if (this.key === "P") { image(this.goodAnimation[this.goodIndex], 915, 610, 20, 20) }
            if (frameCount % 1 === 0) { // Defines the speed of the animation (every 0.5 frames)
                this.goodIndex++;
            }
            if (this.goodIndex === this.goodAnimation.length) { // When the animation reaches the end, it stops
                this.display = false;
                this.goodIndex = 0;
            }
        } else if (this.display == "great") {
            // Player 2 explosion rendering
            if (this.key === "U") { image(this.greatAnimation[this.greatIndex], 755, 600, 40, 40) }
            else if (this.key === "I") { image(this.greatAnimation[this.greatIndex], 805, 600, 40, 40) }
            else if (this.key === "O") { image(this.greatAnimation[this.greatIndex], 855, 600, 40, 40) }
            else if (this.key === "P") { image(this.greatAnimation[this.greatIndex], 905, 600, 40, 40) }
            if (frameCount % 1 === 0) { // Defines the speed of the animation (every 0.5 frames)
                this.greatIndex++;
            }
            if (this.greatIndex === this.greatAnimation.length) { // When the animation reaches the end, it stops
                this.display = false;
                this.greatIndex = 0;
            }
        } else if (this.display == "perfect") {
            // Player 2 explosion rendering
            if (this.key === "U") { image(this.perfectAnimation[this.perfectIndex], 745, 590, 60, 60) }
            else if (this.key === "I") { image(this.perfectAnimation[this.perfectIndex], 795, 590, 60, 60) }
            else if (this.key === "O") { image(this.perfectAnimation[this.perfectIndex], 845, 590, 60, 60) }
            else if (this.key === "P") { image(this.perfectAnimation[this.perfectIndex], 895, 590, 60, 60) }
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
    // Player 2 - GOOD EXPLOSIONS
    playGoodU() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "U"
    }
    playGoodI() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "I"
    }
    playGoodO() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "O"
    }
    playGoodP() {
        this.display = "good";
        this.goodIndex = 0;
        this.key = "P"
    }

    // Player 2 - GREAT EXPLOSIONS
    playGreatU() {
        this.display = "great";
        this.greatIndex = 0;
        this.key = "U"
    }
    playGreatI() {
        this.display = "great";
        this.greatIndex = 0;
        this.key = "I"
    }
    playGreatO() {
        this.display = "great";
        this.greatIndex = 0;
        this.key = "O"
    }
    playGreatP() {
        this.display = "great";
        this.greatIndex = 0;
        this.key = "P"
    }

    // Player 2 - PERFECT EXPLOSIONS
    playPerfectU() {
        this.display = "perfect";
        this.perfectIndex = 0;
        this.key = "U"
    }
    playPerfectI() {
        this.display = "perfect";
        this.perfectIndex = 0;
        this.key = "I"
    }
    playPerfectO() {
        this.display = "perfect";
        this.perfectIndex = 0;
        this.key = "O"
    }
    playPerfectP() {
        this.display = "perfect";
        this.perfectIndex = 0;
        this.key = "P"
    }
}