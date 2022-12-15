class StatusBar extends DrawableObject{

    x = 20;
    y = 10;
    height = 50;
    width = 250;
    IMAGES_STATUS = [];
    barType;

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
        this.barType = barType
        this.setStatusBar(this.barType);
        this.loadImages(this.IMAGES_STATUS);
        this.animate();

    }

    animate(){
        setInterval(() => {
            let picNumber = 0;
            if(this.barType == 'energy') picNumber = this.calulateEnergyLevel();
            if(this.barType == 'coin') picNumber = this.world.character.coins;
            if(this.barType == 'poison') picNumber = this.world.character.poisons;
            let path = this.IMAGES_STATUS[picNumber];
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

    calulateEnergyLevel(){
        if (this.world.character.energy > 80) return 5;
        else if (this.world.character.energy > 60) return 4;
        else if (this.world.character.energy > 40) return 3;
        else if (this.world.character.energy > 20) return 2;
        else if (this.world.character.energy > 10) return 1;                    
        else return 0;
    }

}