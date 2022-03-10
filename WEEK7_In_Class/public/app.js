console.log("hello");

window.addEventListener("load",()=> {

//fetch the /messages api and load the information. Show it on the feed




    //hide the pop on start
    let createPostDiv = document.getElementById("create_container");
    createPostDiv.style.display ="none";

//BUTTON TO DISPLAY CREATE NEW POST
let newPostButton = document.getElementById("new_button");
newPostButton.addEventListener("click",() => {
    console.log("Button CLicked");
    if(createPostDiv.style.display =="flex"){
        createPostDiv.style.display = "none";
    } else{
        createPostDiv.style.display ="flex";
    }

})


//SUBMIT THE POST AFTER ITS BEEN 
let createPostButton = document.getElementById("create_button");
createPostButton.addEventListener("click",()=>{
    let cName = document.getElementById("name").value;
    let cPost = document.getElementById("post").value;
    
    //creating the object we want to send over the server
    let data = {
        name: cName,
        post: cPost
    }

    //send it over the server
    let msgObjectJSON = JSON.stringify(data);
    console.log(data);


    //Send the data to the server
    fetch('/message', {
        //tells type of content
        method: 'POST',
        //header
        headers: {'Content-Type': 'application/json'},
        //actual message
        body: msgObjectJSON
    })
    .then(res => res.json())
    .then(data => {  console.log(data )})
    
})

})