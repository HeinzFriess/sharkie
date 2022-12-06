class World {

    character = new Character();
    enemies = [
        new Fish('green'),
        new Fish('coral'),
        new Fish('red')
    ];
    fixedbackground = new Background();
    
    canvas;
    ctx;
    keyboard;

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
        this.ctx.drawImage(this.fixedbackground.img, 0, 0, canvaswidth, canvasheight)
        this.addObjectToMap(this.character);
        this.addObjectsToMap(this.enemies);


        let self = this;
        requestAnimationFrame(function () { self.draw(); });

    }
    
    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addObjectToMap(o);
        });
    }

    addObjectToMap(mo){
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }


};