class Coin extends CollectableObject{
    height = 40;
    width = 40;
    IMAGES_COINS = [
        'img/4.Marcadores/1. Coins/1.png',
        'img/4.Marcadores/1. Coins/2.png',
        'img/4.Marcadores/1. Coins/3.png',
        'img/4.Marcadores/1. Coins/4.png'
    ];

    constructor(){
        super().loadImage('img/4.Marcadores/1. Coins/1.png');
        this.IMAGES_ARRAY = this.IMAGES_COINS;
        this.loadImages(this.IMAGES_ARRAY);
        this.animate();
        
    }
}