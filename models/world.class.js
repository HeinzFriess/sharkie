class World {

    character = new Character();
    enemies = [
        new Fish('green'),
        new Fish('coral'),
        new Fish('red')
    ];
    backgrounds = [
        new Background('img/3.Background/Layers/1.Light/1.png',0),
        new Background('img/3.Background/Layers/2.Floor/D1.png',0)
    ]
    
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
        
    }
    setWorld(){
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x,0);
        this.ctx.drawImage(this.fixedbackground.img, 0, 0, 1440, 480)
        this.addObjectToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.ctx.translate(-this.camera_x,0);

        let self = this;
        requestAnimationFrame(function () { self.draw(); });

    }
    
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addObjectToMap(o);
        });
    }

    addObjectToMap(mo){
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.width,0);
            this.ctx.scale(-1,1);
            mo.x = mo.x * -1;
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }


};