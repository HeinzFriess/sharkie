class Jelly extends MovableObject {
    y = 0;
    height = 60;
    width = 60;
    IMAGES_SWIMM = [];
    speed = 0.05;
    
    IMAGES_SWIM_YELLOW = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Yellow 4.png'
    ];
    IMAGES_SWIM_LILA = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    IMAGES_SWIM_GREEN = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Green 4.png'
    ];
    IMAGES_SWIM_PINK = [
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jelly fish/Súper dangerous/Pink 4.png'
    ];


    constructor(world) {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Yellow 1.png');
        this.setFishColor();
        this.x = Math.random() * 3000 + 300;
        this.speed = this.speed + Math.random() * 0.2;
        this.loadImages(this.IMAGES_SWIMM);
        this.world = world;
        this.animate();
    }

    animate() {
        setDeletableInterval(() => {
            this.playAnimation(this.IMAGES_SWIMM);
        }, 400);
        this.moveDown();
        
    }

    setFishColor() {
        let random = Math.random() * 4;
        if(random < 1 ) this.IMAGES_SWIMM = this.IMAGES_SWIM_YELLOW;
        else if(random < 2 ) this.IMAGES_SWIMM = this.IMAGES_SWIM_LILA;
        else if (random < 3 ) this.IMAGES_SWIMM = this.IMAGES_SWIM_GREEN;
        else this.IMAGES_SWIMM = this.IMAGES_SWIM_PINK;
    }

}