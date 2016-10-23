var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('background', 'res/img/background.png');
    game.load.image('q', 'res/img/q.png');
}

function create() {
    game.add.sprite(0, 0, 'background');
    game.add.sprite(20, 20, 'q');
}

function update() {
}
