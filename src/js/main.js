
$('.first__rotator').owlCarousel({
    loop:true,
    autoplay:true,
    nav:false,
    items:1
});
$('.owl-carousel').owlCarousel({
    lazyLoad: true,
    autoWidth: true,
    responsiveClass:true,
    margin: 33,
    nav: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
});
// модальное окно
var modal = $('.modal'),
modalBtn = $('.first__contacts__button'),
closelBtn = $('.modal__close'),
modalHidden = $('.modal__dialog');
modalHiddenMessage = $('.message__dialog');
modalBtn.on('click', function () {
modal.toggleClass('modal--visible');
});
closelBtn.on('click', function () {
modal.toggleClass('modal--visible');
});
jQuery(function($){
modal.mouseup(function (e){ // событие клика по веб-документу
    if (!modalHidden.is(e.target) && modalHidden.has(e.target).length === 0) { //если клик был не по нашему блоку и не по его дочерним элементам
    modal.toggleClass('modal--visible');// скрываем его
    }
});
});
// Валидация формы
$(document).ready(function () {
    $('.modal__form').validate({
      errorClass: "invalid",
      rules: {
        // строчное правило
        userPhone: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userEmail: {
          required: true,
          minlength: 2,
          maxlength: 15,
          email: false
        },
      }, // сообщения
      errorElement: "div",
      messages: {
        userPhone: {
          required:"Заполните поле",
          minlength: "Логин не короче двух букв"
        },
        userEmail: {
          required: "Заполните поле",
          minlength: "Пароль не короче двух букв"
        }
      },
    });
});
// прокрутка вверх
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('#upbutton').is(':hidden')) {
            $('#upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('#upbutton').stop(true, false).fadeOut('fast'); }
  });
  $('#upbutton').click(function() {
      $('html, body').stop().animate({scrollTop : 0}, 800);
  });