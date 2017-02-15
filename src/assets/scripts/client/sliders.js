 $(document).ready(function() {
    $('#lightSlider0').lightSlider({
        item:1,
        loop:false,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
        
        ],
        pager: false
    });  
  });


  if ($(window).width() < 1199) {
     var slides = $('.video-item')
     var slide;
     var newSlides = [];
     for (var i = 0; i < slides.length; i++) {
         slide = $('<li>').append(slides[i]);
         newSlides.push(slide)
     }
     var $ulSlider = $('<ul class="additional-slider">').append(newSlides);
     $('.items-wrapper').append($ulSlider);
     $(".additional-slider").lightSlider({
         auto: true,   
         item: 1,
         pager: false,
         keyPress: false,
         slideMove: 1,
         slideMargin: 40,
         mode: 'slide',
         useCSS: true,
         easing: 'linear',
         loop: true,
         enableTouch: true,
         responsive: [
         ]
     });
 }
