window.onload = function()
{
    // You might want to start with a template that uses GameStates:
    // https://github.com/photonstorm/phaser/tree/master/resources/Project%20Templates/Basic
    "use strict";
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    var skillPoints = 20;
    var maxSkillPoints = 20;
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
    var skillText;
    var done;
    
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
    var doneButton;
    
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
        style = { font: "15px Arial", fill: "#000000", align: "left" };
        story = game.add.text(175, 85, 'The time has come  to apply for your first industry job!  All that time spent working on your\n degree, you improved your skills -- where did you focus? You\'ve got 20 skillpoints to spend, each \nwill give you 5 experience points in a given area.  Spend them wisely, as they will each effect \nhow you perform in your interview.' , style);
        story.fixedToCamera = true;
        iText = game.add.text(400, 175, 'Interpersonal: 0', style);
        prText = game.add.text(400, 250, 'Programming: 0', style);
        plText = game.add.text(400, 325, 'Planning: 0', style);
        sText = game.add.text(400, 400, 'Speed: 0', style);
        skillText = game.add.text(16, 85, 'Skill points: 20', style);
        //done = game.add.text(400, 525, 'Done', style);
        
        
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        
        interpersonalUp = game.add.button(550, 200, 'button', addIStat);
        interpersonalDown = game.add.button(250, 200, 'button', subIStat);
        programmingUp = game.add.button(550, 275, 'button', addPrStat);
        programmingDown = game.add.button(250, 275, 'button', subPrStat);
        planningUp = game.add.button(550, 350, 'button', addPlStat);
        planningDown = game.add.button(250, 350, 'button', subPlStat);
        speedUp = game.add.button(550, 425, 'button', addSStat);
        speedDown = game.add.button(250, 425, 'button', subSStat); 
        
        doneButton = game.add.button(400, 525, 'button', statsDone);
    }
    function update()
    {
       /* if(statChoosing == true)
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
            
            doneButton = game.add.button(400, 525, 'button', statsDone);
            done = game.add.text(435, 535, 'Done', style);
        }
        
        else(statChoosing == false)
        {
            game.world.remove(interpersonalUp);
            //interpersonalUp.destroy();
            //interpersonalDown.destroy();
        } */
        
    }
    
    function statsDone()
    {
        statChoosing = false;
        console.log('StatChoosing: ' , statChoosing);
        
        interpersonalUp.kill();
    }
    
    function addIStat()
    {
        if(skillPoints > 0)
        {
            skillPoints--;
            interpersonal++;
            if(skillPoints < 0)
            {
                skillPoints = 0;
            }
            iText.text =  'Interpersonal: ' + interpersonal;
            skillText.text = 'Skill points: ' + skillPoints;
            console.log('Interpersonal: ' , interpersonal);
            console.log('StatChoosing: ' , statChoosing);
        }
    }
    
    function subIStat()
    {
        skillPoints++;
        interpersonal--;
        if(interpersonal < 0)
        {
            interpersonal = 0;
        }
        if(skillPoints > maxSkillPoints)
        {
            skillPoints = maxSkillPoints;
        }
        iText.text =  'Interpersonal: ' + interpersonal;
        skillText.text = 'Skill points: ' + skillPoints;
        console.log('Interpersonal: ' , interpersonal);
    }
    
    function addPrStat()
    {
        if(skillPoints > 0)
        {
            skillPoints--;
            programming++;
            if(skillPoints < 0)
            {
                skillPoints = 0;
            }
            prText.text =  'Programming: ' + programming;
            skillText.text = 'Skill points: ' + skillPoints;
            console.log('programming: ' , programming);
        }
    }
    function subPrStat()
    {
        skillPoints++;
        programming--;
        if(programming < 0)
        {
            programming = 0;
        }
        if(skillPoints > maxSkillPoints)
        {
            skillPoints = maxSkillPoints;
        }
        prText.text =  'Programming: ' + programming;
        skillText.text = 'Skill points: ' + skillPoints;
        console.log('programming: ' , programming);
    }
    
    function addPlStat()
    {
        if(skillPoints > 0)
        {
            skillPoints--;
            planning++;
            if(skillPoints < 0)
            {
                skillPoints = 0;
            }
            plText.text =  'Planning: ' + planning;
            skillText.text = 'Skill points: ' + skillPoints;
            console.log('planning: ' , planning);
        }
    }
    function subPlStat()
    {
        skillPoints++;
        planning--;
        if(planning < 0)
        {
            planning = 0;
        }
        if(skillPoints > maxSkillPoints)
        {
            skillPoints = maxSkillPoints;
        }
        plText.text =  'Planning: ' + planning;
        skillText.text = 'Skill points: ' + skillPoints;
        console.log('planning: ' , planning);
    }
    
    function addSStat()
    {
        if(skillPoints > 0)
        {
            skillPoints--;
            speed++;
            if(skillPoints < 0)
            {
                skillPoints = 0;
            }
            sText.text =  'Speed: ' + speed;
            skillText.text = 'Skill points: ' + skillPoints;
            console.log('speed: ' , speed);
        }
    }
    function subSStat()
    {
        skillPoints++;
        speed--;
        if(speed < 0)
        {
            speed = 0;
        }
        if(skillPoints > maxSkillPoints)
        {
            skillPoints = maxSkillPoints;
        }
        sText.text =  'Speed: ' + speed;
        skillText.text = 'Skill points: ' + skillPoints;
        console.log('speed: ' , speed);
    }
    
    function eventTrigger(spriteA, spriteB)
    {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB); 
    }
};
