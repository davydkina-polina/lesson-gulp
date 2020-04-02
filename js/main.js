$(document).ready( function(){
  
  //  кнопка наверх
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) { 
      // определяет текущее вертикальное положение полосы прокрутки и если оно становится больше 100 px, то кнопка появляется
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
     
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    // 0 - значит страница будет прокручена вверх до самого начала до нулевого пикселя, а 600 - это скорость анимации в миллисекундах
    return false;
    });

 var modal = $('.modal'),
     modalBtn = $('[data-toggle=modal]'),
     closeBtn = $('.modal__close');
     btn = $('#myBtn');

     modalBtn.on('click', function () {
      modal.toggleClass('modal--visible');
     });
     closeBtn.on('click', function () {
      modal.toggleClass('modal--visible');
      // modal.style.display = "none";
     });

     $(document).keydown(function(e) {
      // ESCAPE key pressed
      if (e.keyCode == 27) {
       modal.toggleClass('modal--visible');
      }
     });
     
     btn.on('click', function () {
      modal.css("display", "flex");
     });

    //  window.on('click', function () {
    //   // modal.css("display", "none");
    //   modal.toggleClass('modal--visible');
    //  });

    
     
  //    $(document).click(function(e){
  //     if ($(e.target).parents().filter('.modal:visible').length != 1 && !$(e.target).hasClass('[data-toggle=modal]')) {
  //         $('.modal').hide();
  //     }
  // });
});

// document.addEventListener("DOMContentLoaded", function(){
//  const modal = document.querySelector(".modal");
//  const modalBtn = document.querySelectorAll("[data-toggle=modal]");
//  const closeBtn = document.querySelector(".modal__close");
//  const btn = document.getElementById("myBtn");
//  const switchModal = () => {
//   modal.classList.toggle("modal--visible");
//  }
//  modalBtn.forEach(element => {
//   element.addEventListener("click", switchModal);
//  });

//  closeBtn.onclick = function() {
//   modal.style.display = "none";
//  }

//  btn.onclick = function() {
//   modal.style.display = "flex";
//  }

//  window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
//  }

//  document.body.addEventListener('keyup', function (e) {
//  var key = e.keyCode;

//  if (key == 27) {
//   modal.classList.toggle("modal--visible");
//  };
//  }, false);

// });

