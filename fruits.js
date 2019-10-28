class Fruits {
    constructor() {
        this.counter = 0;
        this.yBanana = -40;
    }

    preload() {
        // Food items
        this.banana = loadImage('assets/Fruits/Banana.png')
        this.grapes = loadImage('assets/Fruits/Grapes Green.png')
        this.aubergine = loadImage('assets/Fruits/Aubergine.png')
        this.apple = loadImage('assets/Fruits/Apple Red.png')
    }

    timeIt = () => {
        this.counter = (this.counter + 1) % times.length;
        console.log(times[this.counter].includes("banana"))
    }

    setup() {
        // Establish a counter / metrinome
        setInterval(this.timeIt, 250);
    }

    draw() {

        this.yBanana += 5;
        image(this.banana, 455, -40, 40, 40)
    }

}

const banana = {
    times: [0, 1, 2, 3, 8, 9, 10, 11]
}

const times = [ // Essentially my music score here where each element of the parent array is a quaver (half a beat (1/4 of a second))
    /* Wait 8 beats before rendering any fruits to allow for first group to fall and player to get ready */
    [], [], [], [],
    [], [], [], [],
    [], [], [], [],
    [], [], [], [], // 8 beats ends here
    ["banana"], [], [], [],
    ["banana"], [], [], [],
    ["banana"], [], [], [],
    ["banana"], [], [], [],
    ["banana"], [], ["banana"], [],
    [], [], ["banana"], [],
    ["banana"], [], ["banana"], [],
    [], [], ["banana"], [],
    ["banana"], [], [], [],
    ["banana"], [], [], [],
    ["banana"], [], [], [],
    ["banana"], [], [], [],
    ["banana"], [], ["banana"], [],
    [], [], ["banana"], [],
    ["banana"], [], ["banana"], [],
    [], [], ["banana"], [],
    ["banana"], [], [], [],
    ["banana"], [], [], [],
    ["banana"], [], [], [],
    ["banana"], [], [], [],
]