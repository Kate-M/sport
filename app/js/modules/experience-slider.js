$(document).ready(function () {
  (function () {
    $('.video-slider').slick({
      infinite: true,
      centerMode: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      variableWidth: true,
      prevArrow: '<button class="video-arrow prev-button"></button>',
      nextArrow: '<button class="video-arrow next-button"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false
          }
        }
      ]
    });

    $('.video-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      pauseVideo();
    });

    $('.video-slider').on('afterChange', function (event, slick, currentSlide) {
      var nextSlide = currentSlide + 1;
      var prevSlide = currentSlide - 1;
      var activeSlide = document.querySelectorAll('.video-slider .slick-active .item')[0].children[0].getAttribute('class');

      if (nextSlide >= 0 && nextSlide < slick.slideCount) {
        findPlayer(nextSlide);
        findPlayer(currentSlide);
      }
    });
  })();
});
