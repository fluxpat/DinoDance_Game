class Items {
    constructor() {
    }

    preload() {
        // Player 1's keys:
        this.keyQ = loadImage('assets/Keys/Q-Key.png');
        this.keyW = loadImage('assets/Keys/W-Key.png');
        this.keyE = loadImage('assets/Keys/E-Key.png');
        this.keyR = loadImage('assets/Keys/R-Key.png');
        // Player 2's keys:
        this.keyU = loadImage('assets/Keys/U-Key.png');
        this.keyI = loadImage('assets/Keys/I-Key.png');
        this.keyO = loadImage('assets/Keys/O-Key.png');
        this.keyP = loadImage('assets/Keys/P-Key.png');
        // Food!
        this.banana = loadImage('assets/Fruits/Banana.png')
        this.grapes = loadImage('assets/Fruits/Grapes Green.png')
        this.aubergine = loadImage('assets/Fruits/Aubergine.png')
        this.apple = loadImage('assets/Fruits/Apple Red.png')
    }

    draw() {
        this.keyAction();
        // Player 1's food
        push();
        tint(255, 110);
        image(this.banana, 455, 600, 40, 40); // BANANA
        image(this.grapes, 505, 600, 40, 40); // GRAPES
        image(this.aubergine, 555, 600, 40, 40); // EGGPLANT
        image(this.apple, 605, 600, 40, 40); // APPLE
        // Player 2's food
        image(this.banana, 755, 600, 40, 40); // BANANA
        image(this.grapes, 805, 600, 40, 40); // GRAPES
        image(this.aubergine, 855, 600, 40, 40); // EGGPLANT
        image(this.apple, 905, 600, 40, 40); // APPLE
        pop();
    }

    keyAction() {
        // Player 1's controls
        if (keyIsDown(81)) { // Q-key
            image(this.keyQ, 450, 635, 50, 50, 32, 0, 32, 32);
        } else { image(this.keyQ, 450, 635, 50, 50, 0, 0, 32, 32) };
        if (keyIsDown(87)) { // W-key
            image(this.keyW, 500, 635, 50, 50, 32, 0, 32, 32);
        } else { image(this.keyW, 500, 635, 50, 50, 0, 0, 32, 32) };
        if (keyIsDown(69)) { // E-key
            image(this.keyE, 550, 635, 50, 50, 32, 0, 32, 32);
        } else { image(this.keyE, 550, 635, 50, 50, 0, 0, 32, 32) };
        if (keyIsDown(82)) { // R-key
            image(this.keyR, 600, 635, 50, 50, 32, 0, 32, 32);
        } else { image(this.keyR, 600, 635, 50, 50, 0, 0, 32, 32) };
        // Player 2's controls
        if (keyIsDown(85)) { // U-key
            image(this.keyU, 750, 635, 50, 50, 32, 0, 32, 32);
        } else { image(this.keyU, 750, 635, 50, 50, 0, 0, 32, 32) };
        if (keyIsDown(73)) { // I-key
            image(this.keyI, 800, 635, 50, 50, 32, 0, 32, 32);
        } else { image(this.keyI, 800, 635, 50, 50, 0, 0, 32, 32) };
        if (keyIsDown(79)) { // O-key
            image(this.keyO, 850, 635, 50, 50, 32, 0, 32, 32);
        } else { image(this.keyO, 850, 635, 50, 50, 0, 0, 32, 32) };
        if (keyIsDown(80)) { // P-key
            image(this.keyP, 900, 635, 50, 50, 32, 0, 32, 32);
        } else { image(this.keyP, 900, 635, 50, 50, 0, 0, 32, 32) };
    }
}