    var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;

    function setup() 
    {
      createCanvas(800, 600);
    }

    function draw() 
    {
      background(215, 30, 65);
      player1();
      moveplayer1();
      firstshape();
      mouseshape();
      youwin();
      myCircle(800,600);
      
    }

    /* This function controls all the variables of the circle */
    function player1()
    {
        fill(24, 200, 29);
        circle(x, y, diameter);
    }

    function mouseshape()
    {
        fill(40,180,30);
        circle(mousex, mousey, 50);
    }

    function moveplayer1()
    {
        if (x >= 800) 
        {
            x = 0;
        }

        if (keyIsDown(83)) 
        {
            y += 10;
        } 
        else if (keyIsDown(87)) 
        {
            y -= 10;
        }

        if (y >= 600) 
        {
            y = 0;
        }

        
    }

    function keyPressed() 
    {
      if (key == 'd') 
      {
        x += 10;
      } 
      else if (key == 'a') 
      {
        x -= 10;
      }
    }

    function mousePressed() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }

    function firstshape()
    {
        fill(80,90,100);
        circle(700, 500, diameter);
    }
    
    function myCircle(x,y)
    {
        fill(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
        circle(Math.floor(Math.random()*x)+10,Math.floor(Math.random()*y),Math.floor(Math.random()*100)+10)
    }
    
    function youwin()
    {
        textSize(40);
        text('EXIT', 700, 580);
        
        if (x >= 700 && y >= 580)
        {
            text("YOU WIN!", 400,300)
        }

    }