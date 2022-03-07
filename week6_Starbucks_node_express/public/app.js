console.log("this is the browser");


//Request random coffee
let coffeeButton = document.getElementById("coffee-button");
coffeeButton.addEventListener("click", () => {

    //Request random coffee object
    fetch("/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let drinkname = data.drink_name;
            let drinksize = data.size;
            let drinkcalories = data.calories;
            let drinkfat = data.fat;
            let drinkcholesterol = data.cholesterol;
            let drinksodium = data.sodium;
            let drinkcarb = data.carb;
            let drinksugar = data.sugar;
            let drinkprotein = data.protein;
            let drinkcaffeine = data.caffeine;

            document.getElementById("coffee-random").innerHTML = drinkname;

            document.getElementById("drink_info_left").innerHTML = `

            <p> size </p>
            <p> calories </p>
            <p> fat </p>
            <p> cholesterol </p>
            <p> sodium </p>
            <p> carb </p>
            <p> sugar </p>
            <p> protein </p>
            <p> caffeine </p>

            `
            document.getElementById("drink_info_right").innerHTML = `
            <p> ${drinksize}</p>
            <p> ${drinkcalories} kcal </p>
            <p> ${drinkfat} g</p>
            <p> ${drinkcholesterol} mg</p>
            <p> ${drinksodium} mg</p>
            <p> ${drinkcarb} g</p>
            <p> ${drinksugar} g</p>
            <p> ${drinkprotein} g</p>
            <p> ${drinkcaffeine} mg</p>
               `
        });
});



//Request low calorie random coffee
let coffeeButtonlow = document.getElementById("coffee-button-low");
coffeeButtonlow.addEventListener("click", () => {
    //Request query object: only coffee that is calorie lower than 100
    fetch("/coffee?calorieLowerThan=100")
        .then(response => response.json())
        .then(data => {
            //push fetched data (lowercaloriedrinks) to newlowCalorieArray
            let newlowCalorieArray = [];
            for (drink in data) {
                newlowCalorieArray.push(data[drink]);
            }
            let randomNum = Math.floor(Math.random() * newlowCalorieArray.length);
            console.log(newlowCalorieArray[randomNum])
            let thisdrink = newlowCalorieArray[randomNum]
            let drinkname = thisdrink.drink_name;
            let drinksize = thisdrink.size;
            let drinkcalories = thisdrink.calories;
            let drinkfat = thisdrink.fat;
            let drinkcholesterol = thisdrink.cholesterol;
            let drinksodium = thisdrink.sodium;
            let drinkcarb = thisdrink.carb;
            let drinksugar = thisdrink.sugar;
            let drinkprotein = thisdrink.protein;
            let drinkcaffeine = thisdrink.caffeine;

            document.getElementById("coffee-random").innerHTML = drinkname;

            document.getElementById("drink_info_left").innerHTML = `

        <p> size </p>
        <p> calories </p>
        <p> fat </p>
        <p> cholesterol </p>
        <p> sodium </p>
        <p> carb </p>
        <p> sugar </p>
        <p> protein </p>
        <p> caffeine </p>

        `
            document.getElementById("drink_info_right").innerHTML = `
        <p> ${drinksize}</p>
        <p> ${drinkcalories} kcal </p>
        <p> ${drinkfat} g</p>
        <p> ${drinkcholesterol} mg</p>
        <p> ${drinksodium} mg</p>
        <p> ${drinkcarb} g</p>
        <p> ${drinksugar} g</p>
        <p> ${drinkprotein} g</p>
        <p> ${drinkcaffeine} mg</p>
           `

        });
});


//Request specific coffee

