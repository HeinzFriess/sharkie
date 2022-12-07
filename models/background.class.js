class Background extends MovableObject{
    
    constructor(imgSrc, xAchse){
        super().loadImage(imgSrc);
        this.x = xAchse;
    }
}