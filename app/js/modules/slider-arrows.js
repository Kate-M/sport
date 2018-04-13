    function setMarginPrevButton() {
      var dotsWidth = $('.slick-dots').width();
      var containerButton = $('.slick-dots').parent();
      var marginPrevButton = parseFloat(dotsWidth) + 30 + 'px';
      containerButton.find('.event-arrow.prev-button').css('margin-right', marginPrevButton);

    };
    $(window).resize(function () {
      setMarginPrevButton();
    });
