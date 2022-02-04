
/*Quote Slide*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].className = slides[i].className.replace("active", "");
    }
  
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].className += " active";
}

/*To do list Mon*/

document.querySelector('.push').onclick = function(){
  if(document.querySelector('.newtask input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      document.querySelector('.tasks').innerHTML += `
          <div class="task">
          <input type="checkbox">
              <span class="taskname">
                  ${document.querySelector('.newtask input').value}
              </span>
              <button class="delete">
              <i class="fa fa-trash" aria-hidden="true"  style="font-size:2vw;"></i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      var tasks = document.querySelectorAll(".task");
      for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector(".newtask input").value = "";
  }
}


/*To do list Tues*/

document.querySelector('.push2').onclick = function(){
  if(document.querySelector('.newtask2 input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      document.querySelector('.tasks2').innerHTML += `
          <div class="task">
          <input type="checkbox">
              <span class="taskname">
                  ${document.querySelector('.newtask2 input').value}
              </span>
              <button class="delete">
              <i class="fa fa-trash" aria-hidden="true"  style="font-size:2vw;"></i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      var tasks = document.querySelectorAll(".task");
      for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector(".newtask2 input").value = "";
  }
}

/*To do list Wed*/

document.querySelector('.push3').onclick = function(){
  if(document.querySelector('.newtask3 input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      document.querySelector('.tasks3').innerHTML += `
          <div class="task">
          <input type="checkbox">
              <span class="taskname">
                  ${document.querySelector('.newtask3 input').value}
              </span>
              <button class="delete">
              <i class="fa fa-trash" aria-hidden="true"  style="font-size:2vw;"></i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      var tasks = document.querySelectorAll(".task");
      for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector(".newtask3 input").value = "";
  }
}

/*To do list Thurs*/

document.querySelector('.push4').onclick = function(){
  if(document.querySelector('.newtask4 input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      document.querySelector('.tasks4').innerHTML += `
          <div class="task">
          <input type="checkbox">
              <span class="taskname">
                  ${document.querySelector('.newtask4 input').value}
              </span>
              <button class="delete">
              <i class="fa fa-trash" aria-hidden="true"  style="font-size:2vw;"></i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      var tasks = document.querySelectorAll(".task");
      for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector(".newtask4 input").value = "";
  }
}

/*To do list Friday*/

document.querySelector('.push5').onclick = function(){
  if(document.querySelector('.newtask5 input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      document.querySelector('.tasks5').innerHTML += `
          <div class="task">
          <input type="checkbox">
              <span class="taskname">
                  ${document.querySelector('.newtask5 input').value}
              </span>
              <button class="delete">
              <i class="fa fa-trash" aria-hidden="true"  style="font-size:2vw;"></i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      var tasks = document.querySelectorAll(".task");
      for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector(".newtask5 input").value = "";
  }
}
/*To do list Saturday*/

document.querySelector('.push6').onclick = function(){
  if(document.querySelector('.newtask6 input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      document.querySelector('.tasks6').innerHTML += `
          <div class="task">
          <input type="checkbox">
              <span class="taskname">
                  ${document.querySelector('.newtask6 input').value}
              </span>
              <button class="delete">
              <i class="fa fa-trash" aria-hidden="true"  style="font-size:2vw;"></i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      var tasks = document.querySelectorAll(".task");
      for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector(".newtask6 input").value = "";
  }
}

/*To do list Sunday*/

document.querySelector('.push7').onclick = function(){
  if(document.querySelector('.newtask7 input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      document.querySelector('.tasks7').innerHTML += `
          <div class="task">
          <input type="checkbox">
              <span class="taskname">
                  ${document.querySelector('.newtask7 input').value}
              </span>
              <button class="delete">
              <i class="fa fa-trash" aria-hidden="true"  style="font-size:2vw;"></i>
              </button>
          </div>
      `;

      var current_tasks = document.querySelectorAll(".delete");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }

      var tasks = document.querySelectorAll('input[type=checkbox]');
      for(var i=0; i<tasks.length; i++){
          tasks[i].onclick = function(){
              this.classList.toggle('completed');
          }
      }

      document.querySelector(".newtask7 input").value = "";
  }
}

//1. DONE || Add Slides for the quote
//2. DONE || Add Prev/Next button for the slideshow 
//3. DONE || Make List writing function 
//4. DONE || Make Add Checkbox
//5. DONE || Add delete function 
//6. DONE || Make it responsive