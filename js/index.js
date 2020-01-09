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