const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var press=5
var gamestate='start'
var no=0
var bla=1

function setup() {
  createCanvas(800,800)
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Di(k, height-divisionHeight/2, 10, divisionHeight));
   }

   for (var j = 75; j <=width; j=j+50) 
   {
    plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    } 
}
function draw() {
  background("black");
  Engine.update(engine);

  textSize(20)
  text("Score:"+score,20,30);

  if(press>=3){
 fill('green')
 text('Turns Left:'+press,220,30)
 }
 else{
   fill('red')
   text('Turns Left:'+press,220,30)
 }
  

  for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   
  }
  nom()
  if(press<1){
      gamestate='end'
      if (gameState='end') {
         text(20)
        text('gameOver',400,400)
        
      }
  
   }
 if(gamestate==='start'&&frameCount%60===0){
no+=1

 }
 if (gamestate) {
   text("Time:"+no+'s',620,30)
 }
 if(gamestate==='Start'){
    butt.visible=false
 }
 
for (var j = 0; j < particles.length; j++) {
    
    particles[j].display();
        particles[j].scoreinc()
    }
   
  
 
   //if (particles[particles.length].position.y>490) {
     // score++;
   //}
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   // console.log(score)
  
}
function mousePressed(){
   if( mouseY<100&&press<=5&&press>0){
   particles.push(new Particle(mouseX, mouseY, 10,10));
   press-=1;

  bla=1
   }
  
 
}
function nom(){
    text('500',25,590)
    text('700',105,590)
   text('200',190,590)
   text('500',265,590)
   text('100',350,590)
   text('500',435,590)
   text('950',520,590)
   text('100',590,590)
   text('340',670,590)
   text('190',730,590)
   
}