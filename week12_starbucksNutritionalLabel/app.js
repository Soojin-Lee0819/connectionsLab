console.log("Document is ready!");

let coffeeList = [];



let width = window.innerWidth;

let height = self.innerHeight;


//Select for element to update coffee
let coffeeName = document.getElementById("coffee-name");
let coffeeSize = document.getElementById("coffee-size");
let coffeeCalories = document.getElementById("coffee-calories");
let coffeeCaffeine = document.getElementById("coffee-caffeine");
let coffeeSugar = document.getElementById("coffee-sugar");
let coffeeProtein = document.getElementById("coffee-protein");

//Fetch Space Data
fetch('coffee.json')
    .then(response => response.json())
    .then(data => {
        //do something

        for (let i = 0; i < data.coffee.length; i++) {
            let coffee = data.coffee[i];
            coffeeList.push(coffee);
        }
        addSVG(coffeeList);
        console.log(coffeeList);
    })


//Append Coffee Data
function addSVG(coffeeList) {

    //circle
    let centerX = 20;
    let centerY = 100;


    //Create an SVG
    let svg = d3.select('#container')
        .classed("svg-container", true)
        .append("svg")
        .attr("viewBox", [0, 0, width, height])

    //Create rectangles
    svg.selectAll("circle")
        .data(coffeeList)
        .enter()
        .append("circle")
        .attr("cx", function () { return Math.random() * width / 2 })
        .attr("cy", function () { return Math.random() * height })
        .attr("r", width / 100)
        .attr("fill", "white")
        .style("opacity", 0.6)

        //when mouseover
        .on('mouseover', (evt, d) => {
            console.log(d)
            d3.select(evt.currentTarget)
                .transition()
                .attr("fill", "#ffe42e")
                .attr("r", d.calories)
            coffeeName.innerHTML = d.drink_name
            coffeeSize.innerHTML = "Size: " + d.size
            coffeeCalories.innerHTML = "Calories: " +d.calories
            coffeeCaffeine.innerHTML = "Caffeine: " + d.caffeine
            coffeeSugar.innerHTML = "Sugar: " + d.sugar
            coffeeProtein.innerHTML = "Protein: " + d.protein;
        })

        .on('mouseout', (evt, d) => {
            coffeeName.innerHTML = ""
            coffeeSize.innerHTML = ""
            coffeeCalories.innerHTML = ""
            coffeeCaffeine.innerHTML = ""
            coffeeSugar.innerHTML = ""
            coffeeProtein.innerHTML = ""
            d3.select(evt.currentTarget)
                .transition()
                .attr("fill", "white")
                .style("opacity", 0.6)
                .attr("r", width / 100)
        })


}



