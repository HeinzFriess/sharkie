class World {

    character = new Character();
    enemies = [
        new Fish(),
        new Fish(),
        new Fish()
    ];
    background = new Background();
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.height, enemy.width);
            if(enemy.x == 0) enemy.x = 500;
            enemy.x--;
        });

        this.ctx.drawImage(this.background.img, this.background.x, this.background.y, this.background.width, this.background.height)
        this.background.x--;
        if(this.background.x == 0) this.background.x = 720;


        let self = this;
        requestAnimationFrame(function () { self.draw(); });


    }
}