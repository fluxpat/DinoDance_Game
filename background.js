class Background {
    constructor() {
        this.xSky = 0;
        this.xHills2 = 0;
        this.xHills1 = 0;
        this.xCloud2 = -300; // Setting the clouds part way on screen so the sky isn't empty at the start
        this.xCloud1 = 300; // Setting the clouds part way on screen so the sky isn't empty at the start
    }
    preload() {
        console.log('background preload')
        this.bgCloud1 = loadImage('assets/Background/Cloud_1.png');
        this.bgCloud2 = loadImage('assets/Background/Cloud_2.png');
        this.bgSky = loadImage('assets/Background/Sky.png');
        this.bgHills1 = loadImage('assets/Background/Hills_1.png');
        this.bgHills2 = loadImage('assets/Background/Hills_2.png');
    }
    draw() {
        // Rendering the sky
        this.xSky -= 0.2;
        image(this.bgSky, this.xSky, 0, width, height)
        image(this.bgSky, this.xSky + width, 0, width, height)
        if (this.xSky <= -width) {
            this.xSky = 0;
        }
        // Rendering the far BACK hills
        this.xHills2 += 0.1
        image(this.bgHills2, this.xHills2, -50, width, height)
        image(this.bgHills2, this.xHills2 - width, -50, width, height)
        if (this.xHills2 >= width) {
            this.xHills2 = 0;
        }
        // Rendering the far FRONT hills
        this.xHills1 -= 0.1
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
    }

}