class Endboss extends MovableObject {
    idle = true;
    x = 4400;
    y = 140;
    height = 220;
    width = 360;
    hurt = false;
    animationObject;
    reverse = false;

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

    constructor() {
        super();
        this.loadImages(this.IMAGES_INTRO);
        this.loadImages(this.IMAGES_FLOAT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImage(this.IMAGES_INTRO[1]);
        this.animate();
    }


    animate() {
        setDeletableInterval(() => {
            if (this.world.endzone) {
                this.animateIntro();
                this.animateFloat();
            }
        }, 1000 / 10);
        setDeletableInterval(() => {
            if (this.world.endzone) this.animateAttack();
        }, 3000);
    }

    animateIntro() {
        if (!this.world.firstEndzone && !this.sequenz) {
            this.x = 2400;
            this.animationObject = new AnimationObject(this, this.IMAGES_INTRO, 350);
        }
    }
    animateFloat() {
        if (this.world.endzone && this.world.firstEndzone && this.idle && !this.sequenz && !this.world.endboss.energy <= 0) {
            this.playAnimation(this.IMAGES_FLOAT);
        }
    }

    animateAttack() {
        if (!this.hurt && !this.sequenz && !this.world.endboss.energy <= 0) {
            this.animationObject = new AnimationObject(this, this.IMAGES_ATTACK, 300);
            setTimeout(() => {
                this.moveLeft();
            }, 3000);
        }

    }

    isHurt() {
        if (!this.hurt) {
            this.energy -= 25;
            this.hurt = true;
            this.animationObject = new AnimationObject(this, this.IMAGES_HURT, 500);
            if (this.energy <= 0) this.animateDead();
        }
        setTimeout(() => {
            this.hurt = false;
        }, 1200);
    }

    animateDead() {
        this.idle = false;
        this.animationObject = new AnimationObject(this, this.IMAGES_DEAD, 500);
        setDeletableInterval(() => {
            if (!this.sequenz && this.y < 400) this.y += 20;
        }, 200);
        setTimeout(() => {
            this.world.endbossDead = true;
        }, 2000);
    }


}