//Request Americano
let americanoButton = document.getElementById("americano");
americanoButton.addEventListener("click", () => {
        //Request params:Iced Caffe Americano
        fetch('/coffee/Iced Caffe Americano')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let drinkname = data.drink_name;
            let drinksize = data.size;
            let drinkcalories = data.calories;
            let drinkfat = data.fat;
            let drinkcholesterol = data.cholesterol;
            let drinksodium = data.sodium;
            let drinkcarb = data.carb;
            let drinksugar = data.sugar;
            let drinkprotein = data.protein;
            let drinkcaffeine = data.caffeine;

            document.getElementById("coffee-random").innerHTML = drinkname;

            document.getElementById("drink_info_left").innerHTML = `

            <p> size </p>
            <p> calories </p>
            <p> fat </p>
            <p> cholesterol </p>
            <p> sodium </p>
            <p> carb </p>
            <p> sugar </p>
            <p> protein </p>
            <p> caffeine </p>

            `
            document.getElementById("drink_info_right").innerHTML = `
            <p> ${drinksize}</p>
            <p> ${drinkcalories} kcal </p>
            <p> ${drinkfat} g</p>
            <p> ${drinkcholesterol} mg</p>
            <p> ${drinksodium} mg</p>
            <p> ${drinkcarb} g</p>
            <p> ${drinksugar} g</p>
            <p> ${drinkprotein} g</p>
            <p> ${drinkcaffeine} mg</p>
               `
        })

})

//Request Iced-Cafe-Mocha
let cafemochaButton = document.getElementById("caffee-mocha");
cafemochaButton.addEventListener("click", () => {
        //Request params:Iced-Cafe-Mocha
        fetch('/coffee/Iced Caffe Mocha')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let drinkname = data.drink_name;
            let drinksize = data.size;
            let drinkcalories = data.calories;
            let drinkfat = data.fat;
            let drinkcholesterol = data.cholesterol;
            let drinksodium = data.sodium;
            let drinkcarb = data.carb;
            let drinksugar = data.sugar;
            let drinkprotein = data.protein;
            let drinkcaffeine = data.caffeine;

            document.getElementById("coffee-random").innerHTML = drinkname;

            document.getElementById("drink_info_left").innerHTML = `

            <p> size </p>
            <p> calories </p>
            <p> fat </p>
            <p> cholesterol </p>
            <p> sodium </p>
            <p> carb </p>
            <p> sugar </p>
            <p> protein </p>
            <p> caffeine </p>

            `
            document.getElementById("drink_info_right").innerHTML = `
            <p> ${drinksize}</p>
            <p> ${drinkcalories} kcal </p>
            <p> ${drinkfat} g</p>
            <p> ${drinkcholesterol} mg</p>
            <p> ${drinksodium} mg</p>
            <p> ${drinkcarb} g</p>
            <p> ${drinksugar} g</p>
            <p> ${drinkprotein} g</p>
            <p> ${drinkcaffeine} mg</p>
               `
        })

})

//Request Hot-Chocolate
let hotChocolateButton = document.getElementById("hot-chocolate");
hotChocolateButton.addEventListener("click", () => {
        //Request params:Hot Chocolate
        fetch('/coffee/Hot Chocolate')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let drinkname = data.drink_name;
            let drinksize = data.size;
            let drinkcalories = data.calories;
            let drinkfat = data.fat;
            let drinkcholesterol = data.cholesterol;
            let drinksodium = data.sodium;
            let drinkcarb = data.carb;
            let drinksugar = data.sugar;
            let drinkprotein = data.protein;
            let drinkcaffeine = data.caffeine;

            document.getElementById("coffee-random").innerHTML = drinkname;

            document.getElementById("drink_info_left").innerHTML = `

            <p> size </p>
            <p> calories </p>
            <p> fat </p>
            <p> cholesterol </p>
            <p> sodium </p>
            <p> carb </p>
            <p> sugar </p>
            <p> protein </p>
            <p> caffeine </p>

            `
            document.getElementById("drink_info_right").innerHTML = `
            <p> ${drinksize}</p>
            <p> ${drinkcalories} kcal </p>
            <p> ${drinkfat} g</p>
            <p> ${drinkcholesterol} mg</p>
            <p> ${drinksodium} mg</p>
            <p> ${drinkcarb} g</p>
            <p> ${drinksugar} g</p>
            <p> ${drinkprotein} g</p>
            <p> ${drinkcaffeine} mg</p>
               `
        })

})