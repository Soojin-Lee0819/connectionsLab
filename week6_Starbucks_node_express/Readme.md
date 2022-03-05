# NYUAD Library Cafe Nutritional Label 

**Title**: Weekly To-do List <br>
**Date**: 3 Mar - 6 Mar 2022 <br>
**Deliverable**: Node-Express app using CSS/HTML/Javascript.node.js  <br>


## Overview
<img src="public/images/librarycafe.jpg" width="600">

For this week, I created own API that serves JSON file, and made a webpage that fetches the API I created. For this specific project, I wanted to create something that is useful for the community members of NYUAD. On campus, there is a Starbucks library cafe. While there is a menu available with the price, there is no further information about the nutrients. Therefore, I decided to create an API that has the nutritional label for each drink item in the library cafe and have it displayed on the website. 

## Creating a Server 

### Processing Dataset 

The nutritional information for starbucks drinks were found here [Starbucks Nutrition Analysis](https://github.com/yhejazi/starbucks-nutrition/blob/master/data/sbux_nutrition.csv).

This data set includes following nutritional information:
⋅⋅* Drink Name
⋅⋅* type
⋅⋅* size
⋅⋅* calories
⋅⋅* fat
⋅⋅* cholesterol
⋅⋅* sodium
⋅⋅* carb
⋅⋅* sugar
⋅⋅* protein
⋅⋅* caffeine


### CSV file to JSON file

The original data source was in csv format. I used online csv to json file converter to convert the file. I think sorted out the data that is needed for this project. On campus Library Starbucks serves only a few drink that are on the menu below:
I also cleaned language in a way that is easier for the users. For example, in the original file, there was ® sign: **Oatmilk Honey Latte with Starbucks® Blonde Espresso** that is in the official name, but which people do not use when searching for drink. I also removed the extasis on Caffè Latte. 

<img src="public/images/starbucks_menu.png" width="600">

**Workflow**

Before I start, I wrote down the workflow

**To-do List** <br>
1. Find, create, and edit the dataset
2. Add a new task function 
3. At empty input, pop-up error message
4. Deleting a task 
5. Crossing out a completed task
6. Clearing input field after each entry
7. Error message pop-up(if the add button is pressed when the input field is empty, show error message) 
8. Add focus() method for input element ready for entering
9. Duplicate To-Do list for 7 days
10. Allow press Enter to add new task

## Wireframe

<img src="images/wireframe.jpg" width="600">

Section 1 - Motivational quote slideshow with prev & next button

Section 2 - Weekly To-Do list (from Mon- Sun). Inside each container, there is a user input section, and an output section where the inputted tasks appear.



### JSON file Structure
The file

### req.query & req.params 
Some of the challenges were making understanding of the concept of **req.query** and **req.params**

### Final Project Demonstration

<img src="images/todolistimg.png" width="700">






## Reflection & Evaluation

I want to develop this project by adding price of the beverages to the dataset. On webpage, I want to make a quick survey, either checkbox or user-entry for users to filter the beverage of their choice. I also want to add images for each beverage and have it displayed on the side. Having to npm start for any changes made in index.js file was a bit frustrating. I was wondering if there are any automatic version of this. 

