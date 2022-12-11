class Endboss extends MovableObject{
    idle = true;
    x = 2400;
    y = 140;
    height = 220;
    width = 360;

    IMAGES_INTRO = [
        'img/2.Enemy/3FinalEnemy/1.Introduce/1.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/2.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/3.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/4.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/5.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/6.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/7.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/8.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/9.png',
        'img/2.Enemy/3FinalEnemy/1.Introduce/10.png'
    ];

    IMAGES_FLOAT = [
        'img/2.Enemy/3FinalEnemy/2.floating/1.png', 
        'img/2.Enemy/3FinalEnemy/2.floating/2.png',
        'img/2.Enemy/3FinalEnemy/2.floating/3.png',
        'img/2.Enemy/3FinalEnemy/2.floating/4.png',
        'img/2.Enemy/3FinalEnemy/2.floating/5.png',
        'img/2.Enemy/3FinalEnemy/2.floating/6.png',
        'img/2.Enemy/3FinalEnemy/2.floating/7.png',
        'img/2.Enemy/3FinalEnemy/2.floating/8.png',
        'img/2.Enemy/3FinalEnemy/2.floating/9.png',
        'img/2.Enemy/3FinalEnemy/2.floating/10.png',
        'img/2.Enemy/3FinalEnemy/2.floating/11.png',
        'img/2.Enemy/3FinalEnemy/2.floating/12.png',
        'img/2.Enemy/3FinalEnemy/2.floating/13.png',
    ]; 

    IMAGES_ATTACK = [
        'img/2.Enemy/3FinalEnemy/Attack/1.png', 
        'img/2.Enemy/3FinalEnemy/Attack/2.png',
        'img/2.Enemy/3FinalEnemy/Attack/3.png',
        'img/2.Enemy/3FinalEnemy/Attack/4.png',
        'img/2.Enemy/3FinalEnemy/Attack/5.png',
        'img/2.Enemy/3FinalEnemy/Attack/6.png'
    ]; 

    IMAGES_DEAD = [
        'img/2.Enemy/3FinalEnemy/Dead/1.png', 
        'img/2.Enemy/3FinalEnemy/Dead/2.png',
        'img/2.Enemy/3FinalEnemy/Dead/3.png',
        'img/2.Enemy/3FinalEnemy/Dead/4.png',
        'img/2.Enemy/3FinalEnemy/Dead/5.png',
        'img/2.Enemy/3FinalEnemy/Dead/6.png'
    ]; 

    IMAGES_HURT = [
        'img/2.Enemy/3FinalEnemy/Hurt/1.png', 
        'img/2.Enemy/3FinalEnemy/Hurt/2.png',
        'img/2.Enemy/3FinalEnemy/Hurt/3.png',
        'img/2.Enemy/3FinalEnemy/Hurt/4.png'
    ]; 

    constructor(){
        super().loadImage(this.IMAGES_FLOAT[11]);
        this.loadImages(this.IMAGES_FLOAT);
        this.animate();
    }

    animate(){
        setInterval(() => {
            if (this.idle) {
                let i = this.currentImage % this.IMAGES_FLOAT.length;
                let path = this.IMAGES_FLOAT[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
           
        }, 1000/10);
    }
}