class Poison extends CollectableObject{
    height = 60;
    width = 40;
    IMAGES_POISON = [
        'img/4.Marcadores/Posión/Animada/1.png',
        'img/4.Marcadores/Posión/Animada/2.png',
        'img/4.Marcadores/Posión/Animada/3.png',
        'img/4.Marcadores/Posión/Animada/4.png',
        'img/4.Marcadores/Posión/Animada/5.png',
        'img/4.Marcadores/Posión/Animada/6.png',
        'img/4.Marcadores/Posión/Animada/7.png',
        'img/4.Marcadores/Posión/Animada/8.png'
    ];

    constructor(){
        super().img = 'img/4.Marcadores/1. Coins/1.png';
        this.IMAGES_ARRAY = this.IMAGES_POISON;
        this.loadImages(this.IMAGES_ARRAY);
        this.animate();
        
    }
}