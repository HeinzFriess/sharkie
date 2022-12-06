class Fish extends MovableObject {
    y = 300;
    height = 40;
    width = 60;
    IMAGES_SWIMM = [];
    
    IMAGES_SWIM_GREEN = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];
    IMAGES_SWIM_CORAL = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/2.swim5.png'
    ];
    IMAGES_SWIM_RED = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/3.swim5.png'
    ];


    constructor(color) {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.setFishColor(color);
        this.y = Math.random() * 450;
        this.x = Math.random() * (720 - 200 +1) + 200;
        this.loadImages(this.IMAGES_SWIMM);
        this.speed = this.speed + Math.random() * 0.5;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMM.length;
            let path = this.IMAGES_SWIMM[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
        this.moveLeft();
        
    }

    setFishColor(color) {
        if(color == 'red') this.IMAGES_SWIMM = this.IMAGES_SWIM_RED;
        if(color == 'coral') this.IMAGES_SWIMM = this.IMAGES_SWIM_CORAL;
        if(color == 'green') this.IMAGES_SWIMM = this.IMAGES_SWIM_GREEN;
    }

}