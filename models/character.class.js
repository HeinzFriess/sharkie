class Character extends MovableObject {
    coins = 0;
    poisons = 0;
    slap = false;
    hurt = false;
    hurtE = false;
    buble = false;

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_SLAP = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        //'img/1.Sharkie/4.Attack/Fin slap/2.png',
        //'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_HURT_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ]

    IMAGES_HURT_ELECTRO = [
        'img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/2.png',
        'img/1.Sharkie/5.Hurt/2.Electric shock/3.png'
    ]

    IMAGES_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1/8.png'
    ]

    IMAGES_POISONED = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ]

    IMAGES_ELECTRO = [
        'img/1.Sharkie/6.dead/2.Electro_shock/1.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/2.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/3.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/4.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/5.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/6.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/7.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/8.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/9.png',
        'img/1.Sharkie/6.dead/2.Electro_shock/10.png'
    ]


    idle = true;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.y = 50;
        this.x = 50;
        this.height = 160;
        this.width = 220;
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_SLAP);
        this.loadImages(this.IMAGES_BUBBLE);
        this.loadImages(this.IMAGES_POISONED);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_HURT_ELECTRO);
        this.animate();
    }

    animate() {
        this.slap = false;
        this.buble = false;
        setDeletableInterval(() => {
            this.move();

            if (this.idle && !this.slap && !this.buble && !this.hurt) {
                this.playAnimation(this.IMAGES_IDLE);
            }

            if (this.world.keyboard.D && !this.buble && !this.hurt && this.coins ) {
                this.playAnimationOnce(this.IMAGES_SLAP, this.world.keyboard.D);
                this.coins -= 1;
            }

            if (this.world.keyboard.SPACE && !this.slap && !this.hurt && this.poisons) { 
                this.playAnimation(this.IMAGES_BUBBLE, this.world.keyboard.SPACE);
                if(this.world.throwableObjects.length == 0)this.world.throwableObjects.push(new ThrowableObject(this.x, this.y));
                this.bubble -= 10;
            }

            if (!this.idle && !this.slap && !this.buble && !this.hurt) {
                this.playAnimation(this.IMAGES_SWIM);
            }

            if (this.hurt && !this.slap) {
                this.playAnimation(this.IMAGES_HURT_POISONED);
            }

            if (this.hurtE && !this.slap) {
                this.playAnimation(this.IMAGES_HURT_ELECTRO);
            }

            this.idle = (!this.world.keyboard.UP || !this.world.keyboard.DOWN || !this.world.keyboard.LEFT || !this.world.keyboard.RIGHT);
            this.buble = this.world.keyboard.SPACE;
            this.slap = this.world.keyboard.D;
        }, 1000 / 15);


    }

    isHurt(enemy) {
        setTimeout(() => {
            if (enemy instanceof Puffer && !this.slap) this.hurt = true;
            if (enemy instanceof Jelly) this.hurtE = true;
        }, 300);

        setTimeout(() => {
            this.hurt = false;
            this.hurtE = false;
        }, 400);
    }

    move() {
        if (this.world.keyboard.UP) {
            if (this.y > -70) {
                this.y = this.y - 15;
                this.idle = false;
            }

        }
        if (this.world.keyboard.DOWN) {
            if (this.y < 350) {
                this.y = this.y + 15;
                this.idle = false;
            }

        }
        if (this.world.keyboard.LEFT && this.x > 15) {
            this.x = this.x - 15;
            this.idle = false;
            this.otherDirection = true;
            if (this.x < this.world.level.levelEndCamera) this.world.camera_x = -this.x;
        }
        if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndCharacter) {
            this.x = this.x + 15;
            this.idle = false;
            this.otherDirection = false;
            if (this.x < this.world.level.levelEndCamera) this.world.camera_x = -this.x;
        }

    }


}