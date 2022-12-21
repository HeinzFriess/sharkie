class Water extends MovableObject{
    height = 480;
    width = 720;
    y = 0;
    
    constructor(imgSrc, xAchse){
        super().loadImage(imgSrc);
        this.x = xAchse;
        this.animate();
    }

    animate() {
        let count = 0;
        let up = true;
        setDeletableInterval(() => {
            if(up){
                this.x += 0.8;
                count++;
            }
            if(count == 60) up = false;
            if(!up){
                this.x -= 0.8;
                count--;
            }
            if(count == 0) up = true;
        }, 80);        
    }
}