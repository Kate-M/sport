var player;
var playersList = {};

function findPlayer(slide) {
  var newPlayer = playersList[slide];
  player = newPlayer || createPlayerFromHtml(slide);

  playersList[slide] = player;

  return player;
}

function createPlayerFromHtml(slide) {
  var source = document.querySelector(".video-slider [data-slick-index=\"" + slide + "\"] .video");

  if (!source) return null;

  var id = source['id'];
  return createPlayer(id)
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
  findPlayer(0);
  findPlayer(1);
}

function onPlayerReady(event) {
  event.target.setVolume(30);
  event.target.stopVideo();
}
function playVideo() {
  if (player) player.playVideo();
}

function pauseVideo() {
  if (player) player.pauseVideo();
};
