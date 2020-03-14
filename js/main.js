document.addEventListener("DOMContentLoaded", function(){
 const modal = document.querySelector(".modal");
 const modalBtn = document.querySelectorAll("[data-toggle=modal]");
 const closeBtn = document.querySelector(".modal__close");
 const closeModal = document.querySelector('.modal');
 const switchModal = () => {
  modal.classList.toggle("modal--visible");
 }

 modalBtn.forEach(element => {
  element.addEventListener("click", switchModal);
 });

 closeBtn.addEventListener('click', switchModal);

 closeModal.addEventListener('click', switchModal);

 document.body.addEventListener('keyup', function (e) {
 var key = e.keyCode;

 if (key == 27) {
  modal.classList.toggle("modal--visible");
 };
 }, false);

});

