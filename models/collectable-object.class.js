class CollectableObject extends DrawableObject{
    
    onCollisionCourse = true;
    objectName = '';
    IMAGES_ARRAY = [];
    IMAGES_COINS = [];
    IMAGES_POISON = [];

    constructor(){
        super();
        this.setRandomPosition();
        //this.animate();
    }

    animate(){
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_ARRAY.length;
            let path = this.IMAGES_ARRAY[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }

    setRandomPosition(){
        this.y = Math.random() * 450;
        this.x = 300 + Math.random() * 3000;
    }
}