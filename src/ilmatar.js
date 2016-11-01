var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var platforms;
var player;

function preload() {
    game.load.tilemap('map', 'res/maps/map1.csv', null, Phaser.Tilemap.CSV);
    game.load.image('tiles', 'res/maps/simpleTileset64x64.png');
    game.load.image('background', 'res/img/oldPaper.png');
    
}

var map;
var layer;
var cursors;

function create() {
    game.add.sprite(0,0,'background');
    map = game.add.tilemap('map', 64, 64);
    //  Now add in the tileset
    map.addTilesetImage('tiles');
    layer = map.createLayer(0);
    
    // The player and its settings
    player = game.add.sprite(32, game.world.height - 150, 'gubbe');

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1], 10, true);
    player.animations.add('right', [2,3], 10, true);
}

function update() {
    var cursors = game.input.keyboard.createCursorKeys();
    //  Reset the players velocity (movement)
    //  Reset the players velocity (movement)

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

}
