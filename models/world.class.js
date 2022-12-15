class World {

    character = new Character();
    endboss = new Endboss();
    level = level1;
    statusbars = [
        new StatusBar('energy'),
        new StatusBar('coin'),
        new StatusBar('poison')
    ];
    //statusbar = new StatusBar();

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
        this.addEnemies();
    }
    setWorld() {
        this.character.world = this;
        this.statusbars.forEach(statusbar => {
            statusbar.world = this;
        });

    }

    addEnemies(){
        setInterval(() => {
            this.level.enemies.push(new Fish());
        }, 2000);
    }

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy) && this.character.energy > 0 && !this.character.hurt) {
                    this.character.energy -= 5;
                    this.character.isHurt();
                    
                };
                if (this.character.isColliding(enemy) && this.character.slap) {
                    this.removeElementFromArray(enemy, this.level.enemies);
                };
            });
            this.level.collectables.forEach((collectable) => {
                if (this.character.isColliding(collectable) && collectable instanceof Coin && this.character.coins < 5) {
                    this.character.coins += 1;
                    this.removeElementFromArray(collectable, this.level.collectables);
                };
                if (this.character.isColliding(collectable) && collectable instanceof Poison && this.character.poisons < 5) {
                    this.character.poisons += 1;
                    this.removeElementFromArray(collectable, this.level.collectables);
                };
            });
        }, 100);

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
        this.addObjectToMap(this.endboss);
        this.addObjectsToMap(this.level.enemies);
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.statusbars);


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
        if (mo instanceof (MovableObject)) mo.drawFrame(this.ctx);
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