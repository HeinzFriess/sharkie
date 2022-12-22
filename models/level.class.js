class Level{
    //enemies;
    waters;
    backgrounds;
    //collectables;
    levelEndCamera;
    levelEndCharacter;

    //constructor(enemies,waters,backgrounds,collectables,levelEndCamera){
    constructor(waters,backgrounds,levelEndCamera){
        //this.enemies = enemies;
        this.waters = waters;
        this.backgrounds = backgrounds;
        //this.collectables = collectables;
        this.levelEndCamera = levelEndCamera;
        this.levelEndCharacter = this.levelEndCamera + 520;
    }
}