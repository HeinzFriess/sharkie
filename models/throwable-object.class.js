class ThrowableObject extends MovableObject{
    height = 50;
    width = 50;

    constructor(x,y){
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x  + 180;
        this.y = y + 70;
        this.throw();
    }

    throw(){
        this.speedY = 10;
        this.moveRight();
        this.applyGravity();
       
    }
}