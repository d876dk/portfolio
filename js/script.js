
$(document).ready(function() { 
  $('.rates__slick').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    adaptiveHeight: true,
    easing: 'ease',
    appendArrows: '.rates__arrows',
    prevArrow: '<span class="slick-prev"><</span>',
    nextArrow: '<span class="slick-next">></span>'
  });

  $('.partners__slider-1').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2500,
        speed: 1500,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
                variableWidth: true,
            }
        }],
    });
    $('.partners__slider-2').slick({
        arrows: false,
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        easing: 'ease',
        autoplay: true,
        pauseOnFocus: true,
        autoplaySpeed: 2700,
        speed: 2000,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true,
                focusOnSelect: true,
                variableWidth: true
            }
        }],
    });


  var slapform = new Slapform();
  slapform.submit({
  form: 'JyCPouQlU',
  data: {
  name: 'Jon Snow',
  message: 'Hello World!',
  }
  })
  .then(function (response) {
  console.log('Success', response)
  })
  .catch(function (e) {
  console.error('Fail', e)
  })

$(".faq__item:first").addClass("faq-active");
 $(".faq__item .faq__item:not(:first)").hide();
 $(".faq__item").click(function () {
   $(this).toggleClass("faq-active");
   $(this).siblings(".faq__item").removeClass("faq-active");
 });


  $(".header__nav-img").click(function () {
   $('div.header__nav-menu').toggleClass("active");
    $('a.header__nav-btn').on('click', function(event) {
    event.preventDefault();
  });
 });


  $('.rates__slick').on(`init reInit`, function (event, slick) {
      $('.rates__arrows-numbers-1').text('0' + 1 + ' '); // ' / ' + '0' + slick.slideCount
  })



  $('.rates__slick').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
    $('.rates__arrows-numbers-1').text('0' + (currentSlide + 1) + ' '); // + ' / 0' + slick.slideCount
  })

});





 // {$('.view-testimonials .slick').on('init reInit afterChange',function(event,slick,currentSlide,nextSlide){
  //   var i=(currentSlide?currentSlide:0)+1;
  //   var i=i>10?i:'0'+i;
  //   var count=slick.slideCount>10?slick.slideCount:'0'+slick.slideCount;
  //   $(this).find('.slick-slide-num').html('<span class="slick-slide-num-current">'+i+'</span> / '+count);