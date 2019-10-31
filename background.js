class Background {
    constructor() {
        this.xSky = 0;
        this.xHills2 = 0;
        this.xHills1 = 0;
        this.xCloud2 = -300; // Setting the clouds part way on screen so the sky isn't empty at the start
        this.xCloud1 = 300; // Setting the clouds part way on screen so the sky isn't empty at the start
    }
    preload() {
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
        // Scenic Elements
        this.bgCloud1 = loadImage('assets/Background/Cloud_1.png');
        this.bgCloud2 = loadImage('assets/Background/Cloud_2.png');
        this.bgSky = loadImage('assets/Background/Sky.png');
        this.bgHills1 = loadImage('assets/Background/Hills_1.png');
        this.bgHills2 = loadImage('assets/Background/Hills_2.png');
    }
    draw() {
        // Rendering the sky
        this.xSky -= 0.5;
        image(this.bgSky, this.xSky, 0, width, height)
        image(this.bgSky, this.xSky + width, 0, width, height)
        if (this.xSky <= -width) {
            this.xSky = 0;
        }
        // Rendering the far BACK hills
        this.xHills2 += 0.2
        image(this.bgHills2, this.xHills2, -50, width, height)
        image(this.bgHills2, this.xHills2 - width, -50, width, height)
        if (this.xHills2 >= width) {
            this.xHills2 = 0;
        }
        // Rendering the far FRONT hills
        this.xHills1 -= 0.3
        image(this.bgHills1, this.xHills1, 0, width, height)
        image(this.bgHills1, this.xHills1 + width, 0, width, height)
        if (this.xHills1 <= -width) {
            this.xHills1 = 0;
        }
        // Rendering the BACK clouds
        this.xCloud2 -= 0.5
        image(this.bgCloud2, this.xCloud2 + width, 80, 80, 80)
        image(this.bgCloud2, this.xCloud2 + width + width / 2 + 80, 80, 80, 80)
        if (this.xCloud2 <= -width - 80) {
            this.xCloud2 = -width / 2;
        }
        // Rendering the FRONT clouds
        this.xCloud1 += 0.8
        image(this.bgCloud1, this.xCloud1, 150, 100, 100)
        image(this.bgCloud1, this.xCloud1 - width / 2 - 100, 150, 100, 100)
        if (this.xCloud1 >= width) {
            this.xCloud1 = width / 2 - 100;
        }
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
 
    }

}