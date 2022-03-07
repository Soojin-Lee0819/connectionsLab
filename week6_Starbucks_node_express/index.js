
//Server with Express
let express = require('express');
const res = require('express/lib/response');
let app = express();

//import json
const coffeeData = require("./coffee.json");
console.log(coffeeData);


app.use('/', express.static('public'));

//randomly select beverage and show json file
app.get('/random', (req, response) => {
  let randomNum = Math.floor(Math.random() * coffeeData.coffee.length);
  let randomCoffee = coffeeData.coffee[randomNum];
  console.log(randomCoffee);
  response.json(randomCoffee);
})

//show all coffee JSON
app.get('/coffee', (req, res) => {
  let maxCal = req.query.calorieLowerThan;

  let lowerCalorieDrinks = {};
  // respond with a json of drinks less than a certain calorie
  for (drink in coffeeData.coffee) // loops through the keys in campusCats 
  {
    let lowerCalorieDrink = coffeeData.coffee[drink];
    if (lowerCalorieDrink.calories <= maxCal) {
      lowerCalorieDrinks[drink] = lowerCalorieDrink;
    }
  }
  console.log(lowerCalorieDrinks);
  // add conditions so that when user asks for coffee with higher calorie, the API should still work
  if (maxCal) {
    res.json(lowerCalorieDrinks);
  } else {
    res.json({ status: "info not present" });
  }
})


app.get('/coffee/:coffeeName', (req, res) => {
  console.log(req.params.coffeeName);
  let user_coffeeName = req.params.coffeeName;
  let user_obj;
  for (let i = 0; i < coffeeData.coffee.length; i++) {
    if (user_coffeeName == coffeeData.coffee[i].drink_name) {
      user_obj = coffeeData.coffee[i];

    }
  }
  console.log(user_obj);
  if (user_obj) {
    res.json(user_obj);
  } else {
    res.json({ status: "this drink does not exist" });
  }
})


//what port whould we listen to?
app.listen(9000, () => {
  console.log("the server is up and running");
})


//starbucks csv data source
// https://github.com/yhejazi/starbucks-nutrition/blob/master/data/sbux_nutrition.csv 




