let canvas;
let world;
let canvasheight = 480;
let canvaswidth = 720;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    addEnemies();

    //ctx.drawImage(character.src, 20, 20, 50, 100);
}

function initLevel1(){
    init();
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
}

function addEnemies(){
    setInterval(() => {
        if (world.level.enemies.length < 20) world.level.enemies.push(new Puffer());
        if (world.level.enemies.length < 20) world.level.enemies.push(new Jelly());
    }, 2000);
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
        case 68:
            keyboard.D = true;
            break;
        case 49:
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
        case 68:
            keyboard.D = false;
            break;
        case 49:
            keyboard.SPACE = false;
            break;
        default:
            break;
    }
});