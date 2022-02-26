  //Bubble Class
  class bubble {
    //Construct bubble object
    constructor(name,age,count,color,x,y,speed) {
      //resultName
      this.n = name;
      //resultAge
      this.a = age;
      //resultCountry
      this.c = count;
      //color is randomly selected from the pastel color range
      this.color = color;
      //x-position 
      this.x = x;
      //y-position 
      this.y =y;
      //speed of x and y
      this.xspeed = speed;
      this.yspeed = speed;
    }

    //diaplsy bubble
    display() {
      let r = this.a*4;
      noStroke();
       //Change color of the bubble according to age
      fill(this.color);
      //Create ellipse at r
      ellipse(this.x, this.y, r, r);
      fill(0);
      textSize(this.a);
      textAlign(CENTER);
      text(this.n,this.x,this.y+(this.a-10)/2);
      //Country Name is smaller than Name
      textSize((this.a)/2);
      text(this.c,this.x,this.y-(this.a-10)/2);
      textSize((this.a)/3);
      text(this.a+' yr',this.x,this.y-r/4);
    }

    move() {
      let halfr = this.a*2;
      if(this.x > (width-halfr)) {
        this.xspeed = this.xspeed * -1;
      }
      else if(this.x < halfr) {
        this.xspeed = this.xspeed * -1;
      }
      
      if(this.y > (height-halfr)) {
        this.yspeed = this.yspeed * -1;
      }
      else if(this.y < halfr) {
        this.yspeed = this.yspeed * -1;
      }
      
      this.x = this.x + this.xspeed;
      this.y = this.y + this.yspeed;
  
  }
}