class World {

    character = new Character();
    endboss = new Endboss();
    level = level1;
    statusbars = [
        new StatusBar('energy'),
        new StatusBar('coin'),
        new StatusBar('poison')
    ];
    throwableObjects = [new ThrowableObject(2000,400)];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    endbossDead = false;
    characterDead = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
        this.keyboard = keyboard;
        this.setWorld();
        this.checkHit();
        this.checkCollisions();
        this.clearElements();
        //this.addEnemies();
    }
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
        this.statusbars.forEach(statusbar => {
            statusbar.world = this;
        });

    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && this.character.energy > 0 && !this.character.hurt) {
                    this.character.energy -= 5;
                    this.character.isHurt(enemy);
                    
                };
            });
            this.level.collectables.forEach((collectable) => {
                if (this.character.isColliding(collectable) && collectable instanceof Coin && this.character.coins < 100) {
                    this.character.coins += 10;
                    this.removeElementFromArray(collectable, this.level.collectables);
                };
                if (this.character.isColliding(collectable) && collectable instanceof Poison && this.character.poisons < 100) {
                    this.character.poisons += 10;
                    this.removeElementFromArray(collectable, this.level.collectables);
                };
            });
        }, 100);

    }

    checkHit(){
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isHit(enemy) && this.character.slap && this.character.coins > 0) {
                    this.removeElementFromArray(enemy, this.level.enemies);
                };
                this.throwableObjects.forEach((bubble) => {
                    if (bubble.isHit(enemy)) {
                        this.removeElementFromArray(enemy, this.level.enemies);
                        this.character.poisons -=5;
                    }
                    if (bubble.isHit(this.endboss)) this.endboss.isHurt();
                });

            });           
        }, 80);
    }

    clearElements(){
        setInterval(() => {
            this.level.enemies.forEach(enemie => {
                if (enemie.x < -50 || enemie.y > 500) this.removeElementFromArray(enemie,this.level.enemies)
            });
            this.throwableObjects.forEach(bubble => {
                if (bubble.y > 500) this.removeElementFromArray(bubble,this.throwableObjects)
            });
        }, 1000);
       
    }

    removeElementFromArray(element, array) {
        let index = array.indexOf(element);
        array.splice(index, 1);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.waters);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectToMap(this.character);
        this.addObjectsToMap(this.level.collectables);
        if(!this.endbossDead)this.addObjectToMap(this.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.statusbars);


        let self = this;
        requestAnimationFrame(function () { self.draw(); });

    }

    addObjectsToMap(objects) {
        
        if(objects) {objects.forEach(o => {
            this.addObjectToMap(o);
        });}
    }

    addObjectToMap(mo) {
        if (mo.otherDirection) this.flipImage(mo);
        mo.draw(this.ctx);
        //if (mo instanceof MovableObject) mo.drawFrame(this.ctx);
        if (mo.otherDirection) this.flipImageBack(mo);
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }


};