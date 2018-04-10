$(document).ready(function () {
  (function () {
    $('.events-slider').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: '40px',
      customPaging: function (slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<button class="slick-dots-item"></button>';
      },
      prevArrow: '<button class="prev-slick-button"></button>',
      nextArrow: '<button class="next-slick-button"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
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
  (function () {
    setMarginPrevButton();
    function setMarginPrevButton() {
      var dotsWidth = $('.slick-dots').width();
      var containerButton = $('.slick-dots').parent();
      var marginPrevButton = parseFloat(dotsWidth) + 30 + 'px';
      containerButton.find('.prev-slick-button').css('margin-right', marginPrevButton);

    };
    $(window).resize(function () {
      setMarginPrevButton();
    });
  })();
});
