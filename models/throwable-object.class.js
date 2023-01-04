class ThrowableObject extends MovableObject{
    height = 50;
    width = 50;

    constructor(x,y,otherDirection){
        super().loadImage('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        if (otherDirection) {
            this.x = x;
        }
        else this.x = x  + 180;
        this.y = y + 70;
        this.throw(otherDirection);
    }

    throw(otherDirection){
        this.speedY = 10;
        if (otherDirection) {
            this.moveLeft();
        }
        else this.moveRight();
        this.applyGravity();
       
    }

    moveLeft() {
        setDeletableInterval(() => {
            this.x -= this.speed * 50;
        }, 1000 / 40);
    }
}