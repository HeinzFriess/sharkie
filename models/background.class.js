class Background extends MovableObject{
    
    constructor(img,x){
        super().loadImage(img);
        this.x = x;
        this.y = canvasheight - this.height;
    }
}