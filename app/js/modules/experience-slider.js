$(document).ready(function () {
  (function () {
    $('.video-slider').slick({
      infinite: true,
      centerMode: true,
      dots: false,
      slidesToShow: 1,
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
  })();
  function pauseVideo() {
    $(".video-slider .item .video").each(function(){
      this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
    });
  };
});
