var car;
var rd=[]; 
var b=[];
var score=0;
function setup(){
  createCanvas(400,600);
  background(150);
  for(var i=1;i<=10;i++){
     rd[i]=new Road(); 
     b[i]=new Block();
  }
  car=new Car();

  frameRate(45);
}


 var rand;
 var flag=1;
//-----drawing---------------------------
function draw(){
     background(150);

     if(car==null){
        textSize(32);
        text("Game Over !!!", 10, 30);
        fill(0, 102, 153);
        text("your Score="+score, 10, 60);
        fill(0, 102, 153, 51);
        text("Game Over !!!", 10, 90);
     }else{
         fill(0, 102, 153);
        text(score, 1, 60);
     }
      car.show();

     for(var i=1;i<=10;i++){
        rd[i].border();
       }
         if(flag){
            rand=floor(random(1,10));
            flag=0;
        }
           b[rand].show();
           b[rand].show2();
           b[rand].fall();
         
      if(b[rand].y>=600 || b[rand].y2>=600){
           b[rand].y=0;  
           b[rand].y2=0;
           flag=1; 
           score++;  }

      if(dist(b[rand].x,b[rand].y,car.x,car.y)<80 || dist(0,0,car.x,car.y)<80){
          b=null;
          rd=null;
          car=null;
         
      }
} 


function keyPressed(){
    if(keyCode==UP_ARROW){
    
    }else if(keyCode==DOWN_ARROW){
       
    }else if(keyCode==RIGHT_ARROW){
       car.moveRight();
    }else if(keyCode==LEFT_ARROW){
       car.moveLeft();
    }
}

function Road(){
    this.x1=10;         this.y1=random(10,height);
    this.x2=width-30;   this.y2=random(10,height);
    this.border=function(){
            fill(255);
            rect(this.x1,this.y1,20,50);
            rect(this.x2,this.y2,20,50);

            this.y1+=10;
            this.y2+=10;
            if(this.y1>=height){
                this.y1=10;
                this.y2=10;
            }
    };
    
}


function Block(){
    this.x=random(30,width-70);
    this.y=0;//random(20,400);
    this.x2=random(30,width-70);
    this.y2=0;//random(20,400);

    this.show=function(){
         fill(random(0,255),random(0,255),random(0,255));
         ellipse(this.x,this.y,50,50); 
       
    };

    this.show2=function(){
         fill(random(0,255),random(0,255),random(0,255));
         ellipse(this.x2,this.y2+100,50,50);
    };

    this.fall=function(){
        this.y+=10;
        this.y2+=10;
        
    };
}

function Car(){
    this.x = 200;
    this.y = 500;

    this.show=function(){
        // fill(random(0,255),random(0,255),random(0,255));
        fill(255,0,0);
         ellipse( this.x, this.y,100,100);
    };

    this.moveRight=function(){
        this.x+=50;
    }

    this.moveLeft=function(){
        this.x-=50;
    }
}

/* load img
var img;
function preload(){
    img=loadImage('img.png');
}
imageMode(CENTER);
image(img,100,100);
*/