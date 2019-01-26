var blimp_clicked;
var blimpX;
var blimpY;
var seedsX;
var seedsY;
var change_eye;
var twig_clicked;
var twig_rotate;
var twigY;
function setup()
{
    
    createCanvas(1400, 800);
    noStroke();
    blimp_clicked = false;
    change_eye = false;
    blimpX = 250;
    blimpY = 200;
    twigY = 720
    seedsX = blimpX
    seedsY = blimpY + 110;
    twig_clicked = false;
    twig_rotate = 0;
}

function draw()
{
    background(120, 166, 182);

    //ground
    fill(181,120,25);
    rect(0, 450, width, height);
    //mountains in background
    fill(64, 55, 46);
    beginShape();
        vertex(0, 451);
        vertex(30, 435);
        vertex(40, 435);
        vertex(58, 448);
        vertex(68, 448);
        vertex(80, 432);
        vertex(89, 434);
        vertex(95, 432);
        vertex(101, 448);
        vertex(130, 448);
        vertex(133, 437);
        vertex(146, 435);
        vertex(163, 440);
        vertex(240, 430);
        vertex(243, 428);
        vertex(340, 448);
        vertex(430, 448);
        vertex(450, 435);
        vertex(455, 438);
        vertex(463, 443);
        vertex(488, 440);
        vertex(497, 424);
        vertex(510, 431)
        vertex(516, 439);
        vertex(534, 445);
        vertex(540, 445);
        vertex(600, 451);
    endShape();
    push();
    translate(700,0)
    beginShape();
        vertex(0, 451);
        vertex(30, 435);
        vertex(40, 435);
        vertex(58, 448);
        vertex(68, 448);
        vertex(80, 432);
        vertex(89, 434);
        vertex(95, 432);
        vertex(101, 448);
        vertex(130, 448);
        vertex(133, 437);
        vertex(146, 435);
        vertex(163, 440);
        vertex(240, 430);
        vertex(243, 428);
        vertex(340, 448);
        vertex(430, 448);
        vertex(450, 435);
        vertex(455, 438);
        vertex(463, 443);
        vertex(488, 440);
        vertex(497, 424);
        vertex(510, 431)
        vertex(516, 439);
        vertex(534, 445);
        vertex(540, 445);
        vertex(600, 451);
    endShape();
    pop();
//draw lemons on the ground
    drawLemon(100, 660, .16)
    drawLemon(230, 730, .24)
    drawLemon(450, 530, .05)
    drawLemon(490, 535, .05)
    drawLemon(470, 560, .05)
    drawLemon(820, 600, .1)
    drawLemon(1000, 680, .2)
//draw twigs on the ground
    drawTwig(100, 530, .5)
    drawTwig(130, 600, .7)
    drawTwig(278, 480, .4)
    drawTwig(467, 495, .4)
    drawTwig(840, 490, .5)
    drawTwig(1140, 610, .8)
    drawTwig(710, 650, .5)
    
    push();
    translate(480, twigY);
    drawTwig(0, 0, 1.3, twig_rotate)
    pop();

    // draw all three of the seeds using the seedsX and seedsY array
    drawSeed(seedsX, seedsY);
    

    if (blimp_clicked)
    {
        seedsY += 2
        if (seedsY > 540)
        {

            seedsY = blimpY + 110
            seedsX = blimpX
        }
        blimpX += .9
    }

    if (twig_clicked)
    {
      twig_rotate += .5
      twigY -= 5
    }


    push();
    translate(600,0);



  fill(152, 124, 80)


  //rect(0, 0, 800, 800);



   // OUTLINE OF EYE

      push();

      translate(10, 290);

      fill(255);

      beginShape();

         vertex(0, 0);

         bezierVertex(0, 0, 15, -15, 17, -13);

         bezierVertex(17, -13, 45, -15, 60, -30);

         bezierVertex(60, -30, 370, -375, 810, 0);

         bezierVertex(810, 0, 420, 400, 80, 50);

         bezierVertex(80, 50, 40, 40, 40, 40);

         bezierVertex(40, 40, 15, 40, 0, 20);

         bezierVertex(0, 20, -5, 10, 0, 0);

      endShape(CLOSE);

      pop();

 

   // TEAR DUCT

      push();

      translate(25, 277);

      fill(96, 76, 50)

      beginShape();

         vertex(0, 0);

         bezierVertex(0, 0, -5, 13, 5, 26);

         bezierVertex(5, 26, 7, 25, 3, 48);

         bezierVertex(5, 48, -40, 28, 0, 0)

      endShape();

      pop();



   // IRIS

      push();

      translate(270,460);

      fill(82, 49, 34);

      beginShape();

         vertex(0, 0);

         bezierVertex(0, 0, -200, -125, 0, -322);

         bezierVertex(0, -320, 125, -375, 295, -320);

         bezierVertex(295, -320, 480, -140, 272, 0)

         bezierVertex(272, 0, 145, 51, 0, 0)

      endShape(CLOSE);

      pop();

 

      if(change_eye){

         skyIris();

      }
     pop();
     drawLemonBlimp(blimpX, blimpY)
     push();
     translate(600,0);
   // PUPIL

      push();
         translate(410, 290)
         noStroke();

         fill(50);

         ellipse(0, 0, 100);

      pop();
    pop();

    //mouse x and y follower
    //textSize(12)
    //textStyle(NORMAL)
    //fill(0)
    //rect(mouseX +1, mouseY - 20, 80, 20)
    //fill(255)
    //text('(' + mouseX + ", " + mouseY + ")", mouseX + 1, mouseY -6)
}


