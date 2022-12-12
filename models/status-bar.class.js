class StatusBar extends DrawableObject{

    x = 20;
    y = 20;
    height = 50;
    width = 250;
    IMAGES_STATUS = [];

    IMAGES_ENERGY = [
        'img/4.Marcadores/orange/0_energy.png',
        'img/4.Marcadores/orange/20_energy.png',
        'img/4.Marcadores/orange/40_energy.png',
        'img/4.Marcadores/orange/60_energy.png',
        'img/4.Marcadores/orange/80_energy.png',
        'img/4.Marcadores/orange/100_energy.png'
    ];

    IMAGES_COINS = [
        'img/4.Marcadores/orange/0_coins.png',
        'img/4.Marcadores/orange/20_coins.png',
        'img/4.Marcadores/orange/40_coins.png',
        'img/4.Marcadores/orange/60_coins.png',
        'img/4.Marcadores/orange/80_coins.png',
        'img/4.Marcadores/orange/100_coins.png'
    ];

    IMAGES_POISON = [
        'img/4.Marcadores/orange/0_poison.png',
        'img/4.Marcadores/orange/20_poison.png',
        'img/4.Marcadores/orange/40_poison.png',
        'img/4.Marcadores/orange/60_poison.png',
        'img/4.Marcadores/orange/80_poison.png',
        'img/4.Marcadores/orange/100_poison.png'
    ];


    constructor(barType){
        super().loadImage('img/4.Marcadores/orange/0_energy.png');
        this.setStatusBar(barType);
        this.loadImages(this.IMAGES_STATUS);
        this.animate();

    }

    animate(){
        setInterval(() => {
            let path = this.IMAGES_STATUS[3];
            this.img = this.imageCache[path];
        }, 250);
    }

    setStatusBar(barType) {
        if(barType == 'energy') this.IMAGES_STATUS = this.IMAGES_ENERGY;
        if(barType == 'coin') {
            this.IMAGES_STATUS = this.IMAGES_COINS
            this.y += 40;
        };
        if(barType == 'poison') {
            this.IMAGES_STATUS = this.IMAGES_POISON
            this.y += 80;
        };
    }
}