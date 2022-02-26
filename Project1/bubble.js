  //Bubble Class
  class bubble {

  //Construct bubble object
  constructor(name,age,count,x,y,speed) {

  //Create Random Pastel Color
  let hue = Math.floor(Math.floor(Math.random() * 360));
  let randomColor = `hsl(${hue}, 70%, 80%)`;

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
      this.randomcolor = randomColor;
    }

    //diaplsy bubble
    display() {
      //radius of ellipse change according to the value of age
      let r = this.a*4;
      noStroke();
      //fill ellipse with random color
      fill(this.randomcolor);
      //Create ellipse at the position r
      ellipse(this.x, this.y, r, r);
      fill(0);
      //write age
      textSize(this.a);
      textAlign(CENTER);
      //write name
      text(this.n,this.x,this.y+(this.a-10)/2);
      //write country
      textSize((this.a)/2);
      text(this.c,this.x,this.y-(this.a-10)/2);
      textSize((this.a)/3);
      text(this.a+' yr',this.x,this.y-r/4);
    }

    //Animate Bubbles
    move() {
       //Declare half size of the radius
      let halfr = this.a*2;
       //When bump into wall, change direction
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