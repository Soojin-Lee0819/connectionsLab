//declare API data
let resultName;
let resultAge;
let resultCount;
let resultNational;
let genderNational;
let ageapi = 'https://api.agify.io?name=';
let nationalapi = 'https://api.nationalize.io/?name=';
let genderapi = 'https://api.genderize.io/?name=';

//declare Bubble 
let Bubbles = [];

//setup
function setup() {
  //create Canvas and put it to HTML
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvas");
  //Button & Declare
  let button = select('#submit');
  button.mousePressed(nameAsk);
  //Input select
  input = select('#name');
  }


//draw canvas
function draw() {
  background(216,95,85);
      for (let i = 0; i < Bubbles.length; i++) {
        let p = Bubbles[i];
        p.display();
      }
  }

  //Bubble Class
  class bubble {

    //Construct bubble object
    constructor(age,name,count) {
      //resultAge
      this.a = age;
      //resultname
      this.n = name;
      //resultcount
      this.c = count/100+200;
     this.xpos = random(0,windowWidth/2);
     this.ypos = random(0,windowHeight/2);
    }

    //diaplsy bubble
    display() {
      noStroke();
       //Change color of the bubble according to age
      fill((this.a-30)*7,(this.a-30)*7,(this.a-20)*7);
      //Create ellipse at r
      ellipse(this.xpos, this.ypos, (this.a-20)*10, (this.a-20)*10);
      fill(255);
      textSize(this.a-10);
      text(this.n,this.xpos,this.ypos);
    }
  }


  //responsive to the widow size
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }


//add input to url
function nameAsk() {
  let ageurl = ageapi + input.value();
  let nationalurl = nationalapi + input.value();
  let genderurl = genderapi + input.value();
  loadJSON (ageurl, gotAgeData);
  loadJSON (nationalurl, gotNationalData);
  loadJSON (genderurl, gotGenderData);
}

//receive data and console.log
function gotAgeData(agedata) {
  console.log(agedata);
  resultName = agedata.name;
  resultAge = agedata.age;
  resultCount = agedata.count;
  Bubbles.push(new bubble(resultAge,resultName,resultCount));
  console.log(Bubbles);
}

//receive data and console.log

function gotNationalData(nationaldata) {
  console.log(nationaldata);
  resultNational = nationaldata;
}

//receive data and console.log
function gotGenderData(genderdata) {
  console.log(genderdata);
  resultGeder = genderdata;
}

//when keyPressed, start data receive
function keyPressed() {
    if (keyCode === ENTER) {
        nameAsk();
    }
  }

