$(document).ready(function(){

        // НАВИГАЦИЯ

// Опеделяем переменные
  var navToggleButton = $('#navigation__button');
  var navToggleIcon = $('.navigation__toggle .fa');
  var navBlock = $('.navigation__list');
  var navBlockOpen = 'navigation__list--open';
  var navLink = $('.navigation__list a');

  // События по клику на иконку
  navToggleButton.on('click', function(e){
    e.preventDefault();
    navBlock.toggleClass(navBlockOpen);
    navButtonToggle();
  })

  // События по клику на ссылки
  navLink.on('click', function(){
    if ( navBlock.hasClass(navBlockOpen) ) {
      navButtonToggle();
    }
    navBlock.removeClass(navBlockOpen);
  })

  // Функция для анимации иконки
  function navButtonToggle(){
    if ( navToggleButton.hasClass("active")) {
      navToggleButton.removeClass("active");
    } else {
      navToggleButton.addClass("active");
    }
  }

        // КАРУСЕЛЬ №1

  // $(".owl-carousel").owlCarousel({
  // 	items: 1,
  // 	loop:true,
  //   navText: ['',''],
  // 	autoplay: false,
  //   smartSpeed: 2000,
  //   responsiveClass:true,
  //     responsive:{
  //       0:{
  //           nav:false,
  //           dots: true
  //       },
  //       960:{
  //           nav:true,
  //           navText: ["",""],
  //       }
  //     }
  // });

// Карусе-#1 для секци POST
 // $(".post__owlcarousel").owlCarousel({
 //    items: 1,
 //    loop:true,
 //    dots: true,
 //    autoplay: true,
 //    smartSpeed: 1500,
 //  });

  $(function(){
    $('.owl-carousel').each(function(){
      $(this).owlCarousel({
        items: 1,
        loop:true,
        navText: ['',''],
        autoplay: false,
        smartSpeed: 2000,
        responsiveClass:true,

          responsive:{
            0:{
              nav:false,
              dots: true
            },
            960:{
              nav:true,
              navText: ["",""]
            }
          }
        });
    });
    $('.post__owlcarousel').each(function(){
      $(this).owlCarousel({
        items: 1,
        loop:true,
        dots: true,
        autoplay: true,
        smartSpeed: 1500,
      });
    });
});

  // Форма поиска
// $(".fa-search").click(function(){
//     $(".header__icon-search, .input").toggleClass("active-search");
//     $("input[type='text']").focus();
// });
// Для версии V3
  var mixer = mixitup ( ' #projects',{

    animation: {
        duration: 800
    }
  } );

// Добавление рамок для кнопок фильтра

  var button= $('.filter-block__button');
  var buttonActive ='filter-block__button--active';
  $(button).on("click", function () {
    $(button).removeClass(buttonActive);
    $(this).toggleClass(buttonActive);
  });

// FancyBox - galery
$('[data-fancybox="gallery"]').fancybox({
  // Options will go here
});



// Кнопка в верх


  /*
  var defaults = {
  containerID: 'toTop', // fading element id
  containerHoverID: 'toTopHover', // fading element hover id
  scrollSpeed: 1200,
  easingType: 'linear'
  };
  */

  $().UItoTop({ easingType: 'easeOutQuart' });

// кнопка в верх

});