function mouseClicked()
{

    if (mouseX > 150 && mouseX < 350 && mouseY > 100 && mouseY< 300)
    {
        blimp_clicked = true

    }
       if(mouseX > 960 && mouseX < 1060 &&  mouseY > 240 && mouseY < 340)

   {
      change_eye = true;
   }

   if(mouseX>470 && mouseX < 490 && mouseY >720 && mouseY<750){
      twig_clicked =true;

   }

}

function drawTwig (x, y, s,rot=0)
{
    fill(174, 175, 104);
    push();
    translate(x,y);
    scale(s);
    rect(0,0, 3, 25)
    pop();
    push();
    translate(x,y);
    scale(s);
    rotate(rot)
    ellipse(-10, 0, 20, 4)
    ellipse(12, 0, -20, 4)
    pop();
}

function drawLemonBlimp(x,y)
{
    fill(254, 195, 3)
    push();
    translate(x,y)
    ellipse(0, 0, 300, 200)
    //lemon nub thing on the right end, lil nubby
    beginShape();
        vertex(140, -35);
        bezierVertex(150, -30, 165, -20, 168, -15);
        vertex(168, 15);
        bezierVertex(165, 20, 150, 30, 140, 35);
    endShape();

    //lemon nub thing on the left end, lil nubster
    beginShape();
        vertex(-145,-25);
        bezierVertex(-150, -15, -160, -20, -165, -5);
        vertex(-165, 5);
        bezierVertex(-160, 20, -150, 15, -145, 25);
    endShape();

    //right side propeller, mr proppy prop
    fill(75, 76, 68);
    rect(160, -3, 45, 5);
    fill(174, 175, 104);
    ellipse(205, -14, 6, 25)
    ellipse(205, 11, 6, 25)

    //left side propeller, mr proppity
    fill(75, 76, 68);
    rect(-205,-3, 45, 5);
    fill(174, 175, 104);
    ellipse(-205, -14, 6, 25);
    ellipse(-205, 11, 6, 25)

    //blimp cabin
    fill(75, 76, 68);
    rect(-50, 95, 100, 30);
    fill(125, 99, 70);
    rect(-40, 105, 12, 7);
    rect(28, 105, 12, 7)
    fill(200, 165, 3);
    rect(-15, 105, 30, 10);

    //blimp shooter
    fill(75, 76,68);
    beginShape();
        vertex(25, 125);
        bezierVertex(28, 130, 28, 135, 25, 140);
        vertex(-25, 140);
        bezierVertex(-28, 130, -28, 135, -25, 125);
    endShape();


    pop();
}


function drawLemon(x,y,s)
{
    push();
    translate(x,y)
    scale(s);
    fill(254, 195, 3)
    ellipse(0, 0, 300, 200)
    //lemon nub thing on the right end, lil nubby
    beginShape();
        vertex(140, -35);
        bezierVertex(150, -30, 165, -20, 168, -15);
        vertex(168, 15);
        bezierVertex(165, 20, 150, 30, 140, 35);
    endShape();

    //lemon nub thing on the left end, lil nubster
    beginShape();
        vertex(-145,-25);
        bezierVertex(-150, -15, -160, -20, -165, -5);
        vertex(-165, 5);
        bezierVertex(-160, 20, -150, 15, -145, 25);
    endShape();

    pop()
}


function drawSeed(x,y)
{
    fill(173, 134, 58);
    push();
    translate(x,y)
    beginShape();
        vertex(0,0)
        bezierVertex(4,16, 8, 20, 0,25)
        bezierVertex(-8, 20, -4, 16, 0,0)
    endShape();
    pop();
}

function skyIris(){

   push();

       translate(270,460);

         fill(83, 129, 155);

         beginShape();

            vertex(0, 0);

            bezierVertex(0, 0, -200, -125, 0, -322);

            bezierVertex(0, -320, 125, -375, 295, -320);

            bezierVertex(295, -320, 480, -140, 272, 0)

            bezierVertex(272, 0, 145, 51, 0, 0)

         endShape(CLOSE);

       pop();

       drawCloud(440, 190, 3);

       drawCloud(475, 320, 1.5);

       drawCloud(300, 400, .75);

       drawCloud(350, 350, 1.1);

       drawCloud(480, 420, 2.1);

       drawCloud(290, 280, 2.3);

       drawCloud(520, 250, 1);

       drawCloud(575, 350, .8);

}

 

function drawCloud(x, y, sc){

   push();

      translate(x, y);

      scale(sc);

      noStroke();

      fill(255);

      ellipse(0, 0, 80, 20);

      ellipse(-15, -5, 40, 15);

      ellipse(15, -7, 35, 20);

      ellipse(0, -13, 30, 15);

   pop();

}