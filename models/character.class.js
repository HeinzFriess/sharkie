class Character extends MovableObject {
    coins = 0;
    poisons = 0;
    slap = false;
    hurt = false;
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

    IMAGES_POISONED = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
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

   
    idle = true;
    
    constructor(){
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
        this.animate();
    }

    animate() {
        let slap = false;
        let bubble = false;
        let count = 0;
        //idle intervall
        setInterval(() => {
            this.move();
            if (this.idle && !slap && !bubble) {
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
            if(this.world.keyboard.D && !bubble) {
                let i = this.currentImage % this.IMAGES_SLAP.length;
                let path = this.IMAGES_SLAP[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                count++;
                if (count == this.IMAGES_SLAP.length) {
                    this.slap = false;
                    count = 0;
                }
           }
           if(this.world.keyboard.SPACE && !slap ) {
                let i = this.currentImage % this.IMAGES_BUBBLE.length;
                let path = this.IMAGES_BUBBLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
                count++;
                if (count == this.IMAGES_BUBBLE.length) {
                    bubble = false;
                    count = 0;
                }

            }
           this.idle = (!this.world.keyboard.UP || !this.world.keyboard.DOWN || !this.world.keyboard.LEFT || !this.world.keyboard.RIGHT);
           this.slap = this.world.keyboard.D;
           this.buble = this.world.keyboard.SPACE;
        }, 1000/10);
        //move intervall
        setInterval(() => {
            this.move();
            if (!this.idle && !slap && !bubble) {
                let i = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;

            }
            this.idle = (!this.world.keyboard.UP || !this.world.keyboard.DOWN || !this.world.keyboard.LEFT || !this.world.keyboard.RIGHT);
           
        }, 1000/30);
        // //hurt intervall
        // setInterval(() => {
        //     if (this.hurt) {
        //         let i = this.currentImage % this.IMAGES_POISONED.length;
        //         let path = this.IMAGES_POISONED[i];
        //         this.img = this.imageCache[path];
        //         this.currentImage++;
        //     }
                      
        // }, 1000/10);
        
    }

    isHurt(){
        this.hurt = true;
        setTimeout(() => {
            this.hurt = false;
        }, 400);
    }

    move(){
        if (this.world.keyboard.UP) {
            if (this.y > -70) {
                this.y = this.y-15;
            this.idle = false;
            }
            
        }
        if (this.world.keyboard.DOWN) {
            if (this.y < 350) {
                this.y = this.y+15;
            this.idle = false;
            }
            
        }
        if (this.world.keyboard.LEFT && this.x > 15) {
            this.x = this.x-15;
            this.idle = false;
            this.otherDirection = true;
            if(this.x < this.world.level.levelEndCamera) this.world.camera_x = -this.x;
        }
        if (this.world.keyboard.RIGHT && this.x < this.world.level.levelEndCharacter) {
            this.x = this.x+15;
            this.idle = false;
            this.otherDirection = false;
            if(this.x < this.world.level.levelEndCamera) this.world.camera_x = -this.x;
        }
    
    }


}