# NYUAD Expo

**Title**:NYUAD Expo <br>
**Category**: Project 2 <br>
**Date**: 1 April 2022 -11 April 2022 <br>
**Group**: Soojin Lee | Alia Waleed <br>
**Deliverable**: CSS/HTML/Javascript/p5.js/Socket.IO Multiplayer Web Game <br>

[Access Project Here](https://soojin-lee0819.github.io/connectionsLab/Project1)


### Project Brief 

This game is inspired by Expo 2020 where the visitors go around different pavilions to experience the unique culture of countries around the world. Similarly, in this game, players would explore the campus of NYUAD while visiting different campus pavilions including D2, C2,  A2, and the Field. In each pavilion, the players would play a different 2-player game. 

On the landing page, there would be a map of campus with 4 clickable locations as well as the total number of players inside each pavilion. The players pick the pavilion of their choice and get redirected to a specific game page. At the Track & Field pavilion, players can play tug of war against each other. At the C2 admissions office, players can play a game where they need to collectively write down all majors on campus, and if they write the same major twice, they lose. The third pavilion is D2, where players are given an order and their goal is to complete as many orders as possible (the gameplay mechanism will be a click and pick). The last pavilion is a classroom in A2 where the players would play Pictionary. 

### Inspiration 
<img src="images/dubaiexpo.png" width="900">


### Wire Frame
This is the initial wireframe I made focusing on the structure of the webpage and how users' would access each game. On landing page, users will be given the map of NYUAD with the locations highlighted to enter. When users click the location, they will be directed to the according game page. <br> <br>

<img src="images/wireframe1.jpg" width="600">

<br> <br>

Using figma, I have designed the landing page. At first, I used the 3D modelling map of NYUAD. Here, I added location pin with the real-life images of the location in the shape of bubble. After discussing with Alia, we decided to use the 2D map of NYUAD with the part of the map highlighted. 

<img src="images/landingpagewireframe.png" width="800"> <br> <br>

We also designed the quick mockup of each game room to make sure the visual interface is consistent throughout the game. Although each game has its own unique features, by making the background consistent with image overlay and the title on the top, we made sure that the game feels - one big game with four minigames, rather than four separate games. 

<br> <br>

<img src="images/wireframeconsistent.png" width="800">

### Developing Game Mechanics 

The basic game mechanics of the two minigames are from our previous assignment - C2 | Pictionary from my [NYUAD Pictionary](https://bustling-tortoiseshell-citrine.glitch.me) and D2 | Tug or War from Alia's previous [Tug of War](https://tug-of-war-alia.glitch.me) game. Two other games were ideated in relation to the purpose of locations. For D2 (school cafeteria), inspired by burger making game, we decided to create a game where the players are given with order and need to click images of the D2 food to complete an order. For A2, we wanted to make a game where the players are asked to remember and type in the majors at NYUAD as quickly as possible. 

Following are the list of games available at NYUAD Expo:

1) A2 | Major Hunt
1) C2 | Pictionary
2) D2 | One MealsSwipe
3) Field | Tug of War


### Coding & Challenges

The most challenging part of this project was definitly the coding part. I have br

### Workflow

<img src="images/Workflow1.jpg" width="800">
<img src="images/Workflow2.jpg" width="800">

### Session Storage

<img src="images/landingpage.png" width="600">

Once the user joins the game, on landing page they are asked to enter their names. The entered name is saved in session storage. 

<b> landingPage.js </b> 
  
````
   joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let name = document.getElementById('name-input').value;
      //save the name and the room in session storage
      sessionStorage.setItem('name', name);
    })
````
User connects to socket.io and is given with socket id. The user name, and the socke.id is paired at index.js file. <br><br>

### Map | Join Room

<img src="images/mappage.png" width="600">

On map tab, users can click on the map to join the room. This function will redirect the user to (roomName).html The information about which room to join is also saved as session storage and emitted to the server.  <br><br>

<B> map | script.js</b> <br>

````
function joinRoom(img) {
    let room = img.id;
    //redirect the user to game.html
    console.log(room);
    if (room == 'Field') {
      window.location = '/field/field.html';
    }
    else if (room == 'A2'){
      window.location = '/a2/a2.html';
    }
    else if (room == 'C2'){
      window.location = '/c2/c2.html';
    }
    else if (room == 'D2'){
      window.location = '/d2/d2.html';
    }
    else{ //to be changed
      alert("not available")
    }
    sessionStorage.setItem('room', room); //save to session storage
}
````
  
<br>
  
Here, the user's name is paired with their socket.id and depending on the number of players in the room, <br>
1) The room is created (when 0 player is in the room), 
2) added to the room (when 1 player is in the room), 
3) or asked to wait (when more than 2 players are in the room). <br><br>

<img src="images/alert3rdplayer.png" width="600">
  
<b> Server | index.js</b> <br>

````
 socket.on('userData', (data) => {
        //save username in an array with their ID
        socket.name = data.name;
        users[socket.name] = socket.id;
        console.log(users);

        //let the socket join room of choice
        socket.roomName = data.room;

        socket.join(socket.roomName);
        if (rooms[socket.roomName]) { //if room exists
            // do not increment if there are 2 people in the room 
            if (rooms[socket.roomName] == 2) {
                console.log("Client > 2: ", socket.id);
                socket.emit('morePlayers', '');
            }
            else{
                rooms[socket.roomName]++;
            }
        } else {
            rooms[socket.roomName] = 1;
        }
  
````
  <br>
  
  
  ### Map | Display Number of Players in each Room
  
  <img src="images/mapnumber.png" width="600">
  
  <br>
  Also when the client joins to the room, the number of players in each room are sent to map to be displayed. For example, there is one player at C2. 
  
  <br><br>
  
  <b> Server | index.js</b> <br> 
  
  ````
  // get the number of players in each room and send to map
        let A2 = rooms["A2"];
        let C2 = rooms["C2"];
        let D2 = rooms["D2"];
        let Field = rooms["Field"];

        io.in("map").emit("A2PlayerNum", A2);
        io.in("map").emit("C2PlayerNum", C2);
        io.in("map").emit("D2PlayerNum", D2);
        io.in("map").emit("FieldPlayerNum", Field);
  
  ````
  
 ### Map | Error Checking
  
 When the new client joins, the number of players displayed at each room is accurate. However, when the player returns to the map after completing the game or through clicking the home button, the number of client in each room is no longer accurate. The number of players in all the rooms are set to 0. This also means that when the user return to the map page (not immediately after joining the server), more than 2 players can join the same gameroom. We didn't know how to fix this issue. Not only one the client display but on the server side, the number of user in each room is not updated.
 
 It is only updated when the user disconnect() by closing the tab, or joins another room on the map. 
 
 <img src="images/numcountissue.png" width="600">
   

### GAME | 2 PAGES (Instruction + Play Game)

### GAME START |

### Next Step

The next steps for this game is clear: I want to improve on cleaning the visual elements of the game, make the accumulative score system where the players can collect points from different mini-games and have it shown on the map. 

