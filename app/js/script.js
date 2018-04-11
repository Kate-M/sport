var player;
var playersList = {};

function findPlayer(slide) {
  var newPlayer = playersList[slide];
  player = newPlayer || createPlayerFromHtml();
  playersList[slide] = player;
  return playersList;
}

function createPlayerFromHtml() {
  var idActiveSlide = document.querySelectorAll('.video-slider .slick-active .video')[0].getAttribute('id')
  return createPlayer(idActiveSlide)
}

function createPlayer(videoID) {
  return new YT.Player(videoID, {
    videoId: videoID,
    events: {
      'onReady': onPlayerReady
    }
  });
};

function onYouTubeIframeAPIReady() {
  findPlayer('0');
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