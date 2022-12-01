class MovableObject {
    x = 120;
    y = 100;
    img;
    height = 100;
    width = 200;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Move right');
    }

    moveLeft() {

    }

    jump() {

    }

}