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
    
    var interviewScore = 0;
    
    var style;
    var story;
    var iText;
    var prText;
    var plText;
    var sText;
    var skillText;
    
    var option1Text;
    var option2Text;
    var option3Text;
    
    //var bgm;
    var bg;
    
//    var statChoosing = true;
    
    var interpersonalUp;
    var interpersonalDown;
    var programmingUp;
    var programmingDown;
    var planningUp;
    var planningDown;
    var speedUp;
    var speedDown;
    var doneButton;
    var option1;
    var option2;
    var option3;
    
    var firstInteraction = false;
    var secondInteraction = false;
    
    function preload()
    {
        game.load.image('bg', 'assets/sectioned_bg.png');
        game.load.image('button', 'assets/button.png');
        
        game.load.spritesheet('doneButton', 'assets/doneButton.png', 111, 40, 3);
        game.load.spritesheet('option1', 'assets/option1.png', 111, 40, 3);
        game.load.spritesheet('option2', 'assets/option2.png', 111, 40, 3);
        game.load.spritesheet('option3', 'assets/option3.png', 111, 40, 3);
        
        //game.load.audio('bgm', 'assets/reunited.mp3');
    }
    function create()
    {
        game.world.setBounds(0, 0, 800, 600);
        
        bg = game.add.sprite(0,0, 'bg');
        
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
        
        
        game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
        
        //creating buttons
        interpersonalUp = game.add.button(550, 200, 'button', addIStat);
        interpersonalDown = game.add.button(250, 200, 'button', subIStat);
        programmingUp = game.add.button(550, 275, 'button', addPrStat);
        programmingDown = game.add.button(250, 275, 'button', subPrStat);
        planningUp = game.add.button(550, 350, 'button', addPlStat);
        planningDown = game.add.button(250, 350, 'button', subPlStat);
        speedUp = game.add.button(550, 425, 'button', addSStat);
        speedDown = game.add.button(250, 425, 'button', subSStat); 
        
        doneButton = game.add.button(400, 530, 'doneButton', statsDone, this, 1, 0, 2);
    }
    function update()
    {
        
    }
    
    function statsDone()
    {
        if(skillPoints == 0)
        {
            interpersonalUp.kill();
            interpersonalDown.kill();
            programmingUp.kill();
            programmingDown.kill();
            planningUp.kill();
            planningDown.kill();
            speedUp.kill();
            speedDown.kill();
            doneButton.kill();
            
            iText.x = 16;
            prText.x = 16;
            plText.x = 16;
            sText.x = 16;
            
            story.text = 'You arrive early and introduce yourself to the manager who\'ll be conducting your interview.';
            option1 = game.add.button(175, 530, 'option1', option1Results, this, 1, 0, 2);
            option1Text = game.add.text(175, 175, 'Option 1: "Hi."', style);
            firstInteraction = true;
            
            if(interpersonal >= 20)
            {
                option2 = game.add.button(325, 530, 'option2', option2Results, this, 1, 0, 2);
                option2Text = game.add.text(175, 200, 'Option 2: "Hello!  It\'s nice to meet you!', style);
            }
            if(interpersonal >= 30)
            {
                option3 = game.add.button(475, 530, 'option3', option3Results, this, 1, 0, 2);
                option3Text = game.add.text(175, 225, 'Option 3: "Hi, it\'s nice to meet you. Thank you for seeing me!', style);
            }
        }
    }
    
    function option1Results()
    {
        if (firstInteraction == true && secondInteraction == false)
        {
            secondInteraction = true;
            story.text = 'You go into her office and both take a seat.  You spend the next 20 minutes talking about your \npast projects and learning the details of the job you\'re applying for.';
            option1Text.text = 'Option 1: Talk briefly about your in class projects.';
            
            if(programming >= 40)
            {
                option2Text.text = 'Option 2: Go into detail about your personal projects.';
            }
            if(interpersonal >= 50)
            {
                option3Text.text = 'Option 3: Control the conversation to talk more about the job you\'re interviewing for.\n  Persuade her about what an excellent addition you\'ll make to her team.';
            }
        }
        
        else if (secondInteraction == true)
        {
            option2Text.kill();
            option3Text.kill();
            story.text = 'Eventually, the programming portion of the interview comes.  You\'re tasked with writing a fairly\n easy program and designing an algorithm for a more complicated one in a certain amount of \ntime.  After the tasks you\'ve been assigned have been givin to you, you...';
            option1Text.text = 'Option 1: Sit down and start coding flat out.';
            
            if(planning >= 35)
            {
                option2Text.revive();
                option2Text.text = 'Option 2: Plan out your algorithm  for both, then start coding the first task.';
            }
            if(speed >= 40)
            {
                option3Text.revive();
                option3Text.text = 'Option 3: Quickly plan out and complete both tasks before the time alotted has run out.';
            }
        }
    }
    
    function option2Results()
    {
        if (firstInteraction == true && secondInteraction == false)
        {
            secondInteraction = true;
            interviewScore += 10;
            story.text = 'You go into her office and both take a seat.  You spend the next 20 minutes talking about your \npast projects and learning the details of the job you\'re applying for.';
            option1Text.text = 'Option 1: Talk briefly about your in class projects.';
            
            if(programming >= 40)
            {
                option2Text.text = 'Option 2: Go into detail about your personal projects.';
            }
            if(interpersonal >= 50)
            {
                option3Text.text = 'Option 3: Control the conversation to talk more about the job you\'re interviewing for.\n  Persuade her about what an excellent addition you\'ll make to her team.';
            }
        }
        else if (secondInteraction == true)
        {
            option2Text.kill();
            option3Text.kill();
            interviewScore += 15;
            story.text = 'Eventually, the programming portion of the interview comes.  You\'re tasked with writing a fairly\n easy program and designing an algorithm for a more complicated one in a certain amount of \ntime.  After the tasks you\'ve been assigned have been givin to you, you...';
            option1Text.text = 'Option 1: Sit down and start coding flat out.';
            
            if(planning >= 35)
            {
                option2Text.revive();
                option2Text.text = 'Option 2: Plan out your algorithm  for both, then start coding the first task.';
            }
            if(speed >= 40)
            {
                option3Text.revive();
                option3Text.text = 'Option 3: Quickly plan out and complete both tasks before the time alotted has run out.';
            }
        }
    }
    
    function option3Results()
    {
        if (firstInteraction == true && secondInteraction == false)
        {
            secondInteraction = true;
            interviewScore += 15;
            story.text = 'You go into her office and both take a seat.  You spend the next 20 minutes talking about your \npast projects and learning the details of the job you\'re applying for.';
            option1Text.text = 'Option 1: Talk briefly about your in class projects.';
            
            if(programming >= 40)
            {
                option2Text.text = 'Option 2: Go into detail about your personal projects.';
            }
            if(interpersonal >= 50)
            {
                option3Text.text = 'Option 3: Control the conversation to talk more about the job you\'re interviewing for.\n  Persuade her about what an excellent addition you\'ll make to her team.';
            }
        }
        
        else if (secondInteraction == true)
        {
            option2Text.kill();
            option3Text.kill();
            interviewScore += 25;
            story.text = 'Eventually, the programming portion of the interview comes.  You\'re tasked with writing a fairly\n easy program and designing an algorithm for a more complicated one in a certain amount of \ntime.  After the tasks you\'ve been assigned have been givin to you, you...';
            option1Text.text = 'Option 1: Sit down and start coding flat out.';
            
            if(planning >= 35)
            {
                option2Text.revive();
                option2Text.text = 'Option 2: Plan out your algorithm  for both, then start coding the first task.';
            }
            if(speed >= 40)
            {
                option3Text.revive();
                option3Text.text = 'Option 3: Quickly plan out and complete both tasks before the time alotted has run out.';
            }
        }
    }
    
    function addIStat()
    {
        if(skillPoints > 0)
        {
            skillPoints--;
            interpersonal += 5;
            if(skillPoints < 0)
            {
                skillPoints = 0;
            }
            iText.text =  'Interpersonal: ' + interpersonal;
            skillText.text = 'Skill points: ' + skillPoints;
            console.log('Interpersonal: ' , interpersonal);
        }
    }
    
    function subIStat()
    {
        skillPoints++;
        interpersonal -= 5;
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
            programming += 5;
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
        programming -= 5;
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
            planning += 5;
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
        planning -= 5;
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
            speed += 5;
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
        speed -= 5;
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
