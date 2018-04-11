  var player;

  function createPlayer(videoID) {
    return new YT.Player(videoID, {
      videoId: videoID,
      events: {
        'onReady': onPlayerReady
      }
    });
  };
  
  function findPlayer() {
    document.querySelectorAll('.video-slider .slick-active .video').forEach(
      function (el) {
        h = createPlayer(el.getAttribute('id'));
      }
    );
  }
  function onYouTubeIframeAPIReady() {
    findPlayer();  
  }
  
  function onPlayerReady(event) {
    event.target.setVolume(30);
    event.target.stopVideo();
  }
  function playVideo() {
    player.playVideo();
  };
  function pauseVideo() {
    player.pauseVideo();
  };