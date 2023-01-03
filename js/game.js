let canvas;
let world;
let canvasheight = 480;
let canvaswidth = 720;
let keyboard = new Keyboard();

/**
 * inititalise the main game elements
 */
function init() {
    canvas = document.getElementById('canvas');
    canvas.classList.remove('d-none');
    world = new World(canvas, keyboard);
    addEnemies();
    addCollectables();
}


/**
 * initialise the first level
 */
function initLevel1() {
    init();
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('endScreen').classList.add('d-none');
    bindButtonPressEvents();
}

/**
 * add new Enemies to the Map
 */
function addEnemies() {
    setDeletableInterval(() => {
        if (world.enemies.length < 20) world.enemies.push(new Puffer());
        if (world.enemies.length < 20) world.enemies.push(new Jelly());
    }, 2000);
}

/**
 * add new Coins and Bottles of Poison to the Map
 */
function addCollectables() {
    setDeletableInterval(() => {
        if (world.collectables.length < 20) world.collectables.push(new Coin());
        if (world.collectables.length < 20) world.collectables.push(new Poison());
    }, 2000);
}

/**
 * shows the endscreen depending on the given parameter
 * @param {boolean} playerHasWone 
 */
function endOfGame(playerHasWone) {
    let element = document.getElementById('endScreenPic')
    if (!playerHasWone) {
        element.src = 'img/6.Botones/Tittles/Game Over/Recurso 12.png';
    }
    else{
        element.src = 'img/6.Botones/Tittles/You win/Mesa de trabajo 1.png';
    }
    document.getElementById('canvas').classList.add('d-none');
    document.getElementById('endScreen').classList.remove('d-none');
}

/**
 * is restarting the game
 */
function restartGame() {
    init();
    document.getElementById('endScreen').classList.add('d-none');
}

/**
 * adds the keyboard eventlisteners
 */
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

/**
 * adds the touch eventlisteners
 */
function bindButtonPressEvents(){
    document.getElementById('btnLeft').addEventListener('touchstart',(e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('btnRight').addEventListener('touchstart',(e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('btnUp').addEventListener('touchstart',(e) => {
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('btnDown').addEventListener('touchstart',(e) => {
        e.preventDefault();
        keyboard.DOWN = true;
    });
    document.getElementById('btnSlap').addEventListener('touchstart',(e) => {
        e.preventDefault();
        keyboard.D = true;
    });
    document.getElementById('btnBubble').addEventListener('touchstart',(e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend',(e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });
    document.getElementById('btnRight').addEventListener('touchend',(e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });
    document.getElementById('btnUp').addEventListener('touchend',(e) => {
        e.preventDefault();
        keyboard.UP = false;
    });
    document.getElementById('btnDown').addEventListener('touchend',(e) => {
        e.preventDefault();
        keyboard.DOWN = false;
    });
    document.getElementById('btnSlap').addEventListener('touchend',(e) => {
        e.preventDefault();
        keyboard.D = false;
    });
    document.getElementById('btnBubble').addEventListener('touchend',(e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

}