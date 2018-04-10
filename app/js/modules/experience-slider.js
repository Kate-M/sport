$(document).ready(function () {
    (function () {
      $('.video-slider').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="video-arrow prev-button"></button>',
        nextArrow: '<button class="video-arrow next-button"></button>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              dots: false
            }
          }
        ]
      });
    })();
  });
  