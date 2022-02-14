# Identify Names Around the World 

**Title**:Identify Names Around the World <br>
**Category**: Project 1 <br>
**Date**: 9 Feb - Continue Feb 2022 <br>
**Deliverable**: CSS/HTML/Javascript/API WebGame & Data Visualization <br>

[Access Project Here](https://soojin-lee0819.github.io/connectionsLab/Project1)

## Project Brief
A person's name tells a lot about one’s identity. Albeit subconsciously, once we hear names, we immediately associate the names with the naem owners' genders, nationalities, and even their ages. For example, my name “Soojin” is a typical Korean female name in Korea that people who are familiar with Korean culture would immediately build a profile of myself upon introduction. For this project, using three APIs (agify API, genderize API, nationalize API), that predicts the age, gender, and nationality of the given name, I plan to create a data visualization game. There are two elements to this project. The first is data visualization and the second is gamification. For the data-visualization part, players simply need to type in the name and click the submit button to receive visual data about the name’s predicted age, gender, and nationality. For the game part, players need to be more proactively participating in the game by typing in as many diverse names as possible. The goal of this game is to type in as many names as possible that aren’t from the same country, age range (10s, 20s, 30s ...), and gender category. If the player type in two names that shares all three identities (gender, age, and nationality), the data visualization they made so far will disappear and the page will reset. This game is for people who are curious about the cultures, human diversity, or people who live in a diverse community like members of NYUAD. Through the process of playing, I hope players have fun finding different names from different backgrounds but also think critically about the biases and labels that exist in names and identities.

## Inspiration

When starting this project, I wanted this project to be focused on the dataset. Therefore, I started with researching APIs with interesting datasets and I came across agify API](https://api.agify.io/?name=michael), a simple API for predicting the age of a person given their name. I found this API really cool becasue I recently read an article, about [The 50 best baby names of 2022] (https://www.today.com/parents/babies/most-popular-baby-names-2022-rcna14922), and was surprised to find out how names also have trends just like how popular fashion styles change overtime. It also got me to think critically about how we immediately start to profile others' identities when we are introduced with names. Although we don't think about it often, names are a huge part of our identities - a linguistic label that is put on us. Therefore, names can provide a significant information or assuptions aobut us - whether it be the nationality, gender, or the age. Interested in this sociolinguistic aspects of names and the associated datas, I decided to create a website that makes a data-visualization of the names and a fun interation players can have using their understandings of names around the world. 

## Data & API
For this project, I am using three APIs which are: 

[agify API](https://api.agify.io/?name=michael) - An API for predicting the age of a person given their name.

[nationalize API](https://nationalize.io) - An API for predicting nationality from a name.

[gender API](https://genderize.io/?gclid=EAIaIQobChMIsfmD9dP_9QIVCcPVCh1d1gvhEAAYAiAAEgIeFfD_BwE) - A simple API to predict the gender of a person given their name

I would like to note that the data set inherently involves biases and This is not to make a perfect desciption of the demographics or to classify people with such name into a category, but the point of this project is to engage players to explore about different names around the world and have fun while guessing the identity associated with the data. For example, for the age dataset, I found it not too accurate since the age is predicted based on the average of the entered data. I couldn't find the name that would yield the age that is teenager or younger. I decided to not use the genderize data since I found the dataset discriminatory - as it is binarilly dividing gender into female or male. 

## Process and Challenges
Originally, I was only using one API, the agify API. Therefore I started with brainstorming on ideas about how to use this data in a meaningful and fun manner. 

<img src="images/brainstorm.jpg" width="600">


<img src="images/process1.jpg" width="600">

## Next Steps

1) Associate visual representation of the bubble with nationality and gender as well. (As of now, all the variables such as colors and the sizes are manipulated by the age data).
2) Make bubbles move within the canvas to make it more visually stimulating (Add some animation).
3) Add function: Classify age data into categories (for example age between 10-20, age between 20-30) to compare.
4) Add function: Store all the output data of the userinput to compare with new entry
5) Add function: If the output data of the new input matches with the previous dataset, the game ends
6) Consider storing classes to different js files to organize code.
7) Describe project and write down instructions on how to play the game on the landing page using visual cues (minimize writing). 
8) Prevent Errors such as error message pop up when the input is submitted without any entry.
