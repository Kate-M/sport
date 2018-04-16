$(document).ready(function () {
    (function () {
      $('.featured-events-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        customPaging: function (slider, i) {
          var thumb = $(slider.$slides[i]).data();
          return '<button class="slick-dots-item"></button>';
        },
        prevArrow: '<button class="event-arrow prev-button"></button>',
        nextArrow: '<button class="event-arrow next-button"></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: false,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false
            }
          }
        ]
      });
    })();
    setMarginPrevButton();
  });
  