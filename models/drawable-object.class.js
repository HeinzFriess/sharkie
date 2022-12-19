class DrawableObject{
    imageCache = {};
    currentImage = 0;
    world;
    x = 80;
    y = 60;
    img;
    height = 100;
    width = 200;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }
    
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });

    }
    
    playAnimation(array){
        let i = this.currentImage % array.length;
        let path = array[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}