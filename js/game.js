let canvas;
let world;
let canvasheight = 480;
let canvaswidth = 720;

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    
    
    //ctx.drawImage(character.src, 20, 20, 50, 100);
}