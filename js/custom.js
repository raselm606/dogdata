$(document).ready(function(){

    //one page nav smooth scrool

    var html_body = $('html, body');
    $('.nav-collap ul li a').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                            html_body.animate({
                                    scrollTop: target.offset().top - 90
                            }, 1500);
                            return false;
                    }
            }
    });

    //sticky nav

      $(".top-area").sticky({topSpacing:0});


//slider js
$('.slider-owll').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

/*===================================*
     08.COUNTDOWN JS

    *===================================*/

    $('.tk_countdown_time').each(function() {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function(tm) {
            $(this).html(tm.strftime('<span class="counter_box"><span class="tk_counter days">%D </span><span class="tk_text">Days</span></span><span class="counter_box"><span class="tk_counter hours">%H</span><span class="tk_text">Hours</span></span><span class="counter_box"><span class="tk_counter minutes">%M</span><span class="tk_text">Minutes</span></span><span class="counter_box"><span class="tk_counter seconds">%S</span><span class="tk_text">Seconds</span></span>'));
        });
    });


    //magnify video
    $('.video-view').magnificPopup({
      type: 'iframe'
      // other options
    });


    // roadmap slider js
$('.roadmap-slider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    mouseDrag:false,
    dots:true,
    autoplay:false,
    slideBy:1,
    autoplayTimeout:1000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
});

    // solution slider js
$('.solution-item').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

 $(".scroll-topp").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 2000);
  return false;
});

 //close homepage notification
$(".close-hb span").click(function(){
  $(".ico-nesws-hb").slideToggle("slow");
});

});