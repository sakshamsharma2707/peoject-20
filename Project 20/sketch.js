    var bgImg;
    var cat,catImg1,catImg2,catImg3,catImg4;
    var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;


    function preload() {
        //load the images here
        bgImg = loadImage("images/garden.png");
        catImg1 = loadAnimation("images/cat1.png");
        catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
        catImg4 = loadAnimation("images/cat4.png");
        mouseImg1 = loadAnimation("images/mouse1.png");
        mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
        mouseImg4 = loadAnimation("images/mouse4.png");
    }

    function setup(){
        createCanvas(1000,800);
        //create cat and mouse sprites here
        cat = createSprite(870,600);
        cat .addAnimation("catSleeping",catImg1);
        cat.scale = 0.2;

        mouse = createSprite(200,600);
        mouse .addAnimation("mouseStanding",mouseImg1);
        mouse.scale = 0.2;
 
    } 

    function draw() {

        background(bgImg);
        //Write condition here to evalute if cat and mouse collide
        if(cat.x - mouse.x <(cat.width - mouse.width)/2 ){
            cat.velocityX = 0;
            cat .addAnimation("catLastimage",catImg4);
            cat . x =300;
            cat.scale = 0.2;
            cat .changeAnimation("catLastImage");
            mouse .addAnimation("mouseLastimage",mouseImg4);
            mouse.scale = 0.15;
            mouse .changeAnimation("mouseLastimage");
        }
 
        drawSprites();
    }

    function keyPressed(){

   // For moving and changing animation write code here
        if(keyCode===LEFT_ARROW){
            mouse.addAnimation("mouseTeasing",mouseImg2);
            mouse.changeAnimation("mouseTeasing");
            mouse.frameDelay  = 25 ;

            cat.velocityX = -5;
            cat.addAnimation("catRunning",catImg2);
            cat.changeAnimation("catRunning");
        }
        }