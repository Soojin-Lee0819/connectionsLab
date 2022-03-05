
//Server with Express
let express = require('express');
const res = require('express/lib/response');
let app = express();


// JSON format data for Beverages in NYUAD Library Cafe
let coffeeData = {
  "coffee": 
    [
      {
        "drink_name": "Caffe Latte",
        "type": "Hot Coffees",
        "size": "Tall",
        "calories": 150,
        "fat": 6,
        "cholesterol": 25,
        "sodium": 135,
        "carb": 15,
        "sugar": 14,
        "protein": 10,
        "caffeine": 75
      },
      {
        "drink_name": "Caffe Latte",
        "type": "Hot Coffees",
        "size": "Grande",
        "calories": 190,
        "fat": 7,
        "cholesterol": 30,
        "sodium": 170,
        "carb": 19,
        "sugar": 18,
        "protein": 13,
        "caffeine": 150
      },
      {
        "drink_name": "Cappuccino",
        "type": "Hot Coffees",
        "size": "Tall",
        "calories": 90,
        "fat": 3.5,
        "cholesterol": 15,
        "sodium": 80,
        "carb": 9,
        "sugar": 8,
        "protein": 6,
        "caffeine": 75
      },
      {
        "drink_name": "Cappuccino",
        "type": "Hot Coffees",
        "size": "Grande",
        "calories": 120,
        "fat": 4,
        "cholesterol": 15,
        "sodium": 100,
        "carb": 12,
        "sugar": 10,
        "protein": 8,
        "caffeine": 150
      },
      {
        "drink_name": "Caffe Mocha",
        "type": "Hot Coffees",
        "size": "Tall",
        "calories": 290,
        "fat": 13,
        "cholesterol": 40,
        "sodium": 120,
        "carb": 34,
        "sugar": 28,
        "protein": 11,
        "caffeine": 95
      },
      {
        "drink_name": "Caffe Mocha",
        "type": "Hot Coffees",
        "size": "Grande",
        "calories": 360,
        "fat": 15,
        "cholesterol": 50,
        "sodium": 150,
        "carb": 44,
        "sugar": 35,
        "protein": 13,
        "caffeine": 175
      },
      {
        "drink_name": "Caramel Macchiato",
        "type": "Hot Coffees",
        "size": "Tall",
        "calories": 190,
        "fat": 6,
        "cholesterol": 20,
        "sodium": 120,
        "carb": 26,
        "sugar": 25,
        "protein": 8,
        "caffeine": 75
      },
      {
        "drink_name": "Caramel Macchiato",
        "type": "Hot Coffees",
        "size": "Grande",
        "calories": 250,
        "fat": 7,
        "cholesterol": 25,
        "sodium": 150,
        "carb": 35,
        "sugar": 33,
        "protein": 10,
        "caffeine": 150
      },
      {
        "drink_name": "Caffe Americano",
        "type": "Hot Coffees",
        "size": "Tall",
        "calories": 10,
        "fat": 0,
        "cholesterol": 0,
        "sodium": 10,
        "carb": 1,
        "sugar": 0,
        "protein": 1,
        "caffeine": 150
      },
      {
        "drink_name": "Caffe Americano",
        "type": "Hot Coffees",
        "size": "Grande",
        "calories": 15,
        "fat": 0,
        "cholesterol": 0,
        "sodium": 10,
        "carb": 2,
        "sugar": 0,
        "protein": 1,
        "caffeine": 225
      },
      {
        "drink_name": "White Chocolate Mocha",
        "type": "Hot Coffees",
        "size": "Tall",
        "calories": 340,
        "fat": 14,
        "cholesterol": 45,
        "sodium": 190,
        "carb": 42,
        "sugar": 41,
        "protein": 11,
        "caffeine": 75
      },
      {
        "drink_name": "White Chocolate Mocha",
        "type": "Hot Coffees",
        "size": "Grande",
        "calories": 430,
        "fat": 18,
        "cholesterol": 55,
        "sodium": 250,
        "carb": 55,
        "sugar": 53,
        "protein": 14,
        "caffeine": 150
      },
      {
        "drink_name": "Espresso",
        "type": "Hot Coffees",
        "size": "Solo",
        "calories": 5,
        "fat": 0,
        "cholesterol": 0,
        "sodium": 0,
        "carb": 1,
        "sugar": 0,
        "protein": 0,
        "caffeine": 75
      },
      {
        "drink_name": "Espresso",
        "type": "Hot Coffees",
        "size": "Doppio",
        "calories": 10,
        "fat": 0,
        "cholesterol": 0,
        "sodium": 0,
        "carb": 2,
        "sugar": 0,
        "protein": 1,
        "caffeine": 150
      },
      {
        "drink_name": "Hot Chocolate",
        "type": "Hot Drinks",
        "size": "Tall",
        "calories": 270,
        "fat": 12,
        "cholesterol": 35,
        "sodium": 105,
        "carb": 32,
        "sugar": 27,
        "protein": 10,
        "caffeine": 20
      },
      {
        "drink_name": "Hot Chocolate",
        "type": "Hot Drinks",
        "size": "Grande",
        "calories": 370,
        "fat": 15,
        "cholesterol": 45,
        "sodium": 160,
        "carb": 44,
        "sugar": 38,
        "protein": 14,
        "caffeine": 25
      },
      {
        "drink_name": "Iced Caffe Latte",
        "type": "Cold Coffees",
        "size": "Tall",
        "calories": 100,
        "fat": 3.5,
        "cholesterol": 15,
        "sodium": 90,
        "carb": 10,
        "sugar": 9,
        "protein": 6,
        "caffeine": 75
      },
      {
        "drink_name": "Iced Caffe Latte",
        "type": "Cold Coffees",
        "size": "Grande",
        "calories": 130,
        "fat": 4.5,
        "cholesterol": 20,
        "sodium": 115,
        "carb": 13,
        "sugar": 11,
        "protein": 8,
        "caffeine": 150
      },
      {
        "drink_name": "Iced Caffe Americano",
        "type": "Cold Coffees",
        "size": "Tall",
        "calories": 10,
        "fat": 0,
        "cholesterol": 0,
        "sodium": 10,
        "carb": 1,
        "sugar": 0,
        "protein": 1,
        "caffeine": 150
      },
      {
        "drink_name": "Iced Caffe Americano",
        "type": "Cold Coffees",
        "size": "Grande",
        "calories": 15,
        "fat": 0,
        "cholesterol": 0,
        "sodium": 15,
        "carb": 2,
        "sugar": 0,
        "protein": 1,
        "caffeine": 225
      },
      {
        "drink_name": "Iced Caramel Macchiato",
        "type": "Cold Coffees",
        "size": "Tall",
        "calories": 180,
        "fat": 5,
        "cholesterol": 20,
        "sodium": 110,
        "carb": 26,
        "sugar": 24,
        "protein": 7,
        "caffeine": 75
      },
      {
        "drink_name": "Iced Caramel Macchiato",
        "type": "Cold Coffees",
        "size": "Grande",
        "calories": 250,
        "fat": 7,
        "cholesterol": 25,
        "sodium": 150,
        "carb": 37,
        "sugar": 34,
        "protein": 10,
        "caffeine": 150
      },
      {
        "drink_name": "Iced Caffe Mocha",
        "type": "Cold Coffees",
        "size": "Tall",
        "calories": 260,
        "fat": 12,
        "cholesterol": 40,
        "sodium": 80,
        "carb": 29,
        "sugar": 23,
        "protein": 7,
        "caffeine": 95
      },
      {
        "drink_name": "Iced Caffe Mocha",
        "type": "Cold Coffees",
        "size": "Grande",
        "calories": 350,
        "fat": 17,
        "cholesterol": 55,
        "sodium": 100,
        "carb": 39,
        "sugar": 30,
        "protein": 10,
        "caffeine": 175
      },
      {
        "drink_name": "Iced White Chocolate Mocha",
        "type": "Cold Coffees",
        "size": "Tall",
        "calories": 310,
        "fat": 14,
        "cholesterol": 45,
        "sodium": 150,
        "carb": 38,
        "sugar": 37,
        "protein": 8,
        "caffeine": 75
      },
      {
        "drink_name": "Iced White Chocolate Mocha",
        "type": "Cold Coffees",
        "size": "Grande",
        "calories": 420,
        "fat": 20,
        "cholesterol": 60,
        "sodium": 200,
        "carb": 50,
        "sugar": 49,
        "protein": 11,
        "caffeine": 150
      },
      {
        "drink_name": "Espresso Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Tall",
        "calories": 140,
        "fat": 1.5,
        "cholesterol": 5,
        "sodium": 140,
        "carb": 29,
        "sugar": 28,
        "protein": 2,
        "caffeine": 125
      },
      {
        "drink_name": "Espresso Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Grande",
        "calories": 210,
        "fat": 2.5,
        "cholesterol": 5,
        "sodium": 210,
        "carb": 43,
        "sugar": 42,
        "protein": 3,
        "caffeine": 155
      },
      {
        "drink_name": "Caramel Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Tall",
        "calories": 260,
        "fat": 11,
        "cholesterol": 35,
        "sodium": 160,
        "carb": 38,
        "sugar": 38,
        "protein": 3,
        "caffeine": 60
      },
      {
        "drink_name": "Caramel Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Grande",
        "calories": 370,
        "fat": 15,
        "cholesterol": 45,
        "sodium": 230,
        "carb": 57,
        "sugar": 55,
        "protein": 4,
        "caffeine": 90
      },
      {
        "drink_name": "Mocha Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Tall",
        "calories": 240,
        "fat": 9,
        "cholesterol": 25,
        "sodium": 150,
        "carb": 37,
        "sugar": 35,
        "protein": 4,
        "caffeine": 70
      },
      {
        "drink_name": "Mocha Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Grande",
        "calories": 370,
        "fat": 15,
        "cholesterol": 45,
        "sodium": 220,
        "carb": 55,
        "sugar": 52,
        "protein": 5,
        "caffeine": 100
      },
      {
        "drink_name": "Caffè Vanilla Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Tall",
        "calories": 280,
        "fat": 10,
        "cholesterol": 30,
        "sodium": 160,
        "carb": 45,
        "sugar": 44,
        "protein": 3,
        "caffeine": 65
      },
      {
        "drink_name": "Caffè Vanilla Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Grande",
        "calories": 400,
        "fat": 14,
        "cholesterol": 45,
        "sodium": 230,
        "carb": 65,
        "sugar": 0,
        "protein": 4,
        "caffeine": 95
      },
      {
        "drink_name": "White Chocolate Mocha Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Tall",
        "calories": 280,
        "fat": 11,
        "cholesterol": 30,
        "sodium": 180,
        "carb": 41,
        "sugar": 40,
        "protein": 4,
        "caffeine": 65
      },
      {
        "drink_name": "White Chocolate Mocha Frappuccino Blended",
        "type": "Frappuccino Blended Beverages",
        "size": "Grande",
        "calories": 410,
        "fat": 16,
        "cholesterol": 45,
        "sodium": 260,
        "carb": 63,
        "sugar": 62,
        "protein": 5,
        "caffeine": 95
      }
     ]
};


