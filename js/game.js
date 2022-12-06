let canvas;
let world;
let canvasheight = 480;
let canvaswidth = 720;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);


    //ctx.drawImage(character.src, 20, 20, 50, 100);
}

window.addEventListener("keydown", (e) => {
    switch (e.which) {
        case 38:
            keyboard.UP = true;
            break;

        case 40:
            keyboard.DOWN = true;
            break;
        case 37:
            keyboard.LEFT = true;
            break;
        case 39:
            keyboard.RIGHT = true;
            break;
        case 32:
            keyboard.SPACE = true;
            break;
        default:
            break;
    }
});

window.addEventListener("keyup", (e) => {
    switch (e.which) {
        case 38:
            keyboard.UP = false;
            break;

        case 40:
            keyboard.DOWN = false;
            break;
        case 37:
            keyboard.LEFT = false;
            break;
        case 39:
            keyboard.RIGHT = false;
            break;
        case 32:
            keyboard.SPACE = false;
            break;
        default:
            break;
    }
});