class World {

    character = new Character();
    endboss = new Endboss();
    level = level1;
    //enemies = level1.enemies;
    //backgrounds = level1.backgrounds;

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.checkCollisions();
    }
    setWorld() {
        this.character.world = this;
    }

    checkCollisions(){
        setInterval(() => {
            this.level.enemies.forEach((enemy)=> {
                if(this.character.isColliding(enemy)){
                    this.character.energy -= 5;
                    console.log(this.character.energy);
                }
            })
        }, 100);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.waters);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectToMap(this.character);
        this.addObjectToMap(this.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () { self.draw(); });

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addObjectToMap(o);
        });
    }

    addObjectToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
    }

    flipImage(mo){
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo){
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


};