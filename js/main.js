document.addEventListener("DOMContentLoaded", function(){
 const modal = document.querySelector(".modal");
 const modalBtn = document.querySelectorAll("[data-toggle=modal]");
 const closeBtn = document.querySelector(".modal__close");
 const btn = document.getElementById("myBtn");
 const switchModal = () => {
  modal.classList.toggle("modal--visible");
 }
 modalBtn.forEach(element => {
  element.addEventListener("click", switchModal);
 });

 closeBtn.onclick = function() {
  modal.style.display = "none";
 }

 btn.onclick = function() {
  modal.style.display = "flex";
 }

 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
 }

 document.body.addEventListener('keyup', function (e) {
 var key = e.keyCode;

 if (key == 27) {
  modal.classList.toggle("modal--visible");
 };
 }, false);

});

