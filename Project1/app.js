//Landing Page Interaction
//Scroll when play button is pressed 
document.getElementById('play').onclick = function scrollGame() {
  let elmnt = document.getElementById("game");
  elmnt.scrollIntoView({ behavior: 'smooth'});

}


//GamePage Interaction

//declare font gamja
let gamjaFont;

//declare URL (api URL + userinput)
let ageurl;
let nationalurl;


//declare result data
let resultName;
let resultAge;
let resultCountry;

//change country code to full country name
let regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
//declare country full name 
let resultCountryFull;

//declare Bubble Array
let Bubbles = [];

//declare Country Array
let Countries = [];

//declare Age Array
let Ages = [];

//declare startscore at 0
let score = 0;

//declare gameDone Boolean
let gameDone = false;


//preload font
function preload() {
  gamjaFont = loadFont('GamjaFlower-Regular.ttf');
}


//setup
function setup() {

  textFont(gamjaFont);

  //create Canvas and direct it to HTML
  let canvas = createCanvas(windowWidth*0.8, windowHeight*0.8);
  canvas.parent("canvas");

  //endgame page
  endGame = new endgame();

  //button for submitting the name
  let button = select('#submit');
  button.mousePressed(nameSubmit);

  //seleft userinput
  input = select('#name');
}

//resize canvas when the windowsize is resized
function windowResized() {
  resizeCanvas(windowWidth*0.8, windowHeight*0.6);
}

//function that happens when the user submit name. 1.fetch API 2.process data 3.trigger pushBubble function
function nameSubmit(){
  let name = document.querySelector("#name").value;
  ageurl = 'https://api.agify.io?name=' + name;
  nationalurl = 'https://api.nationalize.io/?name=' + name;

  //fetchcing age url & store result 
  fetch(ageurl)
  .then(response => response.json())
  .then((ageData) => {
    resultAge = ageData.age;
    resultName = ageData.name;
    console.log(resultAge);
    console.log(resultName);
  })
  
  //fetchcing national url & store result age, name data
  fetch(nationalurl)
  .then(response => response.json())
  .then((nationalData) => {
    //Error alert: if this name is undefined, show alert
    if(nationalData.country[0]==undefined) {
      alert('This name is undefined.');
    };
    //find countrycode in the result data
    resultCountry = nationalData.country[0].country_id;
    //convert countrycode to full name
    resultCountryFull = regionNamesInEnglish.of(resultCountry);
    console.log(resultCountryFull);

    //if the nationalurl can be fetched, pushBubble
    loadJSON(nationalurl,pushBubble);
  })

  //Effor alert: If there is no entry for name show alert
  if (document.querySelector('#name').value.length == 0) {
    alert('Type in a name');
   }

  //empty input section after submission 
  document.querySelector("#name").value = "";
}

  // pushBubble
function pushBubble () {
  Bubbles.push(new bubble(resultName, resultAge, resultCountryFull, width/2,height/2,random(1,2)));
  console.log(Bubbles);
  Countries.push(resultCountryFull);
  Ages.push(resultAge);
  console.log(Countries);
  console.log(Ages);
  checkDuplicate();
  checkAge();
  scoreFunction();
}

//Check if there is a country duplicate
function checkDuplicate(){
   let result = false;
   // go through the Country array
   for(let i = 0; i < Countries.length;i++) {
      // compare the first and last index of an element
      if(Countries.indexOf(Countries[i]) !== Countries.lastIndexOf(Countries[i])){
         result = true;
         // terminate the loop
         break;
      }
   }

   //if there is duplicate
   if(result) {
      console.log('Array contains duplicate elements');
      //the game is over and restart the game
      alert('Game Over');
      document.location.reload();
   } else {
      console.log('Array does not contain duplicate elements');
   }
}

//draw canvas 
function draw() {
  noStroke();
  fill(49,43,61);
  rect(0,0,width,height,width/20);

      //display bubbles
      for (let i = 0; i < Bubbles.length; i++) {
        let p = Bubbles[i];
        p.display();
        p.move();
      }

      //display score
      scoreDisplay();
      
      //endgamepage boolean check and display
      if( gameDone == true){
        endGame.display();

    }
  }


//update score 
function scoreFunction() {
  score += resultAge;
  console.log(score);

  if (score >= 500) {
   gameDone = true;
  }
}

//display score
function scoreDisplay(){
   textSize(width/40);
   textAlign(CENTER);
   fill(255);
   text("Age Score: " + score, width/10, width/20);
}

function keyPressed() {
  //when Enterkey Pressed, start nameSubmit function
    if (gameDone == false && keyCode === ENTER) {
        nameSubmit();
    }
      //If any key is pressed after gameDone, refresh the page
    if (gameDone == true) {
      document.location.reload();
    }
  }

  //if mousepressed after gameDone, restart
  function mousePressed() {
        if (gameDone == true) {
          document.location.reload();
        }

  }