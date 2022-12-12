class MovableObject extends DrawableObject{
    speed = 0.15;
    otherDirection = false;
    onCollisionCourse = true;
    offsetY = 0;
    energy = 100;

    drawFrame(ctx){
        if(this instanceof Character || this instanceof Fish){
        ctx.beginPath();
        ctx.lineWidth = '5';
        ctx.strokeStyle = 'blue';
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        }
    }

    moveRight() {

    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    jump() {

    }

    isColliding(obj) {
        return  (this.x + this.width) >= obj.x && this.x <= (obj.x + obj.width) && 
                (this.y + this.offsetY + this.height) >= obj.y &&
                (this.y + this.offsetY) <= (obj.y + obj.height) && 
                obj.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.

}

    
}