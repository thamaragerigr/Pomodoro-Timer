
//TIMER
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


let currentOffset= 0;
let duration;

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
      duration = totalDuration;
    },

    onTick(timeRemaining){
      circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
      )
    },

    onComplete(){
      console.log('pausa');
    }
});





//MODAL BOX
const modal = document.getElementById("modal");
const info = document.getElementById("info");
const span = document.getElementsByClassName("close")[0];

info.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}