app.use('/', express.static('public'));

//randomly select beverage and show json file
app.get('/random', (req, response) => {
  let randomNum = Math.floor(Math.random() * coffeeData.coffee.length);
  let randomCoffee = coffeeData.coffee[randomNum];
  console.log(randomCoffee);
  response.json(randomCoffee);
})

//show all coffee JSON
app.get('/coffee', (req,res) => {
  let maxCal = req.query.calorieLowerThan;

  lowerCalorieDrinks = {};
  // respond with a json of drinks less than a certain calorie
  for(drink in coffeeData.coffee) // loops through the keys in campusCats 
  {
    let lowerCalorieDrink = coffeeData.coffee[drink];
    if(lowerCalorieDrink.calories <= maxCal) {
      lowerCalorieDrinks[drink] = lowerCalorieDrink;
    }
  }

// add conditions so that when user asks for coffee with higher calorie, the API should still work
  if(maxCal) {
    res.json(lowerCalorieDrinks);
  } else {
    res.json({status: "info not present"});
  }
})



app.get('/coffee/:coffeeName', (req,res)=> {
  console.log(req.params.coffeeName);
  let user_coffeeName = req.params.coffeeName;
  let user_obj;
  for(let i=0;i<coffeeData.coffee.length;i++) {
      if(user_coffeeName == coffeeData.coffee[i].drink_name) {
          user_obj = coffeeData.coffee[i];
          
      }
  }
  console.log(user_obj);
  if(user_obj) {
      res.json(user_obj);
  } else {
      res.json({status: "this drink does not exist"});
  }
})


//what port whould we listen to?
app.listen(9000, () => {
    console.log("the server is up and running");
})


//starbucks csv data source
// https://github.com/yhejazi/starbucks-nutrition/blob/master/data/sbux_nutrition.csv 




