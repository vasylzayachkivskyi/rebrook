
$(function () {


  //  ----- mobile menu ------  //
  $('.burger-btn').on('click', function () {
    $(this).toggleClass('active');
    $('.mobile__menu').toggleClass('active');
    $('body').toggleClass('hidden');
  });


  //  ----- graph slider ------- //

  $('.graph__inner').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
    speed: 800,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 2,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          speed: 800,
          infinite: false,
        }
      }
    ]
  });







  // var suma = 0;
  // $('.graph__item-summ').each(function ($el) {
  //   suma += parseFloat($el.attr('data-summ'))
  //   console.log(suma)
  //   });



  // var allSum = 0

  // $('.graph__item').each(function () {
  //   var sum = $(this).find('.graph__item-summ').attr('data-summ');
  //   allSum += parseFloat(sum)
  //   var persent = allSum / 100;
  //   var newHeight = 8 * (sum / persent);
    
  //   $(this).find('.graph__item-col').animate({
  //     height: newHeight,
  //   }, 4000);
  //   $(this).find('.graph__item-summ').text('$ ' + sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
  // });




// ------------------------------------------ //


  // $('.graph__item').each(function () {
  //   var newHeight = $(this).find('.graph__item-col').attr('data-height');
  //   $(this).find('.graph__item-col').animate({
  //     height: newHeight,
  //   }, 4000);
  // });
  

  // -------------- scroll to block ---------- //


  $(window).scroll(function(){
    var scrolltop = $(this).scrollTop();
    var topHeight = $('.aboutus').height();
      if(scrolltop >= topHeight) {
        $('.graph__item').each(function () {
          var newHeight = $(this).find('.graph__item-col').attr('data-height');
          $(this).find('.graph__item-col').animate({
            height: newHeight,
          }, 2500);
        });
      }
  });





});



AOS.init({
  duration: 1200,
  easing: 'ease-in-out-cubic'
});