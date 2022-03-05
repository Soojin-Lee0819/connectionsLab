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
            console.log (drinkcarb);

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



