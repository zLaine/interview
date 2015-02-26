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
    
    //var bgm;
    var bg;
    
    var statChoosing = true;
    
    var interpersonalUp;
    var interpersonalDown;
    var programmingUp;
    var programmingDown;
    var planningUp;
    var planningDown;
    var speedUp;
    var speedDown;
    
    var leftButtonX = (game.world.centerX - 70);
    var rightButtonX = (game.world.centerX + 70);
    
    function preload()
    {
        game.load.image('bg', 'assets/sectioned_bg.png');
        game.load.image('button', 'assets/button.png');
        
        //game.load.audio('bgm', 'assets/reunited.mp3');
    }
    function create()
    {
        game.world.setBounds(0, 0, 800, 600);
        
        bg = game.add.sprite(0,0, 'bg');
        
        /*//creating buttons
        interpersonalUp = game.add.button(game.world.centerX - 70, 200, 'button', addStat);
        interpersonalDown = game.add.button(game.world.centerX + 70, 200, 'button', subStat);
        
        //playing music
     /*   bgm = game.add.audio('bgm');
        bgm.loop = true;
        bgm.volume = .5;
        bgm.play(); */
        
        style = { font: "15px Arial", fill: "#000000", align: "center" };
        text = game.add.text(16, 16, 'Look around, see if you can see any \nclues that might help you find your hatchling.', style);
        text.fixedToCamera = true;
        
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    }
    function update()
    {
        if(statChoosing == true)
        {
            //creating buttons
            interpersonalUp = game.add.button(leftButtonX, 200, 'button', addStat);
            interpersonalDown = game.add.button(rightButtonX, 200, 'button', subStat);
            programmingUp = game.add.button(leftButtonX, 200, 'button', addStat);
            programmingDown = game.add.button(rightButtonX, 200, 'button', subStat);
            planningUp = game.add.button(leftButtonX, 200, 'button', addStat);
            planningDown = game.add.button(rightButtonX, 200, 'button', subStat);
            speedUp = game.add.button(leftButtonX, 200, 'button', addStat);
            speedDown = game.add.button(rightButtonX, 200, 'button', subStat);
        }
    }
    
    function addStat()
    {
     //   stat++;
        console.log('+ button');
    }
    
    function subStat()
    {
     //   stat--;
        console.log('- button');
    }
    
    function eventTrigger(spriteA, spriteB)
    {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
};
