class Background extends MovableObject{
    height = 480;
    width = 720;
    y = 0;
    
    constructor(imgSrc, xAchse){
        super().loadImage(imgSrc);
        this.x = xAchse;
    }
}