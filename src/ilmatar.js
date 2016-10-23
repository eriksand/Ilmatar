var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var platforms;
var player;

function preload() {
    game.load.image('background', 'res/img/background.png');
    game.load.image('q', 'res/img/q.png');
    game.load.image('ground', 'res/img/ground.png');
    game.load.image('star', 'res/img/star.png');
    game.load.spritesheet('gubbe', 'res/img/gubbe.png', 50, 50)
}

function create() {
    game.add.sprite(0, 0, 'background');
    game.physics.startSystem(Phaser.Physics.ARCADE);
    platforms = game.add.group()
    platforms.enableBody = true;
    var ground = platforms.create(0, game.world.height - 50, 'ground');
    ground.scale.setTo(4, 1);
    ground.body.immovable = true;
    var ledge = platforms.create(400, 400, 'ground');
    ledge = platforms.create(0, 250, 'ground');
    ledge.body.immovable = true;
    game.add.sprite(20, 20, 'star');
    
    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'gubbe');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1], 10, true);
    player.animations.add('right', [2,3], 10, true);
}

function update() {
    var hitPlatform = game.physics.arcade.collide(player, platforms);
}
