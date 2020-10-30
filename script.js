const myGameArea = {
    canvas: document.createElement('canvas'),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },

    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
};

class Component {
    constructor(_width, _height, _color, _x, _y) {
        this.width = _width;
        this.height = _height;
        this.color = _color;
        this.x = _x;
        this.y = _y;
        this.speedX = 0;
        this.speedY = 0;
    };

    update() {
        const ctx = myGameArea.context;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    };
};

const player = new Component(30, 30, '#fcacf1', 0, 110);

const updateGameArea = () => {
    myGameArea.clear();
    player.newPos();
    player.update();
};

myGameArea.start()

document.addEventListener = ('keydown', (e) => {
    switch (e.keycode) {
        case 38:
            player.speedY -= 1;
            break;
        case 40:
            player.speedY += 1;
            break;
        case 37:
            player.speedX -= 1;
            break;
        case 39:
            player.speedX += 1;
            break;
    };
});

document.addEventListener = ('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;
});


