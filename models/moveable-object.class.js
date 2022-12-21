class MovableObject extends DrawableObject{
    speed = 0.15;
    speedY = 0;
    acceleration = 1.5;
    otherDirection = false;
    onCollisionCourse = true;
    offsetY = 0;
    energy = 100;

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Puffer){
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

    moveRight() {
        setDeletableInterval(() => {
            this.x += this.speed * 50;
        }, 1000 / 40);
    }

    moveLeft() {
        setDeletableInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    moveDown() {
        setDeletableInterval(() => {
            this.y += this.speed;
        }, 1000 / 30);
    }

    jump() {

    }

    isColliding(obj) {
        return  (this.x + this.width -25 ) >= obj.x && this.x <= (obj.x + obj.width) && 
                (this.y + this.offsetY + this.height - 25) >= obj.y &&
                (this.y + this.offsetY) <= (obj.y + obj.height) && 
                obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

    }
    
    isHit(obj) {
        return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
                (this.y + this.offsetY + this.height) >= obj.y &&
                (this.y + this.offsetY) <= (obj.y + obj.height);
    }

    applyGravity(){
        setDeletableInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 20);
    }

    isAboveGround(){
        return this.y < 500;
    }

    
}