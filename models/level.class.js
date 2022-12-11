class Level{
    enemies;
    waters;
    backgrounds;
    levelEndCamera;
    levelEndCharacter

    constructor(enemies,waters,backgrounds,levelEndCamera){
        this.enemies = enemies;
        this.waters = waters;
        this.backgrounds = backgrounds;
        this.levelEndCamera = levelEndCamera;
        this.levelEndCharacter = this.levelEndCamera + 520;
    }
}