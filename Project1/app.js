//Landing Page Interaction

document.getElementById('play').onclick = function scrollGame() {
  let elmnt = document.getElementById("game");
  elmnt.scrollIntoView({ behavior: 'smooth'});

}




//Game Page Interaction 
//api URL + userinput
let ageurl;
let nationalurl;


//declare API data
let resultName;
let resultAge;
let resultCountry;

//change country code to full country name
let regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });
//declare country full name 
let resultCountryFull;

//declare Bubble 
let Bubbles = [];
let Countries = [];
let Ages = [];

//startscore at 0
let score = 0;
let gameDone = false;



//setup
function setup() {

  //create Canvas and put it to HTML
  let canvas = createCanvas(windowWidth*0.8, windowHeight*0.8);
  canvas.parent("canvas");

  //endpage
 endGame = new endgame();

  //Button & Declare
  let button = select('#submit');
  button.mousePressed(nameSubmit);


  //Input select
  input = select('#name');
}

//resize canvas on windowsize resized
function windowResized() {
  resizeCanvas(windowWidth*0.8, windowHeight*0.6);
}

//when the user submit name, fetch api and load data
function nameSubmit(){
  let name = document.querySelector("#name").value;
  ageurl = 'https://api.agify.io?name=' + name + '&apikey=275c8c5db6b62a979b8b4ac71ab76af0';
  nationalurl = 'https://api.nationalize.io/?name=' + name + '&apikey=275c8c5db6b62a979b8b4ac71ab76af0';

  //console.log age data
  fetch(ageurl)
  .then(response => response.json())
  .then((ageData) => {
    resultAge = ageData.age;
    resultName = ageData.name;
    console.log(resultName);
    console.log(resultAge);
  })
  
  //console.log national data
  fetch(nationalurl)
  .then(response => response.json())
  .then((nationalData) => {
    //if this name is undefined show alert
    if(nationalData.country[0]==undefined) {
      alert('This name is undefined.');
    };
    resultCountry = nationalData.country[0].country_id;
    resultCountryFull = regionNamesInEnglish.of(resultCountry);
    console.log(resultCountryFull);
    loadJSON(nationalurl,pushBubble);
  })

if (fetch(nationalurl)==0) {
  alert('Type in a name');
};

  //If there is no entry for name show alert
  if (document.querySelector('#name').value.length == 0) {
    alert('Type in a name');
   }
   if(resultCountry == 0){
    alert('Type in a name');
  }
  //empty the input section once submit button is pressed
  document.querySelector("#name").value = "";
}


function pushBubble () {

  //Create Random Pastel Color
  let hue = Math.floor(Math.floor(Math.random() * 360));
  let randomColor = `hsl(${hue}, 70%, 80%)`;

  Bubbles.push(new bubble(resultName, resultAge, resultCountryFull,randomColor, width/2,height/2,random(1,2)));
  console.log(Bubbles);
  Countries.push(resultCountryFull);
  Ages.push(resultAge);
  console.log(Countries);
  console.log(Ages);
  checkDuplicate();
  checkAge();
  scoreFunction();
}

//Check for Country Duplicate
function checkDuplicate(){
   let arrCountries = Countries;
   let result = false;
   // go through the Country array
   for(let i = 0; i < arrCountries.length;i++) {
      // compare the first and last index of an element
      if(arrCountries.indexOf(arrCountries[i]) !== arrCountries.lastIndexOf(arrCountries[i])){
         result = true;

         // terminate the loop
         break;
      }
   }
   //if there is duplicate
   if(result) {
      console.log('Array contains duplicate elements');

      //the game is over and restart the game
      document.location.reload();

   } else {
      console.log('Array does not contain duplicate elements');
   }
}

//Compare the most recently added data with the rest of the ages in the array

function checkAge(){
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
      
      //display notification
      if( gameDone == true){
        endGame.display();

    }
  }


//update score 
function scoreFunction() {
  score += resultAge;
  console.log(score);

  if (score >= 100) {
   gameDone = true;
  }
}

//display score
function scoreDisplay(){
   textSize(width/60);
   textAlign(CENTER);
   fill(255);
   text("Age Score: " + score, width/10, width/20);
}

//when Enterkey Pressed, start nameSubmit function
function keyPressed() {
    if (keyCode === ENTER) {
        nameSubmit();
    }
  }