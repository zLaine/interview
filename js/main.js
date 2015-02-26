window.onload = function()
{
    // You might want to start with a template that uses GameStates:
    // https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    "use strict";
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    var skillPoints = 20;
    var interpersonal = 0;
    var programming = 0;
    var planning = 0;
    var speed = 0;
    
    var style;
    var story;
    var iText;
    var prText;
    var plText;
    var sText;
    
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
        
        //text set up
        style = { font: "15px Arial", fill: "#000000", align: "center" };
        story = game.add.text(175, 85, 'Look around, see if you can see any \nclues that might help you find your hatchling.', style);
        story.fixedToCamera = true;
        iText = game.add.text(400, 175, 'Interpersonal: ', style);
        prText = game.add.text(400, 250, 'Programming: ', style);
        plText = game.add.text(400, 325, 'Algorithm Development: ', style);
        sText = game.add.text(400, 400, 'Speed: ', style);
        
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
    }
    function update()
    {
        if(statChoosing == true)
        {
            //creating buttons
            interpersonalUp = game.add.button(550, 200, 'button', addIStat);
            interpersonalDown = game.add.button(250, 200, 'button', subIStat);
            programmingUp = game.add.button(550, 275, 'button', addPrStat);
            programmingDown = game.add.button(250, 275, 'button', subPrStat);
            planningUp = game.add.button(550, 350, 'button', addPlStat);
            planningDown = game.add.button(250, 350, 'button', subPlStat);
            speedUp = game.add.button(550, 425, 'button', addSStat);
            speedDown = game.add.button(250, 425, 'button', subSStat); 
            
            
        }
    }
    
    function addIStat()
    {
        skillPoints--;
        interpersonal++;
        iText.text =  'Interpersonal: ' + interpersonal;
        console.log('Interpersonal: ' , interpersonal);
    }
    
    function subIStat()
    {
        skillPoints++;
        interpersonal--;
        iText.text =  'Interpersonal: ' + interpersonal;
        console.log('Interpersonal: ' , interpersonal);
    }
    
    function addPrStat()
    {
        skillPoints--;
        programming++;
        prText.text =  'Programming: ' + programming;
        console.log('programming: ' , programming);
    }
    function subPrStat()
    {
        skillPoints++;
        programming--;
        prText.text =  'Programming: ' + programming;
        console.log('programming: ' , programming);
    }
    
    function addPlStat()
    {
        skillPoints--;
        planning++;
        plText.text =  'Algorithm Development: ' + planning;
        console.log('planning: ' , planning);
    }
    function subPlStat()
    {
        skillPoints++;
        planning--;
        plText.text =  'Algorithm Development: ' + planning;
        console.log('planning: ' , planning);
    }
    
    function addSStat()
    {
        skillPoints--;
        speed++;
        sText.text =  'Speed: ' + speed;
        console.log('speed: ' , speed);
    }
    function subSStat()
    {
        skillPoints++;
        speed--;
        sText.text =  'Speed: ' + speed;
        console.log('speed: ' , speed);
    }
    
    function eventTrigger(spriteA, spriteB)
    {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
};
