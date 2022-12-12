class Character extends MovableObject {
    
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
        'img/1.Sharkie/4.Attack/Fin slap/2.png',
        'img/1.Sharkie/4.Attack/Fin slap/3.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

   
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
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.move();
            if (this.idle) {
                let i = this.currentImage % this.IMAGES_IDLE.length;
                let path = this.IMAGES_IDLE[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }if(this.world.keyboard.D) {
                let i = this.currentImage % this.IMAGES_SLAP.length;
                let path = this.IMAGES_SLAP[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            
           }
           this.idle = (!this.world.keyboard.UP || !this.world.keyboard.DOWN || !this.world.keyboard.LEFT || !this.world.keyboard.RIGHT);
        }, 1000/10);
        setInterval(() => {
            this.move();
            if (!this.idle) {
                let i = this.currentImage % this.IMAGES_SWIM.length;
                let path = this.IMAGES_SWIM[i];
                this.img = this.imageCache[path];
                this.currentImage++;

            }
            this.idle = (!this.world.keyboard.UP || !this.world.keyboard.DOWN || !this.world.keyboard.LEFT || !this.world.keyboard.RIGHT);
           
        }, 1000/30);
        
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