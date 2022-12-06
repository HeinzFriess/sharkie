class Background extends MovableObject{
    
    constructor(){
        super().loadImage('img/3. Background/Dark/1.png');
        //this.x = x;
        this.y = canvasheight - this.height;
    }
}