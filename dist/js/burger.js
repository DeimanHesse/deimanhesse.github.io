// $(document).ready(function() {
//     $('.icon-menu').click(function(event){
//         $('.icon-menu').toggleClass('_active');
//         $('.menu__body').toggleClass('active');
//         $('.menu__link').toggleClass('active');
       
//     });

// });

//------------------Burger--------------------

let menuPageBurger = document.querySelector('.menu__burger');
let menuPageBody = document.querySelector('.menu__list');
menuPageBurger.addEventListener("click", function (e) {
  menuPageBurger.classList.toggle('_active');
  menuPageBody.classList.toggle('_active');
})