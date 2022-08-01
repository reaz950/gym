$(function(){
    //Banner slider
    
$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false,
    dots:true,
  });

  // About video

  $('.venobox').venobox(); 


  //testimonial part

  $('.test-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    arrows:false,
    dots:true,
  });


  //Counter up

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

//sponser slider

$('.sponder_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 500,
  arrows:true,
  dots:false,
  prevArrow:'<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
  nextArrow:'<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
});


})