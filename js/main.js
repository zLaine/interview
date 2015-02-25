window.onload = function()
{
    // You might want to start with a template that uses GameStates:
    // https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    "use strict";
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    var interpersonal;
    var programming;
    var planning;
    var speed;
    
    var text;
    var style;
    
    var bgm;
    var bg;
    
    function preload()
    {
        game.load.image('bg', 'assets/sectioned_bg.png');
        
        game.load.audio('bgm', 'assets/Reunited.mp3');
    }
    function create()
    {
        game.world.setBounds(0, 0, 800, 600);
        
        bg = game.add.sprite(0,0, 'bg');
        
        //creating buttons
        
        //playing music
        bgm = game.add.audio('bgm');
        bgm.loop = true;
        bgm.volume = .5;
        bgm.play();
        
        style = { font: "15px Arial", fill: "#ffffff", align: "center" };
        text = game.add.text(16, 16, 'Look around, see if you can see any \nclues that might help you find your hatchling.', style);
        text.fixedToCamera = true;
        
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    }
    function update()
    {
        
    }
    
    
    function eventTrigger(spriteA, spriteB)
    {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
};
