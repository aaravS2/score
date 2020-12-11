class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
this.visibility=255
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate( pos.x,pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();
    }
    scoreinc(){
   
        
        if( this.body.position.x>10&& this.body.position.x<84&& this.body.position.y>500&&bla!==null){
            score+=500
           bla=null
                }
    
        if( this.body.position.x>84&& this.body.position.x<162&& this.body.position.y>500&&bla!==null){
        score+=700
       bla=null
        }
        if( this.body.position.x>162&& this.body.position.x<247&& this.body.position.y>500&&bla!==null){
        score+=200
      bla=null
                                }
        if( this.body.position.x>247&& this.body.position.x<322&& this.body.position.y>500&&bla!==null){
         score+=500
     bla=null
                                        }
         if( this.body.position.x>322&& this.body.position.x<404&& this.body.position.y>500&&bla!==null){
         score+=100
     bla=null
                                                }
        if( this.body.position.x>404&& this.body.position.x<484&& this.body.position.y>500&&bla!==null){
      score+=500
       bla=null
         }
        if( this.body.position.x>484&& this.body.position.x<561&& this.body.position.y>500&&bla!==null){
         score+=950
    bla=null
}
if( this.body.position.x>561&& this.body.position.x<649&& this.body.position.y>500&&bla!==null){
score+=100
bla=null
}
if( this.body.position.x>649&& this.body.position.x<724&& this.body.position.y>500&&bla!==null){
score+=340
bla=null
}   
if( this.body.position.x>724&& this.body.position.x<823&& this.body.position.y>500&&bla!==null){
score+=190
bla=null
}                                                      
    }

}
