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
            this.playAnimation(this.IMAGES_ARRAY);
        }, 100);
    }

    setRandomPosition(){
        this.y = Math.random() * 450;
        this.x = 300 + Math.random() * 3000;
    }
}