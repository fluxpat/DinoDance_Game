class Foreground {
    constructor() {
    }
    preload() {
        console.log('foreground preload')
        // Player Platforms
        this.grassMid = loadImage('assets/Tiles/GrassMid.png');
        this.grassRight = loadImage('assets/Tiles/GrassRight.png');
        this.grassLeft = loadImage('assets/Tiles/GrassLeft.png');
        this.dirtMid = loadImage('assets/Tiles/Dirt.png');
        this.dirtRight = loadImage('assets/Tiles/DirtRight.png');
        this.dirtLeft = loadImage('assets/Tiles/DirtLeft.png');
        this.tree1 = loadImage('assets/Plants/Tree1.png');
        this.tree2 = loadImage('assets/Plants/Tree2.png');
        this.grass = loadImage('assets/Plants/Grass.png');
        this.bush = loadImage('assets/Plants/Bush.png');
        // Text items
        this.titleBanner = loadImage('assets/Buttons/ButtonSheet.png')
    }
    draw() {
        // Left Cliff
        image(this.grassMid, 0, height - 200, 100, 100);
        image(this.grassMid, 100, height - 200, 100, 100);
        image(this.grassRight, 200, height - 200, 100, 100);
        image(this.dirtMid, 0, height - 100, 100, 100);
        image(this.dirtMid, 100, height - 100, 100, 100);
        image(this.dirtRight, 200, height - 100, 100, 100);
        image(this.tree1, 10, height - 340, 150, 150)
        image(this.grass, 10, height - 230, 50, 50)
        image(this.bush, 120, height - 225, 80, 40)

        // Right Cliff
        image(this.grassMid, width - 100, height - 200, 100, 100);
        image(this.grassMid, width - 200, height - 200, 100, 100);
        image(this.grassLeft, width - 300, height - 200, 100, 100);
        image(this.dirtMid, width - 100, height - 100, 100, 100);
        image(this.dirtMid, width - 200, height - 100, 100, 100);
        image(this.dirtLeft, width - 300, height - 100, 100, 100);
        image(this.tree2, width - 160, height - 340, 150, 150)
        image(this.grass, width - 60, height - 230, 50, 50)
        image(this.bush, width - 200, height - 225, 80, 40)

        // TITLE TEXT
        image(this.titleBanner, 400, 13, 600, 200, 165, 305, 410, 165)
        textFont(font);
        textSize(90)
        textAlign(CENTER)
        fill(245, 245, 245);
        text("Dino Dance!", 705, 135);
        textSize(90)
        textAlign(CENTER)
        fill(253, 199, 96);
        text("Dino Dance!", 700, 130);

        // Player section text
        textFont(font);
        textSize(50)
        textAlign(CENTER)
        fill(150, 75, 0);
        text("Player 1", 153, 243);
        text("Player 2", width - 147, 243);
        fill(245, 245, 245);
        text("Player 1", 150, 240);
        text("Player 2", width - 150, 240);
        textSize(30)
        fill(150, 75, 0);
        text("Score:", 150, 280);
        text("Score:", width - 150, 280);
        // Multipliers
        fill(245, 245, 245);
        text("Multiplier >>", 210, 670)
        text("<< Multiplier", width - 210, 670)
    }
}