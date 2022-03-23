console.log("hello");

window.addEventListener("load",()=> {

//fetch the /messages api and load the information. Show it on the feed

//hide the pop on start

//hide the pop on start
let createPostDiv = document.getElementById("create_container");
createPostDiv.style.display ="none";

function originalOpacity() {
    document.querySelector("header").style.opacity = "1";
    document.querySelector(".post_container").style.opacity = "1";
    document.querySelector(".createButton_container").style.opacity = "1";

}


function lowerOpacity() {
    document.querySelector("header").style.opacity = "0.2";
    document.querySelector(".post_container").style.opacity = "0.2";
    document.querySelector(".createButton_container").style.opacity = "0.2";

}

//BUTTON TO DISPLAY CREATE NEW POST
let newPostButton = document.getElementById("new_button");
newPostButton.addEventListener("click",() => {
    console.log("Button CLicked");
    if(createPostDiv.style.display =="inline"){
        createPostDiv.style.display = "none";
        originalOpacity();
    } else{
        createPostDiv.style.display ="inline";
        lowerOpacity();
    }

    //this is to get rid of previously typed value
    document.getElementById("name").value = "";
    document.getElementById("post").value = "";
})

//this is to validate if the post is empty or not
function validatePost() {
    if (document.getElementById('name').value == "") {
      alert("Name must be filled out");
      return false;
    } else if (document.getElementById('post').value == ""){
        alert("Post must be filled out");
        return false; 
    }
    return true;
}

  


//POST!!! SUBMIT THE POST AFTER USER TYPE IN CONTENT
let createPostButton = document.getElementById("create_button");
createPostButton.addEventListener("click",()=>{

   validatePost();

   if(validatePost()) {
    createPostDiv.style.display = "none";
    originalOpacity();
   };

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
    


    fetch('/messages')
    .then(res=>res.json())
    .then(data => {
        document.getElementById('posts').innerHTML = '';
            console.log(data);
            for(let i=0;i<data.data.length;i++) {
                let string = data.data[i].name + " : " + data.data[i].post;
                let elt = document.createElement('p');
                elt.innerHTML = string;
                document.getElementById('posts').appendChild(elt);
            }
      })


})

})