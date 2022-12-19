let level1;

function initLevel1() {

    level1 = new Level(
        [
            new Puffer(),
            new Puffer(),
            new Puffer(),
            new Puffer(),
            new Jelly(),
            new Jelly()
        ],
        [
            new Water('img/3.Background/Layers/5.Water/D1.png', -100),
            new Water('img/3.Background/Layers/5.Water/D2.png', 619),
            new Water('img/3.Background/Layers/5.Water/D1.png', 1339),
            new Water('img/3.Background/Layers/5.Water/D2.png', 2059),
            new Water('img/3.Background/Layers/5.Water/D1.png', 2779)
        ],
        [
            new Background('img/3.Background/Layers/4.Fondo2/D1.png', 0),
            new Background('img/3.Background/Layers/3.Fondo1/D1.png', 0),
            new Background('img/3.Background/Layers/2.Floor/D1.png', 0),
            new Background('img/3.Background/Layers/1.Light/1.png', 0),
            new Background('img/3.Background/Layers/4.Fondo2/D2.png', 719),
            new Background('img/3.Background/Layers/3.Fondo1/D2.png', 719),
            new Background('img/3.Background/Layers/2.Floor/D2.png', 719),
            new Background('img/3.Background/Layers/1.Light/2.png', 719),
            new Background('img/3.Background/Layers/4.Fondo2/D2.png', 1439),
            new Background('img/3.Background/Layers/3.Fondo1/D1.png', 1439),
            new Background('img/3.Background/Layers/2.Floor/D1.png', 1439),
            new Background('img/3.Background/Layers/1.Light/1.png', 1439),
            new Background('img/3.Background/Layers/4.Fondo2/D2.png', 2159),
            new Background('img/3.Background/Layers/3.Fondo1/D2.png', 2159),
            new Background('img/3.Background/Layers/2.Floor/D2.png', 2159),
            new Background('img/3.Background/Layers/1.Light/2.png', 2159)
        ],
        [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison(),
            new Poison()
        ],
        2140
    )
}

initLevel1();