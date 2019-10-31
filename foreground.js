class Foreground {
    constructor() {
    }
    preload() {
        // Text items
        this.titleBanner = loadImage('assets/Buttons/ButtonSheet.png')
    }
    draw() {
        // TITLE TEXT
        image(this.titleBanner, 375, 2, 650, 210, 165, 305, 410, 165)
        textFont(font);
        textSize(90)
        textAlign(CENTER)
        fill(245, 245, 245);
        text("Dino Dance!", 710, 130);
        fill(255, 220, 50);
        text("Dino Dance!", 705, 125);
        fill(255, 170, 0);
        text("Dino Dance!", 700, 120);

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
        text("Streak! >>", 210, 670)
        text("<< Streak!", width - 210, 670)
    }
}